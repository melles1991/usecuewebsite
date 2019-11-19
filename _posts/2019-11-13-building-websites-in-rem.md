---
title: Building websites in rem
---

Although I can almost build a website in my sleep (or in [20 minutes](/blog/speaking-at-jekyllconf2019/)), I am not talking about REM sleep or 'Rapid Eye Movement', but about 'root em'. 

I used to build websites in pixels, but I have chosen to abandon pixels and to completely swap to 'em', and the be more specific 'root em'. Forty percent of all pages use 'root em' in some way, according to the [HTTP Archive Almanac](https://almanac.httparchive.org/en/2019/css#units), so you are probably familiar with the abbreviation 'rem'.

The 'em' is a fascinating unit/measurement. It originates from the height of the metal body of a letter in a letterpress and its name comes from its relation to the width of the captial letter 'M'. In this digital era this relation has blurred. According to [Wikipedia](https://en.wikipedia.org/wiki/Em_(typography)), an average font might have a cap height of 70% of the em, and an x-height of 48% of the em. 'Root' means that the size of the em is related to the font-size of the root element, which it the HTML element of your web page.

Here is how it works: If you set your font-size to 20px on the HTML element, 1 root em will equal 20 pixels. So, root em equals the root font-size. A pixel becomes 1/20th by 1/20th root ems big. A larger font could have a font-size of 2 root ems (40px) and your body text could be 0.8 root em (16px). And a nice extra: even media queries can be defined in root ems.

So if root ems is nothing more than a multiplier, why should you use it? Well... only for one reason actually: If you want to simluate browser zoom. A common media query that takes advantage of this would be: if the screen is narrower than 600 pixels (30rem), bump the font-size of the HTML element up to 22 pixels. This media query will effectively show your complete website at a 110% scale, just like browser zoom would, with just a single line of CSS.

Sounds great, but is it worth the extra effort? I think it is. I got used to this new approach quickly and it soon felt as easy as using pixels. Situation in which I find this approach extremely helpful are: handling very large and very small screen sizes and Google or some designer complaining about the chosen website width or font-size.