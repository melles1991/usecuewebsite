---
title: Instagram on your website
---

So you want to show your latest Instagram posts on your website? No problem, you would think... At least that was what I thought, when a client asked me this. Reality turned out to be quite different.

First of all I noticed that most solutions and plugins were not or no longer working.

I assumed that that had something to do with the Instagram API upates from last year. Instagram has introduced a new way of retrieving images. You used to be able to retrieve them with a simple API key. Instagram would provide you with a JSON file that contained the URL and all other info about your images. Very useful. Unfortunately the people at Facebook decided to stop this kind of access. The new method requires you to authenticate with Facebook, upon which you get a token. This token can be exchanged for a long-lived access token, which gives you access to a JSON with temporarily available image URL's. You are allowed to retrieve this JSON for a month, after which you have to renew your token. I assumed that a lot of developers and plugin creators thought that implementing this was to much of a hassle and they had abandoned their projects.

## Broken in Firefox

But that turned out to be not true! Obviously, some developers had abandoned their projects, but most of the software was still working. I found that out when I loaded these solution in a Chrome browser. It turned out they were just not working in my Firefox! Firefox is very stringent when it comes to Facebook (code). They were blocking all images that were loaded directly from Instagram/Facebook. That same pattern occurred at two-third of all solutions I found. Blocking these images happens for a good reason, as it is illegal to load them (in the EU), even with a cookie banner. More info about that can be found in the case of 'Max Schrems' against Facebook, in which the Privacy Shield has fallen/been declared invalid. Some of the solutions, however, were working in Firefox. They had to be doing things differently, but what exactly? After a quick check it turned out that they were loading their images from their own CDN, and that those CDN's did not get blocked by Firefox.

> That was the moment I realised that this was way more complex than I thought...

So I found out that Firefox's 'Facebook container' was blocking the Instagram images, because they were loaded directly from Instagram/Facebook. When you loading these images directly from Instagram/Facebook you risk blocking, due to (valid) privacy concerns, but you also risk a GDPR fine. The question is... is the other solution (the one that was working in Firefox, with their own CDN) GDPR compliant? The short answer is: No. The long answer is: That depends on the CDN/company being American, the servers being located (only) in Europe and the availability of a Data Processing Agreement. Theoretically this solution could be legal, but it practically almost never is. That was the moment I realised that this was way more complex than I thought... Loading images from my own Instagram profile should not be that hard, should it?

## Okay, I will build it myself

I was unable to find a nice GDPR compliant solution to load these few simple Instagram images, so I decided to build a solution myself. After some technical detours I found out that I (unfortunately) had to use the Facebook/Instagram API. And that is what I did. Together with my twin brother I built the whole authorisation and token exchange dance and automated it. This new web application, we named [PPI Loader](https://profilepageimages.usecue.com/), enabled us to easily [download images from Instagram profiles](https://profilepageimages.usecue.com/) and store them on our server. A nice solution for our customers as it was GDPR compliant and did not require them to sign another DPA.

## Ready-made solutions

To get some attention for our tool, and to show people how to use it, I decided to build some ready-made solutions. I created a [simple](https://codepen.io/joosts/pen/NWbdMLW?editors=1100) and an [advanced code example](https://codepen.io/joosts/pen/bGBByOo) (JS/HTML), a Jekyll include and a WordPress plugin. I posted the code examples on Codepen, the Jekyll solution on my [Jekyll Codex](https://jekyllcodex.org/) website and I submitted the WordPress solution to the WordPress plugin directory. The beauty of the WordPress plugin is that it enables you to cache the images on your WordPress server. Therefore there are no longer direct requests from the website visitor to our [PPI Loader tool](https://profilepageimages.usecue.com/). This omits the privacy concerns and the DPA requirement. Unfortunately the solution is not yet available in the WordPress plugin directory, but you can already download it from our [PPI Loader website](https://profilepageimages.usecue.com/). For people using other CMS systems I 

Do you want Instagram on your website? And do you want to show it in a GDPR compliant way? Please [contact](/nl/contact) us!