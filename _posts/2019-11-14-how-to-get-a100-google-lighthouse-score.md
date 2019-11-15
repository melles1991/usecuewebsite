---
title: How to get a 100% Google Lighthouse score
---

You might have heard that soon [Google will shame slow websites](/blog/google-will-shame-slow-websites). A good reason to take a good look at your Google Lighthouse score. 

When you do, I bet you wonder how get to a perfect 100%. Well.. I have built many websites that score perfectly, or nearly perfect on these Googles charts. So, I obviously got the answer. And if I can built 100% scoring websites on a daily basis, you already guessed that it is a lot easier than you think.

## Some sample websites

Lets start by looking at some websites that score (nearly) 100% on all four categories, to determine what the end-result looks like. For each site I have listed the weights: the Javascript, CSS and the total page weight. You can also see the number of requests (although they do not matter much over HTTP/2), as well as the time it takes the server to respond (TTFB) and the site to load. Finally, I listed the host the company that built the website and the [Google Lighthouse score](/blog/google-lighthouse-score), where the first number is the performance.

[debabywegwijzer.nl](https://www.debabywegwijzer.nl/)

- Javascript: 0kb
- CSS: 9kb
- Total size: 120kb
- Number of requests: 9
- TTFB: 22ms
- DOMContentLoaded: 274ms
- Loading time: 596ms
- Hosted on: CloudFlare (CDN)
- Built by: Usecue BV
- Score: 99,100,100,100

[studioinhout.nl](https://www.studioinhout.nl/)

- Javascript: 1kb
- CSS: 14kb
- Total size: 115kb
- Number of requests: 9
- TTFB: 16ms
- DOMContentLoaded: 307ms
- Loading time: 564ms
- Hosted at: CloudFlare (CDN)
- Built by: Usecue BV
- Score: 100,100,100,100

[usecue.com](https://www.usecue.com/)

- Javascript: 10kb
- CSS: 12kb
- Total size: 44kb
- Number of requests: 7
- TTFB: 15ms
- DOMContentLoaded: 231ms
- Loading time: 363ms
- Hosted at: a Leaseweb VM in Amsterdam
- Built by: Usecue BV
- Score: 100,100,100,100

[jekyllcodex.org](https://jekyllcodex.org/)

- Javascript: 13kb
- CSS: 13kb
- Total size: 130kb
- Number of requests: 15
- TTFB: 172ms
- DOMContentLoaded: 386ms
- Loading time: 756ms
- Hosted on: CloudFlare (CDN)
- Built by: Usecue BV
- Score: 99,92,100,100

[lamanzanilla.es](https://lamanzanilla.es/)

- Javascript: 1kb
- CSS: 7kb
- Total size: 974kb
- Number of requests: 17
- TTFB: 166ms
- DOMContentLoaded: 601ms
- Loading time: 1s
- Hosted at: CloudFlare (CDN)
- Built by: Usecue BV
- Score: 100,93,100,100

[deleteagency.com](https://www.deleteagency.com/)

- Javascript: 140kb
- CSS: 80kb
- Total size: 561kb
- Number of requests: 30
- TTFB: 52ms
- DOMContentLoaded: 528ms
- Loading time: 1.05s
- Hosted at: unknown
- Built by: Delete Agency
- Score: 98,100,100,100

## The easy steps

First of all you need a low Time To First Byte. All websites have a TTFB of less than 200ms. This means that the server needs to respond fast. I use CloudFlare for most of my websites, but using a well configured VM works too (as you can see). I am not sure what hosting Delete Agency uses, but they got a nice low TTFB. Getting a low TTFB is just a matter of chosing the right hosting. You can test this metric with a tool like Pingdom or GTMetrix.

Secondly, you need to optimize your images. Use SVG where possible and heavily compressed JPG for the rest. If you have to use PNG, make sure you use TinyPNG to compress them. Use loading="lazy" where possible. Note that using WebP is not required at all to get a good score.

Finally, you need to address all the small issues Google Lighthouse throws at you. These could be accessibility things, but also SEO or performance issues. Note that you are not required to fix all Performance issues, as the score correlates to the speed at which the site loads, not to the checklist.

## The blocking code issue

When you have done all the above, you are probably left with some hard to solve 'blocking code' issues. Google will suggest to move the CSS to the footer, but that does not really solve it. You will get an ugly Flash Of Unstyled Text (FOUT) and your website will only be usable after the CSS has loaded. Here is where I got stuck in the beginning. Fortunately, there are two solutions to fix this blocking issue.

The first approach is perfectly outlined by Delete Agency (the last website in the list). They use a lot of Javascript and CSS, which is typically blocking, so they split and/or inlined parts of this code. They [documented](https://www.deleteagency.com/blog/how-to-get-a-100-percents-lighthouse-performance-score) this process in great detail. The end-result is impressive, but it is also an awful lot of work.

Fortunately, there is a much simpler approach. As you can see in the examples above, you can build perfectly functional websites with A LOT less Javascript and CSS. I just had to do ONE thing to get to my perfect score: stop using (Javascript and CSS) frameworks. That was all! This reduces the amount of loaded Javascript and CSS dramatically. Obviously, there is no need for inlining or splitting when you reduce the amount of Javascript and CSS by a factor 10 or more. 

Note that you can perfectly load a LOT of large images. A homepage twice as big as the one from Delete Agency can still get a perfect score. The problem is the blocking CSS and Javascript.

## Some closing words...

Not using Javascript and CSS frameworks might seem scary... but trust me: it is not. Javascript and CSS have come a long way. Things like Flexbox, CSS columns and CSS grid handle most of your more complex CSS problems with ease. And if you feel insecure about programming non-jQuery stuff, please let [Chris Ferdinandy](https://gomakethings.com/) help you. He is an advocate for a simpler world wide web and loves to teach you [Vanilla Javascript](https://gomakethings.com/). It is worth the investment.