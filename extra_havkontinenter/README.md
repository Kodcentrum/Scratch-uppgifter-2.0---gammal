# Hav och kontinenter

I denna uppgift skall du få skapa en prototyp till ett frågespel. Först skall du få koda ett spel som går ut på att gissa var olika hav ligger. Därefter kommer du att få utöka programmet med frågor om var olika kontinenter ligger. I uppgiften kommer du få använda dig av många funktioner och sprajtar.

  ![image alt exempel](image_1.png)

Ett exempel på hur  spelet kan se ut ser du här:

* <a href="https://scratch.mit.edu/projects/116509972/" target="_blank">Exempel</a>

## Delmoment 1: Bakgrund och några sprajtar

1.	Skapa ett nytt projekt och ta bort katten.

2.	Som bakgrund behöver du en världskarta. En sådan kan du hitta genom att googla eller så kan du välja en från  <a href="https://commons.wikimedia.org/wiki/Category:Blank_maps_of_the_world" target="_blank">Wikimedia</a>. Spara bilden på din dator och ladda upp den som bakgrund i ditt Scratch projekt.

3.	Nu behöver du en sprajt som skall styra spela. Du kan till exempel använda dig av Sport/Ball. Sätt den i ett hörn av spelplanen.

4.	Rita en ny sprajt och gör den till en ganska liten cirkel. Det är denna sprajt som du skall klicka på för att gissa på olika hav. Dra sprajten så att den ligger i **”Indiska oceanen”** på kartan.

5.	Skapa en variabel för alla sprajter som heter **”poäng”**

6.	Skapa en lista för all sprajter som heter **”alternativ”**

  ![image alt exempel](image_2.png)

  _Ett exempel på hur spelet kan se ut nu._

7.	Skapa ett skript för sprajten **Ball** som säger:

  * Startar när sprajten klickas på

  * Skicka meddelandet **”starta nytt havsspel”**

8. Skapa ett till skript för samma sprajt
  *	Startar när den tar emot meddelandet **”starta nytt havsspel”**

  * Sätt **"poäng"** till **0**

  * **Ta bort allt** i listan **”alternativ”**

  * **Sätt** in **”Atlanten”** sist i **"alternativ"**

  * **Sätt** in **”Stilla havet”** sist i **"alternativ"**

  * **Sätt** in **”Indiska oceanen”** sist i **"alternativ"**


  ![image alt block](image_3.png)

  _Det här är några av de block du behöver för punkt 8._

Testa spelet! Läggs det till olika hav i listan när du klickar på sprajten?

9.	Skapa en variabel som heter **”rätt svar”**. Den skall inte visas på skärmen.

  ![image alt nyttblock](image_4.png)

  _Här hittar du knappen för att skapa ett nytt block._

10.	Skapa ett nytt block som heter **”fråga”**, och som gör följande. (Du kan skapa nya block under **Fler block**)

  *	Sätt **”rätt svar”** till ett **slumptal** mellan **1** och **längden på ”gissningar”**

  *	Säg **”Var ligger ”** + **objekt ”rätt svar” i "alternativ"** + **”?”**

11.	Se till att blocket **”fråga”** körs när sprajten **Ball** tar emot meddelandet **”starta nytt havsspel”**. Du kan lägga in blocket efter koden du skapade ovan i punkt 8.

  ![image alt block](image_5.png)

  _Det här är några av de block du behöver för punkt 2._

## Delmoment 2: Hav-prickar!

Nu skall du göra så att du eller någon annan kan gissa på olika hav genom att klicka på hav-prickar. Du skapade en sådan sprajt ovan och det skall bli enkelt att skapa fler sådana prickar utan för mycket kod.

1.	Skapa en variabel för alla sprajter som heter **”svar”**. Den skall inte visas på skärmen.

2.	Skapa ett skript i sprajten **Sprite1** som säger

  * Startar när den klickas på

  * Sätt **"svar”** till **3**

  * Skickar meddelandet **”rätta hav”**

  * Säg **objekt 3** i **”alternativ”** i 2 sekunder.


  ![image alt block](image_6.png)

  _Det här är några av de block du behöver för punkt 2._

Du använder dig av **3** här eftersom pricken är placerad i Indiska oceanen och det är den plats i listan som just det här havet har. Det är i allmänhet inte bra att använda sig av siffror på det här sättet. Till exempel behöver du byta ut **3**:an på flera ställen om du kopierar sprajten och placerar den på ett annat hav. Därför skall du ersätta **3**:an med en **lokal variabel** som bara finns för denna sprajt.

  ![image alt lokalvar](image_7.png)

3.	Skapa en variabel för **Sprajt1** som heter **”id”**. Var noga med att skapa denna variabel enbart för denna sprajt.

4.	Skapa ett skript för **Sprajt1** som säger:

  * Startar när START klickas på

  * Sätt **”id”** till **3**

5.	**Ändra** i det skriptet som du skapade i punkt 2 ovan så att **3**:an byts ut mot variabeln **”id”**.

![image alt block](image_9.png) **INTE** ![image alt block](image_8.png)

Nu kan du skapa fler prickar!

6.	Kopiera **Sprajt1** och placera kopian på Atlanten i kartan.

7.	Ändra skriptet som sätter **”id”** så att värdet i stället blir **1**.

8.	Repetera punkterna 6 och 7 men placera den tredje pricken i Stilla havet och sätt **”id”** till **2**.

Vad händer nu om du klickar på de olika prickarna? Visar de rätt namn?

## Delmoment 3: Rätta gissningen

Nu fattas bara att du kontrollerar så att spelaren klickar på rätt prick.

1.	Skapa ett skript i **Ball** som säger

  * Startar när den tar emot meddelandet **”rätta hav”**

  * Om **"svar"** = **"rätt svar"** då:

    * Öka **"poäng"** med **1**

    * **fråga** (det här blocket skapade du tidigare)

  * Annars:

    * Tänk **”Hmm…”** i 2 sekunder

    * Skicka meddelandet **”starta nytt havsspel”**

Nu skall du ha en första fungerande version av spelet. Testa! Ökar poängen om du gissar på rätt hav? Nollställs poängen om du gissar fel?

2.	Lägg till **ny** kod **efter** att du ändrat poäng med **1**:

  *	**Repetera** 40 gånger:  Ändra **färg effekten** med 25

  * **Ta bort grafiska effekten**

Nu har du lagt till en liten färganimation som visas om du gissar rätt.

![image alt block](image_10.png)

_Det här är några av de block du behöver för punkterna ovan._

## Delmoment 4: Kontinenter

Nu skall du få utöka programmet med ett spel som går ut på att gissa kontinenter.

1.	Kopiera sprajten **Ball** och placera den i ett annat hörn. Du kan också välja en annan klädsel för den nya sprajten så att den ser annorlunda ut.

2.	Ändra i den nya sprajten **Ball2** så att den skickar meddelandet **”starta nytt kontinentspel”** i stället för **”starta nytt havsspel”** när den klickas på.

3.	Ändra också på andra stället så att den kör kod när den tar emot **”starta nytt kontinentspel”**.

4.	Ta bort insättningarna av **haven** i listan och sätt istället in dessa 6 **kontinenter**

  * Afrika

  * Eurasien

  * Nordamerika

  * Sydamerika

  * Australien

  * Antarktis

5.	Ändra så att den kör kod för att rätta spelet när den tar emot meddelandet **”rätta kontinent”** istället för **”rätta hav”**.

Nu skall bollen fungera. Vad händer om du klickar på den? Frågar den efter en kontinent?

![image alt block](image_11.png) **INTE** ![image alt block](image_12.png)

Nästa steg är att lägga till prickar för de olika kontinenterna.

6.	**Kopiera** en av **hav-prickarna**. Rita om klädseln så att den har en annan färg.

7.	Ändra **”rätta hav”** till **”rätta kontinent”** så att rätt meddelandet skickas

8.	**Kopiera** denna prick **5 gånger** och placera ut dem på de olika kontinenterna

9.	Ändra i skripten för de olika prickarna så att den lokala variabeln **”id”** sätts till rätt siffra.

## Färdig!
Grattis, nu har du gjort klart uppgiften.

**Glöm inte att spara ditt projekt!** Döp det gärna till uppgiftens namn så att du enkelt kan hitta den igen.

**Testa ditt projekt**  
  Visa gärna någon det som du har gjort och låt dem testa. Tryck på DELA för att andra ska kunna hitta spelet på Scratch. Gå ut till projektsidan och låt någon annan testa spelet!


## Utmaningar

**Det är väldigt många prickar på spelplanen**. Det vore bra om hav-prickarna försvinner när du gissar på kontinent och att kontinent-prickarna försvinner när du gissar på hav. Kan du fixa det?

**Lägg till ett nytt spel!** Du kan till exempel lägga till ett spel går ut på att gissa länder.

## Frågeställningar

* Vad är en lokal variabel?
* Varför kan det vara bara att skapa ett nytt block?  
