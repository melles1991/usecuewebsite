---
title: Two viewports to rule them all
---


Not possible… I hear you think. But you may be wrong. Hear me out and I will show you a technique that will save web designers a&nbsp;huge amount of time.

I have been experimenting with responsive designs a lot lately. This is mainly due to my side project called Without Coding. In this project I try to give graphic designers a photoshop-like canvas for building websites. This canvas is based on absolute positioning, which makes normal responsive techniques inadequate. That is how I came up with the idea of 'fixed viewports' (as opposed to fluid responsiveness).

On a tablet my clients often request the desktop experience, which can easily be achieved by using a the meta viewport tag to scale the content to the designed desktop size, say 1200 pixels wide. On a mobile phone however, they want a narrow representation of their website. This can be achieved in the same way, only with a much smaller width, say 400 pixels.

With these cases in mind, I build two fixed sizes of the website. One 1200 pixels wide and one 400 pixels wide. I use Javascript and (conditional) CSS to switch between these two sizes at a width of about 600 pixels.&nbsp;

With this technique, you can make ANY website responsive in about 3 hours, and this includes testing. I found the next quote on Twitter:

> "After 14h straight I think it’s time I call it a day… responsive design is hard"

Not anymore... ;-) Note that if you want to go all fancy, you can even add an in-between version for portrait tablets. I would love to hear about your results with this technique.