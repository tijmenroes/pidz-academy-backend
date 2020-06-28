# Uitleg

Dit is het back-end van de versie van pidz-academy die ik heb opgezet. De [frontend](https://github.com/tijmenroes/pidz-academy-frontend) heeft dit backend nodig om data op te kunnen halen.

# Hoe te gebruiken
#### Installeren 
>npm install 

Dit installeert alle bijbehorende libraries.

### Setup database

Om de api te gebruiken heb je natuurlijk een database nodig. [hier](https://www.mongodb.com/cloud/atlas) kan je een gratis MongoDB atlas database opzetten. Vervolgens krijg je een connection string te zien. Die is nodig voor de volgende stap.

### Setup API

Rename **.env.example** naar **.env**. Stel vervolgens de mongodb connection string in. Zonder deze stap zul je niet connecten met je database.
>DB_CONNECTION=<MONGODB_CONNECTION_STRING_HIER>

### Vul database

Om data op te halen, moet er natuurlijk wel data in staan. Kijk naar het kopje database structuur om te zien hoe deze is opgesteld voor de api.

### Starten

>npm start

Runt de applicatie op localhost:3000.

## Talen en libraries
De volgende talen en libraries zijn gebruikt om dit project op te zetten, je zal hier iets van mee moeten weten om ermee aan de slag  te gaan. Bij elke taal of library staat een link naar de documentatie.
- [node.js](https://nodejs.org/en/)
- [express](https://expressjs.com/)
- [mongoDB](https://docs.mongodb.com/manual/)
- [mongoose](https://mongoosejs.com/docs/guide.html)

## Structuur
De structuur is vrij simpel, en lijkt op velen vue-cli projecten. Hieronder zal ik de structuur van de /src folder bespreken. De rest is te vinden in documentatie van vue-cli.


# Database structuur

Hieronder staat de database structuur. Ik moet wel vermelden dat dit zeker niet de beste manier van het structureren van een database is. De data die ik heb gebruikt is puur voor test purposes. Wanneer dit echt gemaakt zou worden, zou er meer tijd in moeten gestoken worden in het structuren van de database.

### Articles
|_id |Title| body | theme| image | date|
|-|-|-|-| -|-|-|
| ObjectId |String| Array | String | String | Date



### Courses 
|_id | Title | theme| Description| image | date| rating| rating.val| rating.amount |
|-|-|-|-| -|-|-| -|-|
| ObjectId | String | String |String | String | Date | object | Int | Int

