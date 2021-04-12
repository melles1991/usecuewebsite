---
title: The problem with multi-purpose themes
---

Envato is filled with very popular multi-purpose themes. The popular ones are sold almost a million times. You can virtually build any site with these themes without writing a single line of code. They offer a variety of different pre-made layouts. They seem like value for money… but there is a catch.

## High maintenance costs

Multi-purpose themes (often) have no strict separation between content and design, which means that your client can ruin your carefully created design. This leads to high maintenance costs, as you have to review and correct your clients design choices. Additionally, the systems powering these multi-purpose themes are hard to grasp for your client. There are simply too many options/buttons, which leads to a lot of (undesired) support calls.

## Design suffers

Because of the aforementioned lack of separation between design and content, the design of your website is at best 'as intended'. Not very original, but on par with current design trends. At worst, however, it becomes a showcase of (your clients) bad design decisions, unique in its awfulness. Most of the time it is somewhere in between.

## SEO suffers

You will notice that all multi-purpose themes have static demo pages and/or aggressive caching. There is a good reason for that. These themes require a huge amount of database queries per page load, which make them awfully slow. Making the pages static or adding an aggressive cache layer hides this defect to the unknowing buyer. 

Nevertheless these cached demo pages still have a mediocre performance score (reported by [Pingdom](https://tools.pingdom.com/) and [Lighthouse](https://web.dev/)), indicating an even bigger problem. The problem lies in the JavaScript and CSS powering all multi-purpose theme elements. I have analyzed Divi and Avada and they are 10 to 100 times bigger than necessary. These huge amounts of code must not only be transmitted, but also executed. The execution problem can NOT be solved by caching or gzipping. This code is blocking the rendering process by nature. Therefore, the size of the JavaScript and CSS of these multi-purpose themes is solely responsible for the mediocre performance scores. Getting [a perfect Google Lighthouse Score](/blog/how-to-get-a-100-google-lighthouse-score/) with the aforementioned multi-purpose themes is simply not possible without some advanced tree shaking. The result: sub-optimal search engine performance.

## Is it all bad?

No, obviously not. Divi and Avada are sold almost a million times. These multi-purpose themes are a good fit for people who do not want or know how to code but still want to develop websites. As long as you keep a close eye on these pitfalls (maintenance costs, design and SEO), you will be able to create good looking websites with decent performance. Some people even manage to get a 70/100 score on Google Lighthouse. That is not brilliant, but it will not prevent you from scoring on the first page of Google either, as the industries standard/average is pretty low.

## Conclusion

These multi-purpose themes promise you they will save you time and money during development. However, as argued above, this might be a shortsighted strategy. You will almost certainly make up for that time in maintenance and support and you will have to pay Google monthly (CPC) to get the same amount of organic traffic. In short: saving money on the short run might cost you, or your client, money on the long run.

## Call to action

Are you selling multi-purpose themes and does your client want to get more organic leads? Then you might benefit from the lower maintenance costs and the better SEO a single purpose theme can offer. I can rebuild any website into a single purpose theme that gets a (near) [100% Google Lighthouse Score](/blog/how-to-get-a-100-google-lighthouse-score/). We will sell it to your client as Search Engine Optimization. Sounds good? Just [drop me a line](/contact)...
