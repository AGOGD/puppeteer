---
sidebar_label: Configuration
---

# Configuration interface

Defines options to configure Puppeteer's behavior during installation and runtime.

See individual properties for more information.

#### Signature:

```typescript
export interface Configuration
```

## Properties

| Property                        | Modifiers             | Type                                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Default                                                                                                                                                              |
| ------------------------------- | --------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| browserRevision                 | <code>optional</code> | string                                                              | <p>Specifies a certain version of the browser you'd like Puppeteer to use.</p><p>Can be overridden by <code>PUPPETEER_BROWSER_REVISION</code>.</p><p>See [puppeteer.launch](./puppeteer.puppeteernode.launch.md) on how executable path is inferred.</p><p>Use a specific browser version (e.g., 119.0.6045.105). If you use an alias such <code>stable</code> or <code>canary</code> it will only work during the installation of Puppeteer and it will fail when launching the browser.</p> | The pinned browser version supported by the current Puppeteer version.                                                                                               |
| cacheDirectory                  | <code>optional</code> | string                                                              | <p>Defines the directory to be used by Puppeteer for caching.</p><p>Can be overridden by <code>PUPPETEER_CACHE_DIR</code>.</p>                                                                                                                                                                                                                                                                                                                                                                | <code>path.join(os.homedir(), '.cache', 'puppeteer')</code>                                                                                                          |
| defaultProduct                  | <code>optional</code> | [Product](./puppeteer.product.md)                                   | <p>Specifies which browser you'd like Puppeteer to use.</p><p>Can be overridden by <code>PUPPETEER_PRODUCT</code>.</p>                                                                                                                                                                                                                                                                                                                                                                        | <code>chrome</code>                                                                                                                                                  |
| downloadBaseUrl                 | <code>optional</code> | string                                                              | <p>Specifies the URL prefix that is used to download the browser.</p><p>Can be overridden by <code>PUPPETEER_DOWNLOAD_BASE_URL</code>.</p>                                                                                                                                                                                                                                                                                                                                                    | Either https://storage.googleapis.com/chrome-for-testing-public or https://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central, depending on the product. |
| executablePath                  | <code>optional</code> | string                                                              | <p>Specifies an executable path to be used in [puppeteer.launch](./puppeteer.puppeteernode.launch.md).</p><p>Can be overridden by <code>PUPPETEER_EXECUTABLE_PATH</code>.</p>                                                                                                                                                                                                                                                                                                                 | **Auto-computed.**                                                                                                                                                   |
| experiments                     | <code>optional</code> | [ExperimentsConfiguration](./puppeteer.experimentsconfiguration.md) | Defines experimental options for Puppeteer.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                      |
| logLevel                        | <code>optional</code> | 'silent' \| 'error' \| 'warn'                                       | Tells Puppeteer to log at the given level.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | <code>warn</code>                                                                                                                                                    |
| skipChromeDownload              | <code>optional</code> | boolean                                                             | <p>Tells Puppeteer to not Chrome download during installation.</p><p>Can be overridden by <code>PUPPETEER_SKIP_CHROME_DOWNLOAD</code>.</p>                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                      |
| skipChromeHeadlessShellDownload | <code>optional</code> | boolean                                                             | <p>Tells Puppeteer to not chrome-headless-shell download during installation.</p><p>Can be overridden by <code>PUPPETEER_SKIP_CHROME_HEADLESSS_HELL_DOWNLOAD</code>.</p>                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                      |
| skipDownload                    | <code>optional</code> | boolean                                                             | <p>Tells Puppeteer to not download during installation.</p><p>Can be overridden by <code>PUPPETEER_SKIP_DOWNLOAD</code>.</p>                                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                                      |
| temporaryDirectory              | <code>optional</code> | string                                                              | <p>Defines the directory to be used by Puppeteer for creating temporary files.</p><p>Can be overridden by <code>PUPPETEER_TMP_DIR</code>.</p>                                                                                                                                                                                                                                                                                                                                                 | <code>os.tmpdir()</code>                                                                                                                                             |