---
title: Smashing new technology
---


Today marks an important milestone. Over the last 18 months the people from Smashing Magazine have been working on a complete overhaul of there website, both technical and visual. And they are [almost ready to launch](https://next.smashingmagazine.com/2017/03/a-little-surprise-is-waiting-for-you-here--meet-the-next-smashing-magazine/).

**What’s different? Well, everything.**
<br>The website won’t be running on WordPress anymore; in fact, it won’t have a back end at all. They are moving to a JAMstack: articles published directly to Netlify CDNs, with a custom shop based on an open-sourced headless E-Commerce (GoCommerce) and a job board that’s all just static HTML; content editing with Netlify’s new open-source, Git-Based CMS, real-time search powered by Algolia, full HTTP/2 support, and the whole website running as a progressive web app with a service worker in the background (thanks to the awesome Service Worker Toolbox library). Booo-yah!

They now use static HTML with advanced JavaScript APIs, running as a progressive web app with a service worker in the background. This results in blazingly fast performance — all served from a CDN near you.

**How does that work?**
<br>Quite simple, actually. Content is stored in Markdown files. HTML is pre-baked using the static site generator, combined with a modern asset pipeline built with Gulp and webpack. They have spiced it all up with a handful of fancy APIs, including ones by Stripe for payments, Algolia for search, Cloudinary for responsive images, and Netlify’s open-source APIs GoCommerce (a headless e-commerce API), GoTrue for authentication, and GoTell for our more than 150,000 comments.

**Impressive!**
<br>Sure… but Smashing Magazine is a big player. They can pull off everything. But what if I told you that your website could use this blazingly fast new technology too? And that the cost would be even lower than a regular WordPress website?

Want to know more? [I would love to talk to you!](/contact/)