---
title: Two viewports to rule them all
---


The amount of available screen sizes is exploding. That is why we need responsive design. But what if I told you you only needed two sizes? Impossible, I hear you think. But you may be wrong. Hear me out, because this technique can potentially save you time and money.&nbsp;

I have been experimenting with responsive web design a lot lately. This is mainly due to my side project called 'Without Coding'. In this project I give graphic designers a photoshop-like canvas for building websites. This canvas is based on absolute positioning, making normal responsive techniques unfit. To fix this problem, I came up with the concept of 'fixed viewports' (as opposed to fluid responsiveness).

The concept of 'fixed viewports' is based on the premise that all screens have viewport scaling, unless they have a certain minimum width. This minimum width is what we call the 'desktop version'. This is nowadays about 1200 pixels. This desktop version can be shown on tablets through viewport scaling. Using this width on a phone, would result in an illegible website. Therefore we need a second width, the 'phone version'. Using 400 pixels for this width works best for me.

What I do, is that I build for each of these versions a&nbsp;fixed-width website. I do this using conditional CSS. I start with 1200 pixels version and switch to the 400 pixel version at about 600 pixels screen width. I do this by using a CSS media query and rewriting the meta viewport tag with Javascript.&nbsp;

This means that the desktop version does not need to have any responsive features. You can use simple floats and all sizes can be measured in pixels. The phone version&nbsp;will override these sizes where needed. Most of the time this means applying 'float: none' and 'width: 100%' to these elements.&nbsp;

Feeling fancy? Add an in-between version for portrait tablets. Know that using this technique&nbsp;you can make ANY website responsive in less than 3 hours.

> "After 14h straight I think it’s time I call it a day… responsive design is hard"

I found the above quote on Twitter. Do you feel the same? Try this technique! It will change your perspective.