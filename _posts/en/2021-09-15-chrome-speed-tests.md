---
title: Chrome speed tests
---

Back in 2010 Chrome hired a company for some fun speed tests of their new v8 Javascript engine. More than 10 years later I compared these speed tests to todays loading times of really fast websites in my quest to [beat the potato gun](/blog/websites-that-load-instantly). 

Therefore it is interesting to know what they exactly did in this potato video and why. The following text is taken from the video description at Youtube. I copied it to make sure these details would not get lost.

These speed tests were filmed at actual web page rendering times. If you're interested in the technical details, read on!

Equipment used: 

- Computer: MacBook Pro laptop with Windows installed
- Monitor - 24" Asus: We had to replace the standard fluorescent backlight with very large tungsten fixtures to funnel in more light to capture the screen. In addition, we flipped the monitor 180 degrees to eliminate a shadow from the driver board and set the system preferences on the computer to rotate 180 degrees. No special software was used in this process.
- Camera: Phantom v640 High Speed Camera at 1920 x 1080, films up to 2700 fps

Frequently asked questions: 

- "Why does allrecipes.com in the potato gun sequence appear at once, and not the text first and images second? And why does it appear to render from bottom of the screen to the top?"  
Chrome sends the rendered page to the video card buffer all at once, which is why allrecipes.com appears at once, and not with the text first and images second. Chrome actually paints the page from top to bottom, but to eliminate a shadow from the driver board, we had to flip the monitor upside down and set the system preferences in Windows to rotate everything 180 degrees, resulting in the page appearing to render from bottom to top.

- "Why does the top one third of the page appear first on the weather.com page load?"  
Sometimes only half the buffer gets filled before the video card sends its buffer over to the LCD panel. This is because Chrome on Windows uses GDI to draw, which does not do v-sync.

- "The screen wipes are so smooth - how was that achieved?"  
The screen wipes up in a gradated wipe because LCD pixels take around 10ms to flip and gradually change color.

## More filming details below:

- Chrome Browser vs. Potato:  
We used a version of the web page allrecipes.com that is accessible when logged in. About four hours into the Potato Gun shoot we decided to use a locally loaded version of the web page to enable more precise synchronization with the potato gun. We finally got the shot we were hoping for after 51 takes.
- Chrome Browser vs. Sound:  
We loaded an artist page from Pandora.com, a streaming internet radio service directly off the web on a 15Mbps internet connection.
- Chrome Browser vs. Lightning:  
We used a locally loaded version of weather.com that was legally approved for use in this video (and all the standard website permissions procedures that goes into making videos!)

While we had a super fast 15Mbps internet connection in the studio, any live internet connection introduces quite a bit of variability. To run speed tests on page rendering times, saving locally and loading from the local disk can help reduce this variability.

For behind-the-scenes footage of how this video was made:

<a href="https://www.youtube.com/watch?v=_oarMXGq3gI&t" class="video"><img src="/uploads/instantly.gif" alt="Video of Chrome loading instantly and beating the potato gun." /></a>