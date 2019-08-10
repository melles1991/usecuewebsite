---
title: Websites that load instantly
---

In 2008 Google promised us websites that would load as quick as shooting a potato through a slicer with explosives. In other words, in one or two tenths of a second, or as I like to call it: 'instantly'.

<a href="https://youtu.be/nCgQDjiotG0"><img src="/uploads/instantly.gif" alt="Video of Chrome loading instantly and beating the potato gun." /></a>

Their campaign revolved around the introduction of v8, a new Javascript engine. This turned out to be a game changer and made Chrome significantly faster than any other browser at the time. The campaign was a big hit and Chrome (eventually) became the most used browser world wide, mostly due to this competitive advantage.

In their campaign video they used the website [allrecipes.com](https://www.allrecipes.com). I was curious to see how fast it loads today. We could ask [Lighthouse](https://web.dev), but Lighthouse simulates a slow 3G connection, so I asked [Pingdom](https://www.pingdom.com). Pingdom reported that the current website of allrecipes.com loads in [4.85 seconds](/uploads/Screenshot_20190801-100756.png). That is far from instantly. Their website has either become much slower during the past 11 years or we were looking at a preloaded website or both.

From the video description we can read the website was preloaded (they used a local version). However, with Googles current focus on speed, I was wondering: can a website load in under 0.2 seconds over the internet? In other words: could a website load instantly and beat the potato gun? The answer is YES. According to Pingdom, this website loads in [0.1 seconds](/uploads/pingdom.png).

What it requires? First of all you need a really low TTFB (time to first byte). This can be achieved by serving static code (using a site generator or cache plugin) in combination with a server that is geographically close to you. This server should be able to serve the static code from its RAM or from a really fast SSD. Ofcourse you also need a small page (with heavily compressed images and no jQuery). Finally, to get the best performance, you should use very little to no Javascript. This will give your site a low TTI (time to interactive) and [FID](https://developers.google.com/speed/docs/insights/v5/about?hl=nl-NL&utm_source=PSI&utm_medium=incoming-link&utm_campaign=PSI) (first input delay).

But why would you want all this? What is the use of beating the potato gun? I am writing this post on a mobile phone with a spotty internet connection. A fast website loads here in a few seconds, a slow website takes forever or does not load at all. Fast websites are more accesible. Google acknowledges this too and [prefers](https://webmasters.googleblog.com/2018/01/using-page-speed-in-mobile-search.html?m=1) to show fast loading websites in its search result. Fast websites rank higher. It [has been proven](https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/) that fast websites have a higher conversion rate as well. Fast websites are simply more effective.

Do you want your website to be more effective? Make it load instantly. Don't know how? No problem. I love to help. Just give me a call.
