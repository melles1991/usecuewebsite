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

Regular JAMstack websites have no moving parts, which causes a lower load for the server, as compared to regular WordPress websites. This makes hosting a JAMstack website a lot cheaper. Er zit echter een addertje onder het gras. Wanneer je je JAMstack website wilt uitbreiden met een goed CMS, het schalen van afbeeldingen of het versturen van formulieren moet je dat afnemen bij een derde partij, die daar (mogelijk) geld voor vraagt. Deze kosten doen je eerdere voordeel vaak teniet, waardoor je soms per saldo  duurder uit bent.

## Better developer experience

'Eenvoudiger is beter' en JAMstack websites zijn in principe erg eenvoudig. Het is dus sneller en makkelijker om een JAMstack website te maken. Wanneer je echter iets buiten de scope van de JAMstack wil, wordt het al snel veel ingewikkelder. Neem bijvoorbeeld een fail-over. Een fail-over van een WordPress website draaien is een fluitje van een cent (gewoon de server dupliceren en er een fail-over DNS op zetten). Wanneer je dit voor een JAMstack moet doen, heb je het een stuk lastiger. Je zult dan alternatieve oplossingen voor alle services moeten configureren. De complexiteit wordt dan al snel erg hoog, wat zeker niet tot een betere developer ervaring leidt. Hoe fijn de developer ervaring is hangt dus af van de complexiteit van de website.

## Conclusion

Het genuanceerde verhaal is dus: JAMstack is een logische keuze voor simpele websites, omdat het dan vaak goedkoper en eenvoudiger is. Zodra je echter bijzondere wensen hebt, wordt het al snel ingewikkelder en duurder. De JAMstack is dus niet voor ieder project de beste oplossing. Wil je weten of de JAMstack een goede keuze is voor jouw website? Neem [contact](https://www.usecue.nl/contact/) met mij op. Ik geef graag advies.