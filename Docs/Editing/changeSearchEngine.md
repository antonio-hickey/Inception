## How to change the search engine:
1. Perform a test search in your desired search engine and grab the url base and search query parameter you can ignore the other parameter's search engines add on. Just search `test123` grab the link from the url bar of everything BEFORE `test123`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- For example: Let's try duckduckgo, which gives us the url `https://duckduckgo.com/?q=`

2. Open the `searchEngine.js` file inside of the `scripts folder`
3. Replace the default google string with your new search engine url.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- For example: Replace `https://google.com/search?q=` with `https://duckduckgo.com/?q=`

<img src=https://github.com/antonio-hickey/Inception/blob/main/assets/images/Doc%20Gifs/changeSearchEngine.gif width="700"/>

#### If that did not work:
1. Make sure your running your own version of Inception locally
   the url should point to the file saved on your local machine.
2. Make sure your search engine url is just the link base (`https://YOUR_SEARCH_ENGINE.com`) and the search query parameter which differs from engine to engine, retry step 1 to check. 
3. If none of the above worked, open an issue [here](https://github.com/antonio-hickey/Inception/issues/new)
   and I will assist you with the issue.
