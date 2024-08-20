---
title: Homepo
description: Saas-service for dropshippers
technologies: [
            'Python',
            'Flask',
            'Java',
            'Spring',
            'Chalice',
            'Zappa',
            'Vue',
            'Linux',
            'AWS',
            'Uwsgi',
            'Heroku',
            'Mysql',
            'Gmail API',
            'Web scraping',
            'Celery',
            'Task queue',
            'JWT',
            'Microservices',
            'Git',
            'Github',
          ]
image: https://i.gyazo.com/16d83ff79997b114949766dda140fa53.png
year: "2017-2021"
workPlace: freelance
---

En tjeneste som gjør det veldig lett for personer i USA som jobbet med
kjøp og salg av produkter *(dropshipping)*
ved å utnytte de fleste butikkers *"90-dagers prismatch"*,

Jeg hentet inn alle kjøp som ble gjort av brukeren via Gmail.

deretter fulgte systemet med på om priser endret seg,
og ga beskjed om noe gikk ned i pris.

I tillegg hentet den opplysninger alle gavekortene til brukerne.
Det var knotete å manuelt finne ut balansen så jeg lagde en løsning som gjorde at de bare trengte å gå innpå min nettside for å sjekke balansene.
Gavekortene ble automatisk hentet fra brukerens epost og lagt inn i systemet.

De fleste sparte $500-1000 i måneden, og jeg hadde på det meste 4 brukere.

## Gjerrigknark

Til å være et lite hobbyprosjekt krevde det overraskende mye grubling med tanke på skalering. Selv om jeg bare hadde 3-4 kunder ble det produsert ekstremt mye data å prosessere.

Siden jeg var en gjerrig/pragmatisk utvikler brukte jeg mye tid på å finne skalerbare løsninger som ikke krevde at jeg måtte skalere hardware.

Jeg Laget også en løsning lignende til Jenkins som dekket mine enkle behov.