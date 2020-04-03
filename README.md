# W3D5-Todo-List
![Screenshot van de todo lijst](https://github.com/Lars3010/W3D5-Todo-List/blob/master/img/screenshot.png "Screenshot App")

Project Week 3, een todo list applicatie die gebruik maakt van Firebase

De bedoeling van de opdracht was om een to-do lijst te bouwen. Deze lijst is gekoppeld aan een database die via een RESTful API aan te roepen is.
Hiervoor is Google's Firebase gebruikt.

## Requirements
- [x] Als gebruiker wil ik een inputveld zien waarin ik mijn taak in kan vullen.
- [x] Als gebruiker kan ik op een button drukken met de tekst "Add Task" waardoor je ingevulde taak toegevoegd wordt aan de lijst.
- [x] Als gebruiker zie ik wanneer ik op de add button knop heb geklikt, de taak verschijnen in mijn takenlijst. 
- [x] Taak verwijderen: Als gebruiker kan ik in de takenlijst op een icoontje klikken van een prullenbak, rechts naast de taak, waardoor de taak uit mijn takenlijst wordt verwijderd.

### API Requirements
- [x] GET: Verkrijg de (initiële) lijst met taken van de database.
- [x] POST: Update de takenlijst met 1 nieuwe taak.
- [x] DELETE: Verwijder een taak uit de database. Gebruik de hash als identifier.
- [x] Maak een file genaamd ```api-client.js``` zoals je hebt geleerd in de afgelopen week voor al je requests.

### Bonus Requirements
- [x] Taak doorstrepen: Als gebruiker kan ik in de takenlijst op een checkbox klikken, links naast de taak, waardoor de tekst van de taak doorgestreept wordt en ik mijn taak kan afstrepen.
- [x] Als gebruiker wil ik op mijn taak kunnen klikken en de tekst kunnen aanpassen.
- [x] PUT: update een bestaande taak de property done of niet done.
- [x] PUT: update en bestaande taak met de PUT method.
