---
title: How to get a 100% Google Lighthouse score
---

You might have heard that soon [Google will shame slow websites](/blog/google-will-shame-slow-websites). A good reason to take a good look at your [Google Lighthouse score](/blog/google-lighthouse-score). 

When you do, I bet you wonder how get to a perfect 100%. Well.. I have built many websites that score perfectly, or nearly perfect on these Googles charts. So, I obviously got the answer. And if I can built 100% scoring websites on a daily basis, you already guessed that it is a lot easier than you think.

## Some sample websites

Lets start by looking at some websites that score (nearly) 100% on all four categories, to determine what the end-result looks like.

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
- Score: 97,100,100,100

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
- Score: 97,100,100,100

[lamanzanilla.es](https://lamanzanilla.es/)

- Javascript: 1kb
- CSS: 7kb
- Total size: 1.08Mb
- Number of requests: 17
- TTFB: 166ms
- DOMContentLoaded: 401ms
- Loading time: 777ms
- Hosted at: CloudFlare (CDN)
- Built by: Usecue BV
- Score: 99,93,100,100

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
- Score: 97,100,100,100

## The essential steps

First of all you need a low Time To First Byte. In other words: the server needs to respond fast. I use CloudFlare for most of my websites, but using a well configured VM works too (as you can see). I am not sure what hosting Delete Agency uses, but they got a nice low TTFB. You can test the TTFB with tools like Pingdom and GTMetrix.

Secondly, you need to optimize your images. Note that using WebP is not required at all to get a good score. Using strong JPG compression is often more than enough.

Finally, you need to address all the small issues in Google Lighthouse. 

## The blocking code issue

When you have done all the above, you are left with the blocking code issue. Google suggests to move all CSS to the footer. Although this works, you get an ugly Flash Of Unstyled Text (FOUT). The website is also only usable after the CSS has loaded. To fix this blocking issue there are two options.

The first approach is perfectly outlined by Delete Agency (the last website in the list). They use a lot of Javascript and CSS, which is typically blocking, so they split and/or inlined parts of this code. They [documented](https://www.deleteagency.com/blog/how-to-get-a-100-percents-lighthouse-performance-score) this process in great detail. Although the end-result is impressive, it is also an awful lot of work.

However, there is a much simpler and more logical approach. I found out that you can build perfectly functional website with A LOT less Javascript and CSS. And I just had to do ONE thing: stop using (Javascript and CSS) frameworks. That was all! This reduces the amount of Javascript and CSS dramatically. I do not think that I need to explain that there is no need for inlining or splitting when you reduce the amount of Javascript and CSS by a factor 6 to 10. 

### The right stack

Fortunately, there is a much simpler method. Just make your website 5 times smaller. How to do that?

