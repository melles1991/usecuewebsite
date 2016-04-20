---
title: Two viewports to rule them all
---


I have been experimenting with responsive designs a lot lately. This is mainly due to my side project called Without Coding, where I try to create a photoshop-like canvas for the web. Today I want to share with you my newest find: two viewports (or screen sizes) to rule them all.

Not possible... I hear you think. But you may be wrong. Hear me out.

My clients always request that their website 'works' on mobile and tablet. On a tablet they often request the desktop experience, which can easily be achieved by using a the meta viewport tag to scale the content to the designed desktop size, say 1200 pixels wide. On a mobile phone they want a narrow representation of their website. This can be achieved in the same way, only with a much smaller width, say 400 pixels.

Therefore I build just two sizes of the website. One 1200 pixels wide and one 400 pixels wide. I use js and (conditional) css to switch between these two sizes at a width of about 600 pixels. If you want to go all fancy, you can even add an in-between version for portrait tablets.

With this technique, you can make ANY non-responsive website responsive in about 3 hours, and this includes testing. I found the next quote on Twitter:

> "After 14h straight I think it’s time I call it a day… responsive design is hard"

Try it! I would love to hear about your results with this technique.