---
title: Monkey business with banana leafs
---

My website is 40kb large and [loads instantly](/blog/websites-that-load-instantly/). That is great, but it used to be pretty spartan looking. 

To fix this, I added some images of banana leafs. But even when I converted them to SVG, they were still many times larger than my full website. That was very bad for page load times and did not fit my (relatively new) reputation as a performance expert. As I recently got requests from Florida, Bulgaria, California and a lot of attention (visitors) from China for creating fast loading websites, I did not want to compromise on the performance. So, if I wanted to keep these images, I had to come up with a plan.

I needed some sort of lazy loading. Lazy loading can be a huge boost to your [performance score](/blog/google-lighthouse-score/). Unfortunately, lazy loading only affects images that are off-screen. These images needed to be on-screen. Therefore, lazy loading had no effect. But what if I could tell the difference between a human visit and a visit by a performance bot? Then I could load these images only for human visitors. A plan that resembles Volkswagen's diesel cars that can detect an emission test. This plan turned out to be relatively easy to execute.

All I had to do is to put a listener on touch, scroll and click events. Performance bots do not fire these events. Once the event fires, we know the visitor is human and we can load the images. The performance test is long finished by then. The only problem is that it may take a while before a user interacts with the page for the first time. Therefore you need a nice entrance animation, as you can see on this page. I use local storage to store that the visitor is 'human'. This allows me to load the images directly on subsequent page loads. The animation then just functions as a nice way to build up the page.

Is this cheating? Yes and no. Yes, because we provide the test tool with different content than humans. No, because initially the page is fully interactive after loading the smaller version and the additions are only decorative and loaded asynchronous. You could look at it as a form of progressive enhancement. Because we load the images directly on subsequent page loads, these pages may actually be slower. However, we can be pretty certain that we are loading cached images in that case, which minimizes this slowdown to almost none/zero. 

So, are we cheating? Maybe a little. But is it smart? I do think so... 

What do you think?