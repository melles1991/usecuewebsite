---
title: Een simpele website (her)bouwen
---

Onlangs heb ik een simpele website met een Envato WordPress thema herbouwd. Daar komt toch nog best veel bij kijken.

De opdrachtgever was eigenlijk best tevreden met zijn website, maar het thema werd al tijden niet meer onderhouden en de hosting draaide nog op een oude PHP versie. Upgraden was uiteraard noodzakelijk vanuit security en performance oogpunt, maar dat kon het thema niet aan. Daarnaast was de hosting traag, duur en onderhoudsgevoelig. De opdrachtgever vroeg mij wat hij hiermee aan moest. Ik heb hem geadviseerd om over te stappen naar de Jamstack, om dezelfde reden dat [de allereerste webpagina (uit 1991)](http://info.cern.ch/hypertext/WWW/TheProject.html) nog steeds online is. Wij van WC-eend adviseren immers graag WC-eend.

Gedurende deze migratie heb ik ik vrijwel de volledige website herbouwd. Ik houd namelijk niet zo van [onbekende code](/blog/code-warriors). Daardoor is hij ongeveer drie keer zo snel geworden en zijn de kosten voor het onderhoud drastisch verminderd. 'En passant' hebben we ook de content verbeterd. Ook privacytechnisch is de code enorm verbeterd. Technisch gezien is er dus eigenlijk meer sprake van nieuwbouw dan van optimalisatie. Qua kosten heeft de klant de website binnen drie jaar terugverdiend (toenemende inkomsten niet meegerekend, dus waarschijnlijk sneller). De klant was uiteraard erg tevreden met zijn nieuwe [supersnelle website](/blog/websites-that-load-instantly).

Wil je weten wat er allemaal komt kijken bij zo'n project? Ik heb geprobeerd om dat hieronder inzichtelijk te maken:

## Productie

- schrijven van nieuwe HTML
- schrijven van nieuwe CSS (in rem)
- media queries maken voor mobiele weergave
- CMS koppeling aanmaken
- optimaliseren van de teksten
- logo omzetten naar vectorformaat
- afbeeldingen comprimeren
- maken van renderingen voor de webshop
- OG tags aanmaken
- video's als plaatjes inladen (met doorklik)
- externe scripts verwijderen
- lettertypes lokaal inladen
- iconen omzetten naar svg (ipv icon font)
- javascript verplaatsen naar de footer
- formulieren inregelen

## Testen

- paginagroottes controleren (<1mb)
- testen van score op web.dev (95+ score)
- testen van score op tools.pingdom.com (<2s)
- testen van verschillende browsers
- OG tags controleren
- formulieren testen

## Opleveren

- DNS omzetten van ontwikkel naar productie URL
- SSL certificaat installeren
- maken van 301/redirects
- CMS uitleg geven
- factuur maken/versturen

## Nazorg

- links naar de website maken
- Google Search Console koppelen
- zoekverkeer vergelijken (voor en na livegang)
- klant ondersteunen bij CMS wijzigingen
- website toevoegen aan uptime monitor