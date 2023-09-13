/**
 * Copyright 2020 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

import {Frame} from '../../api/Frame.js';
import {HTTPRequest, ResourceType} from '../../api/HTTPRequest.js';

import {BidiHTTPResponse} from './HTTPResponse.js';

/**
 * @internal
 */
export class BidiHTTPRequest extends HTTPRequest {
  override _response: BidiHTTPResponse | null = null;
  override _redirectChain: BidiHTTPRequest[];
  _navigationId: string | null;

  #url: string;
  #resourceType: ResourceType;

  #method: string;
  #postData?: string;
  #headers: Record<string, string> = {};
  #initiator: Bidi.Network.Initiator;
  #frame: Frame | null;

  constructor(
    event: Bidi.Network.BeforeRequestSentParameters,
    frame: Frame | null,
    redirectChain: BidiHTTPRequest[] = []
  ) {
    super();

    this.#url = event.request.url;
    this.#resourceType = event.initiator.type.toLowerCase() as ResourceType;
    this.#method = event.request.method;
    this.#postData = undefined;
    this.#initiator = event.initiator;
    this.#frame = frame;

    this._requestId = event.request.request;
    this._redirectChain = redirectChain;
    this._navigationId = event.navigation;

    for (const header of event.request.headers) {
      // TODO: How to handle Binary Headers
      // https://w3c.github.io/webdriver-bidi/#type-network-Header
      if (header.value.type === 'string') {
        this.#headers[header.name.toLowerCase()] = header.value.value;
      }
    }
  }

  override url(): string {
    return this.#url;
  }

  override resourceType(): ResourceType {
    return this.#resourceType;
  }

  override method(): string {
    return this.#method;
  }

  override postData(): string | undefined {
    return this.#postData;
  }

  override headers(): Record<string, string> {
    return this.#headers;
  }

  override response(): BidiHTTPResponse | null {
    return this._response;
  }

  override isNavigationRequest(): boolean {
    return Boolean(this._navigationId);
  }

  override initiator(): Bidi.Network.Initiator {
    return this.#initiator;
  }

  override redirectChain(): BidiHTTPRequest[] {
    return this._redirectChain.slice();
  }

  override enqueueInterceptAction(
    pendingHandler: () => void | PromiseLike<unknown>
  ): void {
    // Execute the handler when interception is not supported
    void pendingHandler();
  }

  override frame(): Frame | null {
    return this.#frame;
  }
}
