### Rapport Filmvisarna Team 1

Deltagare: Alexandra, Annelie, Charlotte, Kira, Kim och Samuel.
Filmvisarna som vi testat - https://filmvisarna-team1.nodehill.se/

SCRUM - master: Alexandra satte upp vårt gemensamma GitHub-repo. Var och en av deltagarna skapade sedan varsin egen gren och utvecklade den Feature funktionalitet som man arbetade med.

SCRUM projekt-boards skapades av gruppen i Trello och uppdaterades kontinuerligt av samtliga i gruppen. 
Vi hade dagliga morgonmöten där vi gick igenom gårdagens arbete samt diskuterade dagens arbetsfördelning och de uppgifter som skulle göras fram tills nästa möte.

Vårt främsta testfokus var på bokningsförfarandet men eftersom vi var ganska många i gruppen testade vi även av en hel del annat. 
Filtrering, avbokning, bokningsbekräftelse, detaljerade vyn, tillgängliga sätten, biljettfunktion, biljettpriser, inloggning, registrering av användare och sökning var de områden som vi täckte upp med våra tester. 


### Vi testar följande Features: 

•	Available seats – testar så att det inte går att boka platser i en redan fullsatt salong.
Testar så att det inte går att boka mer än 8platser och att det inte går att boka en redan upptagen plats. Samt att det går att boka platser som inte är intilliggande.

•	Ticket Booking - checkat generell funktionalitet, gör hela vägen från boka biljett till biljettbekräftelse och som negativ scenario när användaren glömde att välja plats. Den feature var uppdelad till andra små features.

•	Detailed View – testar av så att detaljsidan och dess innehåll visas som tänkt. Testar att trailern är synbar, att Boka knapp funkar och att fler visningsdatum kan hämtas.

•	Ticket Confirmation - checkat scenario när användare innan att bekräfta bokning loggar in som medlem och scenario när användare bekräftar boking utan att logga in.

•	Show Price – biljettfunktion och uträkning. Kontrollerar att de olika biljetttyperna går att välja och att det blir rätt summa.

•	Cancel Booking - både som medlem och som icke-medlem. Som medlem ligger bokningen på 'Min sida' och på samma sida finns en avboka-knapp. Som icke-medlem får användaren ett mail där det finns en avboka-knapp (den knappen fungerar ej - "webbplatsen kan inte nås").

•	Register - testar scenarion för tomt fält, för svagt lösenord och vid positivt utfall testar så att rätt uppgifter matas in i fälten för att skapa ett lyckat lösenord.

•	Login - testar av fel lösen, tomt lösenord, tomt emailadressfält, testar även korrekta inloggningsuppgifter för konto som finns sen tidigare.

•	Filter – gör filtrering mellan vad som går på bio just nu, kommande filmer, välja specifikt datum samt välja åldersgräns.

•	Search – testar att det kommer fram något relevant sökresultat baserat på sökinput. Vid medveten ”misslyckad” sökning ska det komma fram en infotext som visar på att sökningen inte matchar något.


### Vad visar testerna på - finns det buggar/fel i produkten? 

De scenarion vi valt att testa av går igenom utan fel. Vi valde bort att testa de funktioner där vi såg buggar/fel i produkten.
Däremot i den utforskande testdelen antecknade vi alla buggar och förbättringar som vi hittade på filmsidan.

Länk till dessa anteckningar i Trello finns här: 
https://trello.com/b/IMhiGAaA/exploratory-testing
 

### Saker vi inte hunnit testa

Vi prioriterade bort att testa meny länkarna Hitta hit, Kontakt och Om oss. Alla dessa tre gick till samma gemensamma sida.
Sociala medier länkarna testades inte heller av, då dessa inte var länkade utan endast verkar finnas med för syns skull.

