---
title: Een privacyvriendelijke website
---

Een privacyvriendelijke website of iets specifieker 'een website conform de AVG', wat betekent dat precies? 

## De AVG in het kort

Persoonsgegevens mogen niet zonder toestemming bij derden terecht komen. Met iedere derde moet een verwerkersovereenkomst afgesloten worden.

De term 'persoonsgegevens' moeten hierin breed worden gezien. Een [IP-adres is ook een persoonsgegeven](https://ciberjuristen.nl/ip-adres-is-persoonsgegeven/), zeker in combinatie met andere gegevens, zoals browsertype, besturingssysteem, tijdstip, etc.

Deze 'toestemming' moet expliciet zijn en aantoonbaar. Dat eerste betekent dat iemand een handeling moet hebben gedaan om akkoord te gaan met deze verspreiden van zijn persoonsgegevens. Het tweede betekent dat je het 'akkoord' moet opslaan, inclusief tijdstip.

'Derden' zijn alle partijen behalve uzelf. In het geval van deze website: het bedrijf Usecue BV.

De 'verwerkersovereenkomst' beschrijft met welk doel de gegevens gedeeld zijn en hoe ze beschermt worden. Deze overeenkomst voorkomt dat gegevens worden misbruikt of lekken en beschrijft de verplichtingen wanneer zoiets zich toch voordoet.

## Gegevens naar de VS

In juni 2020 kwam daar nog een regel bij. Toen is namelijk het 'Privacy Shield' [ongeldig verklaard](https://autoriteitpersoonsgegevens.nl/nl/nieuws/privacy-shield-voor-doorgifte-naar-vs-ongeldig-verklaard) door het Europese Hof. Dit Privacy Shield werd gebruikt om gegevensuitwisseling tussen de EU en de VS te versimpelen. Het enige alternatief hiervoor is het gebruik van een Standard Contractual Clause, maar daar zijn bij voorbaat [al vraagtekens bij geplaatst](https://en.wikipedia.org/wiki/EU%E2%80%93US_Privacy_Shield). Wanneer je [de zaak bestudeert](/blog/privacy-shield-ongeldig-hoe-nu-verder) vind je daarvoor ook een onderbouwing: De Amerikaanse overheid is niet te vertrouwen wanneer het op privacy van Europese burgers aankomt. Aangezien je persoonlijk verantwoordelijk bent voor de juridische onderbouwing van de bescherming van de door jou verwerkte persoonsgegevens, is dat een zeer hoog risico. Dat betekent mijns inziens effectief dat organisaties in de EU geen persoonsgegevens aan de Verenigde Staten (VS) meer kunnen doorgeven.

## Drie aanpakken

Er zijn drie aanpakken denkbaar:

1. Niets doen. Je weet wel dat je je niet aan de wet houdt, maar aangezien er vrijwel niet gehandhaafd wordt hoop je dat je er met een waarschuwing vanaf komt. Aangezien de boetes zo hoog zijn, hangt er bij 'niets doen' continu een zwaard van Damokles boven je hoofd. Daarnaast kan het leiden tot negatieve publiciteit, wat uiteraard veel geld en tijd kost. Niets doen lijkt me een zeer onverstandige aanpak.

2. De norm volgen. Je doet wat de meeste mensen doen. De kans dat dit leidt tot een boete is klein, maar het kan wel tot klachten van klanten, een rechtszaak en/of uiteindelijk zelfs een boete leiden met alle gevolgen van dien. De norm volgen is een populaire strategie. In websites zie je dat voor de expliciete toestemming vaak een cookie-banner wordt gebruikt. Pas wanneer de bezoeker op 'OK' klikt worden er persoonsgegevens met derden gedeeld. Dit betekent in de praktijk echter dat je metingen (bezoekers en conversie) zeer onbetrouwbaar zijn. De norm is om het gebruik van externe hostingproviders, waarbij uiteraard IP-adressen worden gelekt, te negeren. Hier zie je bovendien veelvuldig het gebruik van diensten uit de VS. Ook wordt het moment waarop akkoord wordt gegeven niet altijd opgeslagen, terwijl dit wel vereist is.

3. De wet volgen. Je leest en volgt de letter van de wet en de invulling die de Autoriteit Persoonsgegevens daaraan geeft. Hiermee houd je al het AVG gezeur buiten de deur en respecteer je de privacy van je websitebezoekers. Dit kost echter wel de nodige inspanning. Ik licht deze aanpak hieronder toe.

## De wet volgen

Het klinkt simpel, maar wat houdt het precies in? Hieronder de oplossingen voor jouw website:

- Hosting verhuizen naar een server in de EU
- Geen (internationaal) CDN gebruiken (failover binnen de EU kan wel)
- Verwerkersovereenkomst(en) afsluiten met hostingpartij(en)
- Geen Google Analytics gebruiken maar Google Search Console
- Bezoekersaantallen eventueel dubbelchecken op basis van log files
- Aantal referrals meten op het ad-platform zelf (Facebook, Linkedin, Google)
- Referrals eventueel dubbelchecken op basis van log files
- Zelfrapportage invoeren bij sales (vraag: hoe kwam u bij ons?) om conversie te meten
- Youtube video's niet embedden, maar openen in een lightbox of nieuw window
- Instagram afbeeldingen inladen vanaf je eigen server of met verwerkersovereenkomst bij Europese partij
- Formulierafhandeling op je eigen server of met verwerkersovereenkomst bij Europese partij

En wanneer je een webshop hebt moet je ook hieraan denken:

- Geen Shopify of ander hosted platform (uit de VS) gebruiken
- Verwerkersovereenkomst afsluiten met Europese webshopaanbieder en betalingsprovider
- Expliciete toestemming vragen om gegevens naar de webshopaanbieder en betalingsprovider te sturen

Natuurlijk voldoet je website morgen nog niet aan de AVG, maar je kunt nu wel de verandering in gang zetten. Dat zorgt ervoor dat jij geen risico loopt en niet in de problemen komt zodra de Autoriteit Persoonsgegevens deze wet ook daadwerkelijk gaat handhaven.

## Meer weten?

Heb je nou nog vragen op basis van het bovenstaande of wil je dat ik je help om AVG proof te worden? Dan help ik je uiteraard graag. Neem gerust contact (/nl/contact) met me op.