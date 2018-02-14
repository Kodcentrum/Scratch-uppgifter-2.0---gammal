# Bug race deluxe – del 1

I denna uppgift får du chansen att jobba vidare med spelet **Bug Race**. Du kommer få lägga till funktioner som omstart, flera liv och mat. Och du kommer få jobba med meddelanden, variabler och kloner.

Ett exempel på hur det kan se ut hittar du här: <a href="https://scratch.mit.edu/projects/196756892/" target="_blank">https://scratch.mit.edu/projects/196756892/</a>

![image alt text](image_0.png)

## 1 – Förberedelser

För att kunna jobba med denna uppgift måste du ha skapat ett färdigt spel **Bug race** som har några olika funktioner.

**Har du kodat Bug race?**

Om du *inte* är klar med Bug race får du börja med att göra klart det. Du hittar uppgiften [här](https://www.kodboken.se/start/kom-igang/uppgifter-i-scratch/bug-race-intro) eller i menyn till höger.

**Finns det en mållinje i spelet?**

Om du *inte* har ritat till en mållinje och kodat vad som händer när skalbaggen kommer dit är det bra om du gör det. Du hittar uppgiften [här](https://www.kodboken.se/start/kom-igang/uppgifter-i-scratch/bug-race-tillagg?chpt=1).  
    ![image alt text](image_1.png)

**Finns det två spelare som tävlar mot varandra?**

Det är okej om denna funktion är med. Men instruktionerna i denna uppgift är bara för ena spelaren. Men du kan självklart koda den andra spelaren själv.

![image alt text](image_2.png)

> Nu är det dags att koda vidare på spelet!

## 2 – Omstart

Du ska koda så att skalbaggen inte dör om den nuddar gräset. I stället ska skalbaggen börja om från början. Det ska vi fixa med meddelanden.

1. Markera sprajten **Skalbagge**

2. Under *Händelser* hittar du ett block som heter **"när jag tar emot..."** – dra in det till kodytan.

3. Klicka på den lilla pilen bredvid **meddelande1** och välj **"nytt meddelande..."**

    ![image alt text](image_3.png)

4. Kalla det nya meddelande **"starta"**

5. Flytta blocken som ligger under "**När** start **klickas på**" till under "**När** jag tar emot **starta"**

    ![image alt text](image_4.png)

6. Lägg ett block **"skicka start**" under “När **start** klickas på”

    ![image alt text](image_5.png)

Nu fungerar programmet precis som förut, men vi vill ju att skalbaggen ska starta om när vi rör gräset.

1. Ta bort blocken som ligger i "**OM rör färgen grön**"-blocket

2. Lägg in ett block **"skicka start"** där istället.

    ![image alt text](image_6.png)

> Testa! Startar skalbaggen om från början när den rör gräset?

## 3 – Flera varv och en varvräknare

Visst är det tråkigt att spelet tar slut när du kommit runt ett varv? Nu ska du koda så att skalbaggen kan åka flera varv.

1. Under *Data* klicka på **"Skapa en ny variabel"**

2. Döp variabeln till **"Varv"**

    ![image alt text](image_7.png)

1. Ändra på koden för sprajten **Skalbagge**

    * Under "När **start** klickas på" dra in ett block “**Sätt Varv** till **0**”

    ![image alt text](image_8.png)

    * Ta bort koden som ligger i **"OM rör** mållinjen"-blocket

2. Skapa följande skript i stället när skalbaggen rör mållinjen

    * Säg **"Mål"** i **2 sekunder**

    * Öka variabel **"Varv"** med 1

    * Skicka meddelandet **"start"**

![image alt text](image_9.png)

> Testa! Vad händer om du går i mål?

## 4 – Flera liv

Nu ska du få koda en till variabel som håller reda på hur många liv skalbaggen har. Den kommer minska om skalbaggen åker ut i gräset.

1. Lägg till en variabel som heter "**Liv**"

2. Sätt **Liv** till 4 när spelet startar

    ![image alt text](image_10.png)

3. Lägg in följande kod när skalbaggen nuddar gräset, *innan meddelandet* **starta** *skickas*

    * **Ändra** **Liv** med **-1**

    * Skicka meddelandet **"Game over?"** och **vänta**

    ![image alt text](image_11.png)

4. Skapa ett nytt skript för **Skalbaggen** som säger

    * När jag tar emot meddelandet **"Game over?"**

    * OM **"Liv" < 1**

        * Säg **"Game over"** i **2 sekunder**

        * Stoppa alla

        ![image alt text](image_12.png)

    > Tecknet **"<"** är en **operator** som betyder **"mindre än"**. Alltså kommer spelet bara ta slut OM "Liv" är **mindre än 1**, det vill säga 0.

> Test igen! Vad händer om du åker ut i gräset 4 gånger?

## 5 – Mat

Det är tråkigt att bara förlora liv och till sist kommer skalbaggen dö. Därför ska du få koda en ny sprajt som föreställer mat till skalbaggen och som den kan äta för att öka antalet liv den har.

1. Skapa en ny sprajt som ska bli mat åt Skalbaggen. *Här har jag använt mig av ett äpple, men du kan välja vad du vill!*

    ![image alt text](image_13.png)

2. Placera den nya spratejn utanför banan

3. Skapa ett skript för **Äpplet** som säger

    * När **start** klickas på

    * Dölj

    * Gå tillbaka 1 lager

    * För alltid:

        * **Vänta** 3 sekunder

        * **Skapa klon** av mig själv

    ![image alt text](image_14.png)

Detta skript kommer skapa en ny klon av sprajten var tredje sekund. En klon är som en kopia av en sprajt som beter sig precis på samma sätt som alla andra kloner. Om du tycker det skapas äpplen för ofta kan du ändra på **vänta**-blocket.

> Testa spelet! Kommer det några äpplen på banan?

> Nej, det ska du få koda nu.

1. Skapa ett nytt skript för **Äpplet** som säger

    * När jag **startar som klon**

    * **Repetera** tills **rör färgen grå** (*färgen på banan*):

        * **Gå** till **x**: **slumptal** mellan **-240 och 240** **y**: **slumptal** mellan **-160 och 160**

    * Visa

    * För alltid:

        * OM **rör skalbaggen**:

            * Ändra **"Liv"** med **1**

            * **Radera** klonen

    ![image alt text](image_15.png)

Den första loopen kommer placera klonen på en slumpmässig plats på banan. Och för alltid loopen ser till att äpplet försvinner om skalbaggen nuddar den.

> Testa! Kommer det några äpplen på banan nu?

Det kommer ganska många äpplen faktiskt, och om inte skalbaggen hinner äta upp alla kommer hela banan vara fylld med mat.  

1. Skapa ett tredje skript för **Äpplet** som säger

    * När **startar som klon**

    * **Vänta** 10 sekunder

    * **Radera** klonen

    ![image alt text](image_16.png)

##  Färdig!

Grattis, nu har du skapat ett nytt spel!

**Glöm inte att spara ditt projekt!** Döp det gärna till uppgiftens namn så att du enkelt kan hitta den igen.

> **Testa ditt projekt**

> Visa gärna någon det som du har gjort och låt dem testa. Tryck på DELA för att andra ska kunna hitta spelet på Scratch. Gå ut till projektsidan och låt någon annan testa spelet!

## Utmaningar

**Klocka**

Koda en klocka som håller reda på hur länge du har spelet. Skapa en **variabel** som heter **Tid** och som ökar med 1 varje sekund.

**Spelets slut**

Just nu avslutas aldrig spelet och du kan fortsätta spela det så länge du vill och inte dör. Koda ett spelavslut, t.ex.

1. Du vinner när du klarat av 10 varv

2. Du vinner när du kommit upp i 20 liv

3. Du vinner när du spelat i 2 minuter

**Flera spelare**

Nu är det bara en spelare som du har kodat alla nya funktioner för. Koda en till sprajt som en kompis kan styra. Här är några tips:

1. Du måste ha en variabel **"Liv"** och **“Varv”** för varje spelare

2. Du måste skicka ett meddelandet **Start2** för den andra spelaren

3. Sprajten **Äpplet** måste känna igen om den rör båda spelarna

## Frågeställningar

* Vad är en variabel?

* Vad kan du använda ett slumptal till?

* Vad är en klon?

* Varför kan det vara bra att skapa kloner i stället för att bara kopiera en sprajt flera gånger?

* Vad kan du använda ett meddelande till?
