---
title: Supersnelle websites met Hugo
---

Sinds 2015 bouw ik bijna al mijn websites met Static Site Generators. Dat zijn systemen die nog het meeste doen denken aan de technologie die mijn broer en ik in 2003 al gebruikte om websites te bouwen. 

Destijds gebruikten we een zelfbedacht soort Markdown en lieten ons [CMS](http://www.joost.vdschee.nl/index.php?item=505) HTML files genereren, die we via FTP naar de webserver stuurden. Twintig jaar later is er gek genoeg niet veel veranderd. Frames hebben plaatsgemaakt voor responsive 'grid layouts' en FTP is SFTP geworden en je hebt volledig versiebeheer via Git, maar verder is het in grote lijnen gelijk gebleven.

## Focus op eenvoud

Toen ik 6 jaar geleden met Static Site Generators in aanraking kwam herkende ik direct de eenvoud van de architectuur en de kracht daarvan. Het voelde als thuiskomen. Het hielp enorm dat Static Site Generators op dat moment enorm gehyped werden: zowel door kleine en grote Venture Capital gedreven bedrijven, als door Github dat gratis [Jekyll](https://jekyllrb.com/) hosting aanbood via [Github Pages](https://pages.github.com/). Jekyll was op dat moment de meest bekende Static Site Generator met de grootste community en dat voor mij de reden om voor Jekyll te kiezen. Ik bouwde honderden websites met Jekyll en werd een expert. De kosten voor het ontwikkelen van websites daalden drastisch. Naast het bouwen van Jekyll websites, waar ik enorm veel plezier aan beleefde, sprak op [JekyllConf](https://www.usecue.com/blog/speaking-at-jekyllconf2019/), beantwoordde ik regelmatig vragen op [Stack Overflow](https://stackoverflow.com/users/2397550/joosts?tab=profile) en zette de website [jekyllcodex.org](https://jekyllcodex.org) op om andere Jekyll developers te helpen en leidde ik een (inmiddels uitgevlogen) stagair op tot Jekyll developer. 

## Focus op snelheid

Ik kwam er al doende achter dat mijn 'eenvoudige websites' een groot ander voordeel hadden: ze scoorden enorm goed in alle testen van Google. Google was in 2019 bezig om deze testen enorm te hypen, via een tool die ze Lighthouse noemden. Dat zag ik als mijn kans en ik sprong erop door een artikel te schrijven over [hoe je een perfecte Lighthouse score krijgt](/blog/how-to-get-a-100-google-lighthouse-score/) en je website in [0,1 seconde](/blog/websites-that-load-instantly/) laadt. Dit is ook goed voor je conversie: een fijne combinatie. Dat leverde behoorlijk wat publiciteit en positieve aandacht van klanten op. Ik besloot vanaf toen bij iedere website die ik opleverde ook een Google rapport mee te sturen, als bewijs van de kwaliteit van mijn werk.

## Focus op AVG

Deze [Jamstack](https://jamstack.org/) websites (zoals mensen het genre tegenwoordig noemen) hebben wel een achilleshiel waarvoor ik de community al een tijd geleden waarschuwde: de AVG. Doordat je met relatief eenvoudige tools een website bouwt, heeft deze voor de moeilijkere dingen (die we vaak 'dynamische componenten' noemen) externe diensten/bedrijven nodig. Je moet met ieder van deze bedrijven een verwerkersovereenkomst sluiten, wat enorm veel papierwerk, popups en vinkjes oplevert (die je overigens tegenwoordig overal ziet): geen ideale situatie. Daarnaast is het ook lastig om al deze externe diensten 'redundant' (dubbel) uit te voeren. Als oplossing heb ik mij als doel gesteld deze dynamische componenten zelf te ontwikkelen en samen met de website aan te bieden. Ik ben begonnen met [Instagram afbeeldingen](https://profilepageimages.usecue.com/), maar heb ook plannen voor een 'form handler' voor bestel- en contactformulieren. Het doel is dat je maar één handtekening nodig hebt om AVG compliant te zijn.

## De overstap naar Hugo

In 2021 heb ik ook besloten om eindelijk (na een eerdere poging in 2017) over te stappen van Jekyll naar Hugo. Hugo lijkt enorm veel op Jekyll, maar is geschreven in Go. Hugo is 10(!) keer sneller dan Jekyll wanneer het op het genereren van websites aankomt. Dat levert een enorm voordeel op bij grote websites. Wanneer je bij een Static Site Generator op 'opslaan' drukt moet je wachten tot de website helemaal opnieuw gegenereerd is voordat je je wijzigingen kunt zien. In het CMS (op de server) moesten klanten soms wel één tot vijf minuten wachten op hun update. Dat is niet erg klantvriendelijk en Hugo brengt die tijd terug tot slechts enkele seconden. Daar kwam bij dat ik een 'image resize proxy' gebruikte voor het schalen van afbeeldingen. Deze oplossing was zowel AVG-technisch als qua performance niet optimaal. Hugo lost dat op, doordat Hugo de afbeeldingen zelf kan schalen tijdens het genereren van de website.

## De toekomst

Mijn doel voor 2022 is om het 'next generation Jamstack framework' te bouwen: 100% AVG vriendelijk, met 'lokale' servers, een [eigen CMS](https://hugocms.usecue.nl) en open source edge scripts. Wij hebben momenteel een prototype draaien op een server in Amsterdam met een fallback in Frankfurt. Updates via het CMS staan binnen een seconde live, de websites zijn volledig AVG proof en laden binnen 0,1 seconde laden met een perfecte Google Score. Dit state-of-the-art framework is veel sneller en beter dan de huidige oplossingen van Netlify, Cloudflare, AWS en Vercel. Hun deploys duren soms wel enkele minuten en hun hosting is relatief traag (0,5 seconde TTFB of meer). En dan heb ik het nog niet eens gehad over hun AVG compliancy (of het gebrek daaraan) en hun 'cache miss ratio'.

Wil je meer weten over deze supernieuwe en -toffe state-of-the-art technologie en/of wil je graag een demo? Neem dan [contact](/nl/contact) met me op!