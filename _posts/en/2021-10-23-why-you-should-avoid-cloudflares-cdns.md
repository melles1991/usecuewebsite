---
title: "Why you should avoid Cloudflare's CDN"
---

Wait!? I thought the Cloudflare's CDN was good? Is it not responsible for fast loading times, server-side caching and local nodes, providing low response times? And is Cloudflare not the hero of the internet, saving us from DDOS attacks and securing our websites? I hate to tell you this... but no, Cloudflare is not that great.

## Slow

First of all they might slow down your website. Yup... not speed up, but slow down. The delay caused by a CDN can be quite significant. This website on Cloudflare has loading times of up to 0.8 seconds, while without CDN this websites loads in 0.1 second. Even when you visit from San Francisco, this website loads in 1.2 seconds, which is certainly not fast, but acceptable. So, without CDN my website is 8 times as fast from the Netherlands, while from the other side of the world it is not even that much slower.

## A single point of failure

Sure, your normal hosting server is a single point of failure too... but that is one you DO control. Additionally, pointing your DNS to Cloudflare makes a timely recovery unlikely, unless you want to trade the little speed you have left for a low TTL on your DNS record. The recent outages of Cloudflare and Amazon have shown how real this threat is and how extreme the consequences are.

## Privacy invading

Cloudflare's CDN is acting as a reverse proxy, so Cloudflare can read all passwords, emails addresses, everything that gets entered on your website. This is in fact a man-in-the-middle attack, as they also handle the SSL certificate.

## Captchas

You have seen them, especially on Cloudflare: captchas before you can enter a website. They might work against DDOS attacks, but they are also the best way to nullify any conversion your website has left.

## Unethical

CDN's are extremely cheap. You get them almost for free. This should have you worried. Because we all know that when you are not paying... you are the product. But here it might be even worse. You are probably selling your clients visitors data in exchange for hosting, similar to what Google is doing with its Google Analytics and Google Fonts product. I think it highly unethical for web developers to sell something that is not theirs or theirs to sell. We all [should ask a fair price](/nl/blog/het-internet-is-niet-meer-gratis) for our products. Everything else is just deception, which might even be punishable by law.

## Conclusion

The bottom line is that it is bad practise to use Cloudflare, especially when you are building Jamstack websites. That is why I am moving away from Cloudflare and CDN's in general.