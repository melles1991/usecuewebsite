---
title: How to get a 100% Google Lighthouse score
---

Google will soon [shame slow websites](/blog/google-will-shame-slow-websites). A good reason to take a good look at your Google Lighthouse score right [now](https://web.dev/). 

When you look at your score, you might feel that it is nearly impossible to get to a perfect 100% score. However, I build 100% scoring websites on a daily basis, so obviously it is not. Let me explain how I do this. It is a lot easier than you think.

## What to aim for

Lets start by looking at some websites that score (nearly) 100% on all four categories, to determine what the end-result should look like. For each site I have listed the weights: the Javascript, CSS and the total page weight. You can also see the number of requests (although they do not matter much over HTTP/2), as well as the time it takes the server to respond (TTFB) and the site to load. Finally, I listed the host, the company that built the website and the [Google Lighthouse score](/blog/google-lighthouse-score). Note that the comma seperated numbers stand for Performance, Accessibility, Best Practises and SEO.

### [debabywegwijzer.nl](https://www.debabywegwijzer.nl/)

|Javascript: |0kb|
|CSS: |9kb|
|Total size: |120kb|
|Requests: |9|
|TTFB: |22ms|
|DOM loaded: &nbsp; &nbsp;|274ms|
|Loading time: |596ms|
|Hosted on: |CloudFlare (CDN)|
|Built by: |Usecue BV|
|Score: |99,100,100,100|

### [studioinhout.nl](https://www.studioinhout.nl/)

|Javascript: |1kb|
|CSS: |14kb|
|Total size: |115kb|
|Requests: |9|
|TTFB: |16ms|
|DOM loaded: &nbsp; &nbsp;|307ms|
|Loading time: |564ms|
|Hosted at: |CloudFlare (CDN)|
|Built by: |Usecue BV|
|Score: |100,100,100,100|

### [usecue.com](https://www.usecue.com/)

|Javascript: |10kb|
|CSS: |12kb|
|Total size: |44kb|
|Requests: |7|
|TTFB: |15ms|
|DOM loaded: &nbsp; &nbsp;|231ms|
|Loading time: |363ms|
|Hosted at: |Leaseweb VM|
|Built by: |Usecue BV|
|Score: |100,100,100,100|

### [jekyllcodex.org](https://jekyllcodex.org/)

|Javascript: |13kb|
|CSS: |13kb|
|Total size: |130kb|
|Requests: |15|
|TTFB: |172ms|
|DOM loaded: &nbsp; &nbsp;|386ms|
|Loading time: |756ms|
|Hosted on: |CloudFlare (CDN)|
|Built by: |Usecue BV|
|Score: |99,92,100,100|

### [lamanzanilla.es](https://lamanzanilla.es/)

|Javascript: |1kb|
|CSS: |7kb|
|Total size: |974kb|
|Requests: |17|
|TTFB: |166ms|
|DOM loaded: &nbsp; &nbsp;|601ms|
|Loading time: |1s|
|Hosted at: |CloudFlare (CDN)|
|Built by: |Usecue BV|
|Score: |100,93,100,100|

### [deleteagency.com](https://www.deleteagency.com/)

|Javascript: |140kb|
|CSS: |80kb|
|Total size: |561kb|
|Requests: |30|
|TTFB: |52ms|
|DOM loaded: &nbsp; &nbsp;|528ms|
|Loading time: |1.05s|
|Hosted at: |unknown|
|Built by: |Delete Agency|
|Score: |98,100,100,100|

## The easy steps

First of all you need a low Time To First Byte. All websites in the list above have a TTFB of less than 200ms. This means that the server needs to respond fast. I use CloudFlare for most of my websites, but using a well configured VM works too (as you can see). I am not sure what hosting Delete Agency uses, but they got a nice low TTFB. Getting a low TTFB is mainly a matter of chosing the right hosting. You can test this metric with a tool like Pingdom or GTMetrix. Note that proper (server-side) caching helps a lot too. I use a Static Site Generator to generate my pages, which is essentially the same as a fully cached website.

Secondly, you need to optimize your images. Use SVG where possible and heavily compressed JPG for the rest. If you have to use PNG, make sure you use TinyPNG to compress them and use loading="lazy" on all image tags. Note that using WebP is not required at all to get a good score.

Finally, you need to address all the small issues Google Lighthouse throws at you. These could be accessibility things, but also SEO or performance issues. Note that you are not *required* to fix all Performance issues, as the score correlates to the speed at which the site loads, not to the checklist.

## The blocking code issue

When you have done all the above, you are probably left with some hard to solve 'blocking code' issues. Google will suggest to move the Javascript and CSS to the footer, but that does not really solve it. You will get an ugly Flash Of Unstyled Text (FOUT) and your website will only be usable after your code has fully loaded. Here is where I got stuck in the beginning. Fortunately, there are two solutions to fix this blocking issue.

The first approach is perfectly outlined by Delete Agency (the last website in the list). They use a lot of Javascript and CSS, which is typically blocking. Therefore they had to split and/or inline parts of this code. They [documented](https://www.deleteagency.com/blog/how-to-get-a-100-percents-lighthouse-performance-score) this process in great detail. The end-result is impressive, but it is also an awful lot of work.

Fortunately, there is a much simpler approach. You should simply use less Javascript and CSS. When you compare the websites built by Usecue (me) to the website built by Delete Agency you see that I used a factor 10 less Javascript and CSS. This obviously completely removes the need for inlining and splitting code. When you look at all websites worldwide, the difference is actually more of a factor 20. The [average website](https://www.igvita.com/2016/01/12/the-average-page-is-a-myth/) is has [400kb Javascript](https://httparchive.org/reports/state-of-javascript#bytesJs) and [60kb CSS](https://httparchive.org/reports/page-weight#bytesCss). To get these numbers down so drastically I only had to do ONE thing: stop using (Javascript and CSS) frameworks. Ofcourse this required a learning curve, but I got the hang of it really quickly.

A misconception is that your total page size should be small. You can perfectly load a LOT of large images. A homepage twice as big as the one from Delete Agency can still get a perfect score. The problem lies only in the blocking CSS and Javascript.

## Some closing words

To get a perfect score you should follow the tips from Google Lighthouse and you should stop using Javascript and CSS frameworks. The latter might seem scary at first, but Javascript and CSS have come a long way. Things like Flexbox, CSS columns and CSS grid handle most of your more complex CSS problems with ease. Cross-browser issues are close to non-existent in the [current browser landscape](https://www.netmarketshare.com/browser-market-share.aspx). Stick to writing lean CSS and lean Javascript. It might feel like you are going back to the nineties or the zero's, but that is OK. Listen to Michael Jackson and sing along. A world without dependencies is a happy place. Heal the world!

And... if you feel insecure about programming non-jQuery stuff, please let [Chris Ferdinandy](https://gomakethings.com/) help you. He is an advocate for a simpler World Wide Web and loves to teach you [Vanilla Javascript](https://gomakethings.com/). Learn from him and go make (simpler) things!