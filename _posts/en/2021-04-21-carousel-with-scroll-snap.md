---
title: Carousel with scroll snap
---

Scroll snap is a relative new feature in CSS, that recenty got [pretty decent support](https://caniuse.com/?search=scroll%20snap). It is 'good for nothing', if you believe [these folks in the comments](https://css-tricks.com/introducing-css-scroll-snap-points/), but that was five years ago. People were more enthusiastic about Nolan Lawsons carousel with scroll snap, he built three years later (in 2019).

But it was not Nolan, but the [Google Scroll Survey](https://web.dev/2021-scroll-survey/) that inspired me to build a standard header carousel with scroll snap. Nolan [built](https://nolanlawson.com/2019/02/10/building-a-modern-carousel-with-css-scroll-snap-smooth-scrolling-and-pinch-zoom/) three components: scroll snap, smooth scroll and pinch to zoom. We do not need pinch to zoom and today we can achieve smooth scroll with a single line of CSS. Therefore I only needed to focus on the scroll snapping, where I used almost the same code Nolan did. However, Nolan was still worried about IE support. We are not. Therefore, we can use anchor links to smooth scroll, instead of javascript, resulting in better performance and better degredation.

Interested in the end result? Check out my [natively scrolling carousel with touch support](https://codepen.io/joosts/pen/MWJBPgo?editors=0010). It has got buttery smooth scrolling, degrades nicely and is just 3kb large.

But what does this mean in the bigger scheme of things? Modern technology allows us to build smaller websites, because HTML and CSS are getting more powerful. What [once](https://flickity.metafizzy.co) required 120kb of javascript, can now be achieved in under 3kb. We also have [more bandwith](https://www.nngroup.com/articles/law-of-bandwidth/) available, faster javascript engines and faster computers. What was deemed impossible and was just [a fun commercial](/blog/websites-that-load-instantly) in 2008, is now actually within reach: [loading a full website in 0.1 seconds](/blog/websites-that-load-instantly). 

Although [instantly loading websites](/blog/websites-that-load-instantly) have better reach, better conversion and a better user experience, this is not the way things are moving on average. On average, websites are getting [bulkier every year](https://httparchive.org/reports/page-weight), allowed by the [increasing bandwidth](https://www.nngroup.com/articles/law-of-bandwidth/). But, as expected, [the variation](https://httparchive.org/reports/page-weight) is also getting larger, which means that you now have a choice. Do you want your next website to be slow and bulky or do you want it to a blazing fast and lightweight marvel of modern technology?

Feel free to [contact me](/contact) for the latter.