# sc0ttwad3

This is a lightweight solution for deploying single page apps with [GitHub Pages][ghPagesOverview]. You can easily deploy a [React][react] single page app with [React Router][reactRouter] `browserHistory`, like the one in the [live example][liveExample], or a single page app built with any frontend library or framework.

#### Why it's necessary
GitHub Pages doesn't natively support single page apps. When there is a fresh page load for a url like `example.tld/foo`, where `/foo` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/foo`.

#### How it works
When the GitHub Pages server gets a request for a path defined with frontend routes, e.g. `example.tld/foo`, it returns a custom `404.html` page. The [custom `404.html` page contains a script][404html] that takes the current url and converts the path and query string into just a query string, and then redirects the browser to the new url with only a query string and hash fragment. For example, `example.tld/one/two?a=b&c=d#qwe`, becomes `example.tld/?p=/one/two&q=a=b~and~c=d#qwe`.

The GitHub Pages server receives the new request, e.g. `example.tld?p=/...`, ignores the query string and hash fragment and returns the `index.html` file, which has a [script that checks for a redirect in the query string][indexHtmlScript] before the single page app is loaded. If a redirect is present it is converted back into the correct url and added to the browser's history with `window.history.replaceState(...)`, but the browser won't attempt to load the new url. When the [single page app is loaded][indexHtmlSPA] further down in the `index.html` file, the correct url will be waiting in the browser's history for the single page app to route accordingly. (Note that these redirects are only needed with fresh page loads, and not when navigating within the single page app once it's loaded).

A quick SEO note - while it's never good to have a 404 response, it appears based on [Search Engine Land's testing][seoLand] that Google's crawler will treat the JavaScript `window.location` redirect in the `404.html` file the same as a 301 redirect for its indexing. From my testing I can confirm that Google will index all pages without issue, the only caveat is that the redirect query is what Google indexes as the url. For example, the url `example.tld/about` will get indexed as `example.tld/?p=/about`. When the user clicks on the search result, the url will change back to `example.tld/about` once the site loads.


#### Miscellaneous
- The `.nojekyll` file in this repo [turns off Jekyll for GitHub Pages][nojekyll]
- Need form submission on your static site? Use [Formspree][formspree]
- One of the awesome things about the GitHub Pages CDN is that all files are automatically compressed with gzip, so no need to worry about compressing your JavaScript, HTML or CSS files for production


Pull requests welcome. Please open [issues][issues] to report bugs.  
Thoughts, questions, suggestions? Contact me via [email][email] or [twitter][twitter].

<!-- links to within repo -->
[404html]: https://github.com/rafrex/spa-github-pages/blob/gh-pages/404.html
[indexHtmlScript]: https://github.com/rafrex/spa-github-pages/blob/gh-pages/index.html#L37
[indexHtmlSPA]: https://github.com/rafrex/spa-github-pages/blob/gh-pages/index.html#L95
[cnameFile]: https://github.com/rafrex/spa-github-pages/blob/gh-pages/CNAME
[indexHtmlTitle]: https://github.com/rafrex/spa-github-pages/blob/gh-pages/index.html#L6
[404htmlTitle]: https://github.com/rafrex/spa-github-pages/blob/gh-pages/404.html#L5
[favicon]: https://github.com/rafrex/spa-github-pages/blob/gh-pages/index.html#L11
[googleAnalytics]: https://github.com/rafrex/spa-github-pages/blob/gh-pages/index.html#L73
[webpackConfigOverload]: https://github.com/rafrex/spa-github-pages/blob/gh-pages/webpack.config.babel.js#L19
[startScript]: https://github.com/rafrex/spa-github-pages/blob/gh-pages/package.json#L5
[liveServer]: https://github.com/tapio/live-server
[issues]: https://github.com/rafrex/spa-github-pages/issues

<!-- links to github docs -->
[ghPagesOverview]: https://pages.github.com/
[ghPagesBasics]: https://help.github.com/categories/github-pages-basics/
[ghPagesTypes]: https://help.github.com/articles/user-organization-and-project-pages/
[customDomain]: https://help.github.com/articles/quick-start-setting-up-a-custom-domain/
[nojekyll]: https://help.github.com/articles/files-that-start-with-an-underscore-are-missing/

<!-- other links -->
[react]: https://github.com/facebook/react
[reactRouter]: https://github.com/reactjs/react-router
[seoLand]: http://searchengineland.com/tested-googlebot-crawls-javascript-heres-learned-220157
[webpackProduction]: https://webpack.github.io/docs/cli.html#production-shortcut-p
[webpackDevelopment]: https://webpack.github.io/docs/cli.html#development-shortcut-d
[formspree]: http://formspree.io/
[email]: mailto:sc0ttwad3@gmail.com
[twitter]: https://twitter.com/sc0ttwad3
