---
title: Carousel with scroll snap
---

Scroll snap is a relative new feature in CSS, that recenty got [pretty decent support](https://caniuse.com/?search=scroll%20snap). It is good for nothing, if you believe [these folks in the comments](https://css-tricks.com/introducing-css-scroll-snap-points/), but that was five years ago. People were more enthusiastic about Nolan Lawsons carousel with scroll snap, he built three years later (in 2019). He inspired me.

Nolan used three components: scroll snap, smooth scroll and pinch to zoom. However, we will be building a standard carousel you often see in website headers, so we do not need pinch to zoom. We also do not need to implement his second component: smooth scroll, as it can be achieved with a single line of CSS these days. Nolan was still worried about IE support, but we are not. Therefore, we can just use an anchor link to smooth scroll, instead of javascript, resulting in better performance and degredation. 

Check out my [natively scrolling carousel with touch support](https://codepen.io/joosts/pen/MWJBPgo?editors=0010). It has got buttery smooth scrolling, graceful degredation and is just 3kb large.

So... what do we learn from this? Well, it turns out that we can build smaller websites due to modern technology. What [once](https://flickity.metafizzy.co) required 120kb of javascript, can [now](https://codepen.io/joosts/pen/MWJBPgo?editors=0010) be achieved in under 3kb. We also have more bandwith available, faster javascript engines and faster computers. This combination allows us to make the impossible possible: [loading a full website in 0.1 seconds](/blog/websites-that-load-instantly), better described as [instantly loading websites]](/blog/websites-that-load-instantly), which improves reach, conversion, and user experience.