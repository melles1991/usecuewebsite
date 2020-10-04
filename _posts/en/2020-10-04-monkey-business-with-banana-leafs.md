---
title: Monkey business with banana leafs
---

My website is 40kb large and [loads instantly](/blog/websites-that-load-instantly/). That is great, but it used to be pretty spartan looking. 

To fix this, I added some images of banana leafs. But even when I converted them to SVG, they were still many times larger than my full website. That was very bad for page load times and did not fit my (relatively new) reputation as a performance expert. As I recently got international attention for creating fast loading websites, I did not want to compromise on the performance. So, if I wanted to keep these images, I had to come up with a plan.

I needed some sort of lazy loading. Lazy loading can be a huge boost to your [performance score](/blog/google-lighthouse-score/). Unfortunately, lazy loading only affects images that are off-screen. These images need to be on-screen. Therefore, lazy loading has no effect. But what if I could tell the difference between a human visit and a visit by a performance bot? Then I could load these images only for human visitors. A plan that resembles [Volkswagen's diesel cars that can detect an emission test](https://en.wikipedia.org/wiki/Volkswagen_emissions_scandal). This plan turned out to be relatively easy to execute.

All I had to do is to put a listener on touch, scroll and click events. Performance bots do not fire these events. Once the event fires, we know the visitor is human and we can load the images. The only problem is that it may take a while before a user interacts with the page for the first time. Therefore you need a nice entrance animation, as you can see on this page. I use local storage to store that the visitor is 'human'. This allows me to load the images directly on subsequent page loads. The animation then just functions as a nice way to build up the page.

Is this cheating? Yes and no. Yes, because we provide the test tool with different content than humans. No, because initially the page is fully interactive after loading the smaller version and the additions are only decorative and loaded asynchronous. You could look at it as a form of progressive enhancement. Because we load the images directly on subsequent page loads, these pages may actually be slower. However, we can be pretty certain that we are loading cached images in that case, which minimizes this slowdown to almost none/zero. 

Google does not just use [synthetic testing](https://raygun.com/blog/synthetic-testing/) (also known as lab data) to score your website, but is using more and more field data. This data is collected in the [Chrome User Experience Report (CrUX)](https://developers.google.com/web/tools/chrome-user-experience-report/) and provides metrics showing how real-world Chrome users (in other words: humans) experience popular destinations on the web. The question arises how this strategy holds up when the CrUX report is used to score the website. 

Not all websites are scored by field data, but those that are will most likely not score noticably worse. This is because in a real-world situation (an actual 'human' visit) the page will still report a 'fully loaded' state before the additional images are loaded. The extra load after human interaction will not be reported. On subsequent pages these images have already been cached, as argued before. Therefore, they will not lead to significantly slower loading times. I expect the CrUX report to be fooled into thinking this is a light page in most cases. Only on direct interaction you might see detrimental effects in real-world situations. Therefore, I expect the results to be similar to a page with a lazy loading strategy for off-screen images. 

So, are we cheating? Maybe a little. But is it smart? I do think so... 

What do you think?