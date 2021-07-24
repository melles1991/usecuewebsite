---
title: Snellere websites met een CDN?
---

Goede websites laden razendsnel. Bijna iedereen die zijn website sneller wil laten laden gebruikt een CDN, ofwel content delivery network. Dat is een netwerk van servers die verdeeld staan over de wereld, waarbij iedere website op iedere server staat.

## Wat doet een CDN?

Een CDN doet twee dingen: het cachen (statisch maken en in het geheugen houden) van je bestanden/verzoeken en deze aanbieden vanaf de dichtstbijzijnde server. Dat levert normaal gesproken tijdwinst op.

## Statische websites

Bij statische websites is dat alleen anders. Aangezien de verzoeken al statisch zijn en bij een goede webserver al uit het cache geleverd worden, valt er op dat vlak alleen maar tijd te verliezen. Daarnaast staat het CDN weliswaar over de hele wereld, maar daar heb je niet veel aan wanneer je website in het Nederlands is of je doelgroep zich alleen in Nederland bevindt. Dan wil je een server in Nederland en niet eentje ver in Duitsland plus een paar 'over de hele wereld'. 

## Hoeveel vertraagd een CDN?

De vertraging die wordt veroorzaakt door een CDN kan behoorlijk oplopen. Zo host ik Nederlandstalige websites voor klanten op het CDN van CloudCannon, waarbij ik laadtijden van soms wel 0,8 seconde zie, terwijl ze zonder CDN in 0,1 seconde laden. Diezelfde websites laden zonder CDN vanuit San Fransisco in 1,2 seconde, wat zeker niet snel is, maar wel acceptabel. Zonder CDN ben je dus vanuit Nederland 8 keer zo snel, terwijl je vanuit het (verre) buitenland niet eens zo heel veel trager bent.

## Huh? Hoe kan dat?

Waarom zou iemand dan nog zo’n CDN gebruiken? CDN’s zijn toch razend populair? Tja... eerlijk gezegd weet ik dat ook niet. Je hebt namelijk geen controle over het cache van het CDN en de kans dat jouw niet-zo-heel-populaire website nog in het cache staat is niet heel groot. Je bezoeker heeft dus met een CDN een relatief grote kans op een ‘cache miss’. Dit in tegenstelling tot jouw VM waarop je er (hopelijk) voor hebt gezorgd dat je voldoende cache hebt om alle statische verzoeken in het cache te houden. Daarnaast staan die CDN servers zoals gezegd wel over de hele wereld, maar niet per se naast de deur en ook niet per se op een premium spot (bijvoorbeeld vlakbij de AMS-IX). Een CDN levert dus vaak veel slechtere prestaties dan een goed gekozen VM van een tientje per maand: raar... maar waar.

## Razendsnelle websites

Ik bouw websites met superlichte pagina’s, doordat ik vrijwel geen frameworks gebruik. Daarmee kun je razendsnelle laadtijden halen. Je moet echter wel kritisch zijn wanneer het aankomt op het gebruik van een CDN. Voor internationale websites is een CDN zeker het overwegen waard, maar voor lokale websites is het gebruik van een CDN vrijwel altijd een slecht idee. Ik zie daar (zeker voor Jamstack websites) geen [toekomst](/nl/blog/supersnelle-websites-met-hugo) in.
