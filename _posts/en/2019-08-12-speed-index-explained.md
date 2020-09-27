---
title: Speed index explained
---

What is the 'Speed index' in your portfolio exactly, you ask? The short answer is: it is the time a website needs to load.

As you can see these values vary from one to several seconds. That is remarkably slow. Especially considering that I can [make websites load instantly](/blog/websites-that-load-instantly/). So what is up with this speed index? Why is it so high? This value comes from the [Google Lighthouse](/blog/google-lighthouse-score/) performance audit and is calculated by simulating a slow 3G connection and a 4x CPU slowdown. A website with a speed index of two seconds will load significantly faster on a desktop computer or a fast mobile connection. Google uses this speed index to rank websites. Google [prefers](https://webmasters.googleblog.com/2018/01/using-page-speed-in-mobile-search.html?m=1) fast loading websites, so lower is better. Websites with a low speed index rank higher. By chosing for a slow 3G connection as the standard, Google emphasizes the importance of a low 'Page weight', as a small page is delivered significantly faster over such a narrow connection. By emulating a very slow processor the amount of calculations becomes more important, while things like network latency become less important. This complexity is often the amount of CSS and Javascript that needs to be parsed.

So... a well-coded website has little complexity and a low page weight. This will result in a significantly lower speed index, which will result in a higher position in the search results. Simple, right?