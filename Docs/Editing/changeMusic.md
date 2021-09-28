## How to change the music:
1. Find a YouTube video or preferably a YouTube stream you like and copy the link. Streams work better because it's never ending music, but if you choose a video it will loop when finished. See the last step labeled Optional on how to disable that if you want.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- For example: `https://www.youtube.com/watch?v=-9gEgshJUuY`

2. Now copy the query parameter at the end, in the example above it's `-9gEgshJUuY`, it will be whatever comes after `?v=`.
3. Open `index.html` and go to line number `76`
4. Replace `DWcJFNfaw9c` with the query parameter from your desired video or stream.
5. Save the file then refresh the page and press play, enjoy the tunes!
6. * Optional: To stop from looping over change `data-loop="1"` with `data-loop="0"` on line number `76`.

<img src=https://github.com/antonio-hickey/Inception/blob/main/assets/images/Doc%20Gifs/changeMusic.gif width="700"/>

#### If that did not work:
1. Make sure your running your own version of Inception locally
   the url should point to the file saved on your local machine.
2. Make sure the query parameter is correct, in your url bar enter `https://www.youtube.com/watch?v=YOURQUERYPARAMETER` and see if it takes you to the video.
3. If none of the above worked, open an issue [here](https://github.com/antonio-hickey/Inception/issues/new)
   and I will assist you with the issue.

