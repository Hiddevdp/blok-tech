# Blok-tech

Ik ben Hidde van der Plaat, 2de jaars cmd student en dit is de repo van mijn applicatie voor blok tech. Het doel van dit project is voor een matching app een werkende feature bouwen.

## Concept

![Logo](https://github.com/Hiddevdp/blok-tech/blob/main/static/media/logoblack.png)

Mijn concept van het project is een app genaamd "Skills", dit is een platform skills uit te wisselen in de vorm van een matching app. Je kunt de app gebruiken als je les wilt geven of als je iets wilt leren. Als je graag les wilt geven in een bepaalde skill maak je een account aan en een advertentie. Zo kan iemand die dit van jou wilt leren je vinden en kun je in de chat de details bespreken.

## instalatie

Om het project te draaien kan je naar mijn Heroku website gaan:
https://skills-1.herokuapp.com


Of om het lokaal te runnen moet je wat stappen doorlopen:
1. Npm, Git en Node.js installeren

3. De repository clonen:
```bash
$ git clone https://github.com/Hiddevdp/blok-tech.git
```
3. Een database aanmaken met MongoDB

4. Een .env file maken en vullen met de volgende info:
```bash
DB_URI = "Jouw database link met ingevulde <wachtwoord>"
DB_NAME = "De naam van je database"
```


5. In de terminal deze commands runnen:
```bash
# instaleer de benodigde packages
$ npm install
# start de server
$ npm start
```
In de terminal komt dan te staan in welke port de server draait, in dit geval http://localhost:5500/.
## Database
De database is een simpele structuur dat de benodigde info voor een advertentie bevat:
![DB](https://github.com/Hiddevdp/blok-tech/blob/main/static/media/Dbss.jpg)
## License

[ISC](https://github.com/Hiddevdp/blok-tech/blob/main/LICENSE)
