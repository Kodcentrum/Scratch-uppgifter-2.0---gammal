# Draken mot hajarna

I den här uppgiften ska du få koda en drake som kan flyga runt. Du kommer styra den med piltangenterna. Det kommer också att finnas hajar som hoppar och försöker äta upp draken. I den här uppgiften kommer du att jobba med funktioner (egna block) och du kommer lära dig vad som är bra med dem. Ett mål är att skapa mer effektiv kod.

Ett exempel på hur  spelet kan se ut ser du här: <a href="https://scratch.mit.edu/projects/116717825/" target="_blank">https://scratch.mit.edu/projects/116717825/</a>

![image alt exempel](image_1.png)

## 1: Sätta upp bakgrunden och draken

Du börjar med att skapa en bakgrund och lägga till en drake. Draken kommer att åka upp och ner på scenen och styrs med hjälp av piltangenterna.

1.	Skapa ett nytt projekt och ta bort katten

2.	Lägg till en valfri **bakgrund** som du tycker är rolig. I det här exemplet används **city with water 2**

3.	Lägg till sprajten **Dragon** från biblioteket och **byt namn** på den till **Drake**. Placera den i mitten av scenen.

4.	Skapa ett skript för **Drake** som säger:

  * Startar när START klickas på

  * Går till **X-värdet: 0** och **Y-värdet: 0**

  * För alltid:

    * **Repetera** _10_ **gånger**: Ändra **y** med **10** och **vänta** 0.1 sekunder

    * **Repetera** _10_ **gånger**: Ändra **y** med **-10** och **vänta** 0.1

5.	Skapa ett nytt skript för **Drake** som säger:

  * Startar när START klickas på

  * För alltid:

   * **Peka uppåt** och **gå 10** steg OM **”uppåtpil”** är neddtryckt

   * **Peka nedåt** och **gå 10** steg OM **”nedåtpil”** är neddtryckt

   * **Peka höger** och **gå 10** steg OM **”högerpil”** är neddtryckt

   * **Peka vänster** och **gå 10** steg OM **”vänsterpil”** är neddtryckt

   ![image alt block](image_2.png)

   _Här är några av de block du behöver för punkt 4 och 5. Tänk på att vissa block kan du behöva använda mer än en gång._

> Klicka på START knappen. Åker draken upp och ner precis som om den svävar? Kan du styra den med piltangenterna?

**Tips:** Om du vill att drakens klädsel bara ska vända sig åt höger och vänster även om draken åker uppåt och neråt så kan du sätta **rotationsstil** till **vänster-höger**.

  ![image alt rotationsstil](image_3.png)

_Den röda rektangeln visar de olika rotationsstilarna. Den blåmarkerade är **vänster-höger**._

## 2: Hajar

Nu ska du få skapa hajar som ska försöka äta upp draken. Flera hajar skapar du med hjälp av KLONER, vilket är ett sätt att skapa kopior av en sprajt som ser likadana ut och beter sig på samma sätt.

1.	Lägg till sprajten **Shark** och ge den namnet **Haj**

2.	Skapa ett skript för **Haj** som säger:

  * Startar när START klickas på

  * **Göm** hajen

  * För allitd:

    * **Vänta** 1 sekund

    * Gå till **x:0** och **y:-100**

    * **Skapa klon** av mig själv

3.	Skapa ett nytt skript för **Haj** som säger:

  * Startar när den **startar som klon**

  * **Peka** mot **Drake**

  * **Visa** sprajten

  * **Gå 10** steg **tills** den **far upp i taket** (y > 180)

  * **Peka** nedåt

  * **Gå 10** steg **tills** den **far i marken** (y < -180)

  * **Radera** klonen

4.	Skapa ett skript för **Drake** som säger:

  * Starta när START klickas på

  * FÖR ALLTID: **Göm** OM rör hajen

5.	Lägg till ljudet **chomp** och **spela** det när hajen rör draken

6.	Lägg till ett **visa**-block på lämpligt ställe så draken syns när **spelet startar**.

  ![image alt block](image_4.png)

  _Här de block du behöver för 2. Tänk på att vissa ska användas för **Drake** och andra för **Haj**._

> Testa spelet! Försvinner draken när hajen äter upp den?

**Tips:** Är spelet för svårt? Blir draken uppäten för fort? Du kan pröva med att använda **förminskningsverktyget** och göra hajen mindre.

## 3: Spelet slutar och börjar om

Nu ska du få skapa en ny bakgrund som ska visas när spelet tar slut. Du ska också få koda så att det räcker med att trycka på mellanslag för att börja om spelet.

1.	**Rita en ny bakgrund.** Den ska visas när spelet tar slut så du kan använda t. ex. penseln för att skriva **”Spelet slut!”**.

2.	Ge bakgrunden namnet **”spelet slut”**.

  ![image alt namn](image_5.png)

  _Den röda rutan visar var du kan ändra namn på en bakgrund._

3. Ändra i **drakens skript** så att den skickar meddelandet **”spelet slut”** när den **rör hajen**. Lägg också still **stoppa andra skript** i sprajten.

4.	Skapa ett skript för **scenen** som säger:

  * Startar när meddelandet **”spelet slut”** tas emot

  * Byt bakgrund till **”spelet slut”**

  * **Vänta tills** tangenten **”mellanslag”** är nedtryckt

  * Byt bakgrund till **”city with water”** (eller den bakgrund du använde dig av)

  * Skicka meddelandet **”nytt spel”**

5.	Skapa ett nytt skript för scenen som ser till att bakgrunden är **”city with water”** visas när **spelet startar**.

6.	Skapa ett skript i **Haj** som säger:

  * Startar när sprajten tar emot meddelandet **”spelet slut”**

  * **Stoppa andra skript** i sprajten

  * **Radera** klon

  ![image alt block](image_6.png)

  _Här de block du behöver för punkterna 4 till 6 ovan. Tänk på att vissa ska användas för **Haj** och andra för **scenen**._

7.	Skapa ett nytt skript för **Haj** som säger:

  * Startar när den tar emot meddelandet **”nytt spel”**

  * Kör samma skript som när START klickas på. Du kan **högerklicka** på blocken och välj **kopiera!**

  ![image alt kopiera](image_7.png)

8.	Skapa nya skript för **draken**. **Alla skript** som körs när START klickas på ska också köras när den tar emot meddelandet **”nytt spel”**. Du kan **högerklicka** på blocken och välj **kopiera!**

> Testa! Kan du starta om spelet genom att klicka på mellanslag?

  ![image alt block](image_8.png)

_Ungefär så här mycket kod ska du ha skapat för **Drake** nu._

## 4: Funktioner
Du kanske tidigare stött på FUNKTIONER i matematik eller på andra ställen. När du kodar FUNKTIONER så fungerar dom på ett lite annorlunda sätt. FUNKTIONER är en **litet skript** som kan **köras flera gånger**.

> Du kan till exempel använda FUNKTIONER du kodar till att spara tid och göra så att din kod är lättare att förstå. I förra uppgiften **kopierade** du massor av block som gör precis som sak. Det är **onödigt och kan skapa en massa problem**. Det blir till exempel krångligt om du vill ändra i koden eftersom du då måste **ändra på många ställen**. I stället ska du få koda **funktioner** som sedan kan **återanvändas** och **köras flera gånger**. De kommer fungera som vanliga **block**.

Vi börjar med hajen:


1.	Klicka på **hajen** så att den är markerad och du kan skapa koda för den sprajten

2.	Klicka på **Flera block** och sen på **Skapa ett block** för att skapa en funktion. Namnge block till **”för alltid(klona mig)”**.

  ![image alt nyttblock](image_9.png)


3.	Nu ska det ha dykt upp ett **stort lila block** i hajen som används för att berätta **vad funktionen gör**. ![image alt nyttblock](image_10.png) Flytta koden som startar när START klickas på så dessa block är under **definitionen** av **”för alltid(klona mig)”**.

4.	Lägg till ett **block** för **”för alltid(klona mig)”** under blocket med den gröna flaggan. Nu kommer denna funktion köras när du klickar på START

5.	Ta bort koden som körs när sprajten tar emot meddelande **”nytt spel”** och lägg till ett block för **”för alltid(klona mig)”**.

  ![image alt block](image_11.png)

> Testa spelet! Fungerar det precis som förut? Tycker du det är enklare att förstå koden nu?

Nu till draken:
1.	Skapa ett **nytt block** för varje funktion som du vill göra. **Namnge blocket** till något som gör det lätt att förstå vad **funktionen gör**.

2.	Du kan till exempel skapa ett nytt block som heter **”sväva”** och under **definitionen** för detta block lägga in koden som gör att **draken svävar**.

3.	Ersätt koden som körs när START klickas på och när meddelandet **”nytt spel”** tas emot med ett block för **”sväva”** (eller vad du nu kallade blocket).

4.	**Repetera** punkterna 1 till 3 för all kod som du vill göra till funktioner.

  ![image alt block](image_12.png)

  _Ungefär så här kan koden för **Drake** se ut nu. Jämför med hur det var innan!_

## Färdig!
Grattis, nu har du gjort klart uppgiften.

**Glöm inte att spara ditt projekt!** Döp det gärna till uppgiftens namn så att du enkelt kan hitta den igen.

> **Testa ditt projekt**  
  Visa gärna någon det som du har gjort och låt dem testa. Tryck på DELA för att andra ska kunna hitta spelet på Scratch. Gå ut till projektsidan och låt någon annan testa spelet!

## Utmaningar

### Hajens utseende

Om du klickar på hajen och kollar på sprajtens klädslar, så ser du att den har flera stycken. Kan du skapa ett skript i hajen så att den har en öppen mun när den hoppar mot draken och stänger munnen när den rör vid draken?

### Ofarlig haj

När hajen har nått taken är den egentligen ofarlig eftersom den har misslyckats med att äta upp draken. Men för tillfället kan den äta upp draken även på vägen ner från ”taket”. Kan du fixa så att den inget händer med draken om den stöter på en haj på vägen ner?

**Tips:** Använd en **lokal variabel** för att hålla koll på om hajen har slagit i taket.

### Ökad svårighet

Kan du göra så att spelet blir svårare efter ett tag? Det finns flera olika varianter på detta.

## Frågeställningar

* Hur kan du kopiera kod i Scratch?

* Vad är en funktion?

* Varför är det bättre att använda en funktion än kopiera kod?
