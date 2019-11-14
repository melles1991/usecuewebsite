---
title: Building websites in rem
---

Although I can almost build a website in my sleep (or in [20 minutes](/blog/speaking-at-jekyllconf2019/)), I am not talking about REM sleep or 'Rapid Eye Movement', but about 'root em'. 

I used to build websites in pixels, but I have chosen to swap to 'ems', and the be more specific 'root ems'. 

The 'em' is a fascinating measurement. It originates from the height of the metal body of a letter in a letterpress and its name comes from its relation to the width of the captial letter 'M'. In this digital era this relation has blurred. According to [Wikipedia](https://en.wikipedia.org/wiki/Em_(typography)), an average font might have a cap height of 70% of the em, and an x-height of 48% of the em.

Here is how it works: If you set your font-size to 20px on the HTML element of your website, 1 root em will equal 20 pixels. So, root em equals the root font-size. A pixel becomes 1/20th by 1/20th root ems big. A larger font could have a font-size of 2 root ems (40px) and your body text could be 0.8 root em (16px). And a nice extra: even media queries can be defined in root ems.

So if root ems is nothing more than a multiplier, why should you use it? Well... only for one reason actually: If you want to simluate browser zoom. A common media query that takes advantage of this would be: if the screen is narrower than 600 pixels (30rem), bump the font-size of the HTML element up to 22 pixels. This media query will effectively show your complete website at a 110% scale, just like browser zoom would, with just a single line of CSS.

Sounds great, but is it worth the extra effort? I think it is. Situation in which I find this approach extremely helpful are: handling very large and very small screen sizes and Google or some designer complaining about the chosen website width or font-size. On top of that: I got used to this new approach quickly and now it feels as easy as using pixels.