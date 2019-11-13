---
title: Building websites in rem
---

Although I can almost build a website in my sleep (or in [20 minutes](/blog/speaking-at-jekyllconf2019/)), I am not talking about REM sleep or 'Rapid Eye Movement', but about 'root ems'. 

You may still build your websites in pixels, but I have chosen to only use 'ems' from now on, and the be more specific 'root ems'. 

The 'em' is a fascinating measurement. It originates from the height of the metal body of a letter in a letterpress and its name comes from its relation to the width of the captial letter 'M'. In this digital era these relations have blurred. According to [Wikipedia](https://en.wikipedia.org/wiki/Em_(typography)), an average font might have a cap height of 70% of the em, and an x-height of 48% of the em.

If the font, declared on the root of your HTML element, has a font-size of 20px, 1 root em equals 20 pixels. A pixel in your site is then 1/20th by 1/20th root ems big. Knowing this, you can now build your website the way you used to be. Even media queries can be defined in root ems. A larger font could have a font-size of 2 root ems (40px) and your body text could be 0.8 root em (16px).

So if root ems is nothing more than a multiplier, why should you use it? Well... only for one reason actually: If you want to simluate browser zoom. A common media query that takes advantage of this would be: if the screen is narrower than 600 pixels (30rem), bump the font-size of the HTML element up to 22 pixels. This media query will effectively show your complete website at a 110% scale, just like browser zoom would, with just a single line of CSS.

Is this one usecase worth the extra effort? I think so. Situation in which I find this approach extremely helpful are: Google complaining about font-size, a designer complaining about the size on which I implemented his or her design and handling very large and very small screen sizes. You will see that you will get used to this new approach quite quickly and that it feels as easy as using pixels.