---
title: Arguments for the JAMstack
date: 2018-11-23 23:12:18 +0000

---
I have built more than 100 JAMstack websites in the past few years and I am a [big](https://www.usecue.com/blog/jekyll-against-the-rest-of-the-world/) [fan](https://www.usecue.com/blog/from-wordpress-to-cloudcannon/). However, I hear a lot of unnuanced opinions about the JAMstack from people around me. To set that straight I will try to make an honest comparison between the JAMstack and WordPress.

First of all: [What are JAMstack websites?](https://jamstack.org/ "https://jamstack.org/") It is easier to explain what they are NOT. JAMstack websites are website that typically do NOT fetch real-time data from a database to assemble the content on the page. JAMstack websites serve pre-generated pages that can be enriched by data from API's fetched by Javascript. WordPress websites fetch their page content real-time from their own database and are therefore NOT JAMstack websites.

Popular arguments in favor of the JAMstack are:

* better performance
* safer
* better scalability
* cheaper
* better developer experience

## Better performance

With performance people refer to the speed at which the site loads. A normal WordPress website is slower than a normal JAMstack website, because WordPress has to fetch his page content real-time from the database. However, when you enhance WordPress with caching and a CDN, you will get almost equal performance, as your WordPress website with caching sort-of became a static/JAMstack website. Note that generating a preview of your edits is typically much slower on a JAMstack website, as compared to Wordpress (often a factor 10, so 2 versus 20 seconds).

## Safer

A JAMstack has no 'moving parts'. This means that a JAMstack website requires no PHP or database. PHP in combination with a database is known for its vulnerability, while HTML, Javascript en CSS (the languages of the JAMstack) are safe 'by design', because they are being executed client-side (on the visitors computer). However, when you require a contact form or comments you will need a third party application. This third party has the same security issues as any WordPress website. The JAMstack might have fewer moving parts, thus less 'attack surface', but it often requires you to out-source your security to multiple third parties. Their security should better be all right. It is also good to know that WordPress also has the option to out-source your security, by choosing for Managed WordPress Hosting. The relative high cost of these services make them impopular, which is a shame, as sleeping sound should be valued higher.

## Better scalability

JAMstack website are typically being served by a CDN. CDN's can cope with lots of visitors at the same time. A huge amount of visitors will not take down your server. As argued before, a CDN can also be added to a WordPress website, marginalising the performance differnce in this field. Additionally, when you really need to, you can easily migrate your WordPress website to a bigger/faster/better server.

## Cheaper

Regular JAMstack websites have no moving parts, which causes a lower load for the server, as compared to regular WordPress websites. This makes hosting a JAMstack website a lot cheaper. There is a catch though... When you want to extend your JAMstack website with a good CMS, automatic image scaling or sending contact forms, you need a third party. This third party will more often than not ask a fee for its service. These costs might completely deminish your initial financial advantage.

## Better developer experience

'Simple is simply better' and JAMstack websites are by design very simple. Therefore it is easier and quicker to create a JAMstack website. However, when you want something beyond the scope of the JAMstack, things get complicated really fast. For example: a fail-over. Running a fail-over on a WordPress website is relatively easy. You 'simply' duplicate the server and use a fail-over DNS. When you want to do the same for a JAMstack website, it is not so easy. You will have to configure alternative solutions for all your (third party) services. The complexity of the solution increases rapidly, which defenitely not leads to a better developer experience. So 'developer experience' is mainly dependent on the complexity of the website.

## Conclusion

The nuanced story is: the JAMstack is a logical and fun choice for a simple website, as in that case, it is often cheaper and less complex. However, as soon as you have more advanced wishes, JAMstack websites become easily more expensive and more complex than their WordPress counterparts. The JAMstack is not the best solution for any project. Do you want to know if a JAMstack website is a good choice for your project? [Contact me!](https://www.usecue.com/contact/) I would love to give you some free advice.