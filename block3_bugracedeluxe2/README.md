# Bug race deluxe - del 2

Detta är fortsättning på uppgifterna **Bug race** och **Bug race deluxe – del 1**. Du måste ha gjort båda dessa för att kunna göra denna övning. I del 2 kommer du få koda så att skalbaggen kan åka olika fort, du kommer lägga in hinder för den och du kommer skapa flera banor.

Ett exempel på hur det kan se ut hittar du här: <a href="https://scratch.mit.edu/projects/197016490" target="_blank">https://scratch.mit.edu/projects/197016490</a>

![image alt text](image_0.png)

## 1 – Fart

Vi vill att farten ska ändras när skalbaggen äter mat så att det blir svårare ju fler liv du får.

1. Skapa en variabel som heter **Fart**

2. Visa inte variabeln på spelplanen genom att klicka bort krysset under kategorin **Data**

    ![image alt text](image_1.png)

3. Ändra på koden för sprajten **Skalbaggen**

    1. Sätt **Fart** till 2 när meddelandet **"starta"** tas emot. *Du kan ändra på skriptet du redan har kodat.*

    ![image alt text](image_2.png)

    2. Ändra i "**För alltid**"-loopen så att skalbaggen går “**Fart”** steg i stället för det antalet steg den går nu

    ![image alt text](image_3.png)

4. Ändra på koden för sprajten som är **Mat**

5. Ändra **Fart** med 0.5 eller 1 när **sprajten** rör **skalbaggen**

    ![image alt text](image_4.png)

> Testa! Går det för fort eller för långsamt? I så fall kan du ändra hur mycket **Fart** är i början av spelet och hur mycket det ändras när skalbaggen äter mat.

## 2 – Hinder

Nu ska du göra det ännu svårare för Skalbaggen genom att koda hinder som dyker upp på banan. Mycket att koden kommer vara samma som för sprajten som är **mat** – därför kommer du börja med att kopiera denna sprajt.

1. Kopiera sprajten som är **mat**, t.ex. äpplet

    ![image alt text](image_5.png)

2. Markera den nya sprajten och klicka på i:et i övre-vänstra hörnet ![image alt text](image_6.png)

3. Döp om sprajten till **Hinder**

    ![image alt text](image_7.png)

4. Kryssa i rutan **Visa** så du tillfälligt visar sprajten på spelplanen

5. Gå till fliken **Klädsel**

    1. Lägg till en ny klädsel från bibliotek

    ![image alt text](image_8.png)

    2. Du kan till exempel välja en **sten**

    ![image alt text](image_9.png)

6. Förminska sprajten om den är för stor  

Nu behöver du ändra koden så att den nya sprajten beter sig mer som ett hinder än mat.

1. Ändra koden som körs när sprajten **Hinder** rör vid sprajten **Skalbagge**

    * Ändra **Liv** med **-1**

    * **Skicka** meddelandet **"game over?"** och **vänta**

    * **Skicka** meddelandet **"starta"**

    * **Radera** klonen

    ![image alt text](image_10.png)

> Testa! Kommer stenarna upp för ofta eller stannar de kvar för länge? Ändra på koden som placerar ut kloner och tar bort dem.

## 3 – Skott

För att skalbaggen ska ha en chans att klara sig runt banan ska du få koda skott som skalbaggen kan använda sig av för att skjuta bort stenarna.

1. Rita en ny sprajt

    1. Den ska vara ungefär 10x10 pixlar stor, använd förstoringsglaset

    2. Färglägg den med en trevlig färg. *Obs! Inte samma färger som du redan har på banan, gräset eller mållinjen.*

    ![image alt text](image_11.png)

2. Skapa en ny variabel som heter **"Antal skott"**

3. Visa inte **"Antal skott"** på spelplanen


Nu behöver du skapa ett skript för skottet som gör att det:

* Avfyras när du trycker på mellanslag

* Försvinner när den rör kanten

* Bara kan avfyras 3 skott åt gången på scenen, för annars kan du fylla hela scenen med skott!


1. Skapa ett skript för sprajten **Skottet** som säger

    * När **START** klickas på

    * Göm

    * Sätt **Antal skott** till 0

    ![image alt text](image_12.png)

2. Skapa ett andra skript för sprajten **Skottet** som säger

    * När **mellanslag trycks ned**

    * OM **"Antal skott"** är **mindre än 5**

        * Ändra **"Antal skott"** med 1

        * **Skapa klon** av mig själv

    ![image alt text](image_13.png)

Nu har du skript som gör att maximalt 4 skott avfyras när du trycker ner mellanslag. Nu ska du koda så att skottet visas och försvinner när den når till kanten.

1. Skapa ett nytt skript för **Skottet** som säger

    * När jag startar som klon

    * Gå till x: **x-läge av Skalbagge** y: **y-läge av Skalbagge**

    * Peka i riktning av **Skalbagge**

    * Visa

    * **Repetera** tills **rör kanten:**

        * **Gå 5** steg

    * Ändra "**Antal skott"** med **-1**

    * **Radera** klonen

    ![image alt text](image_14.png)

2. Ändra koden för sprajten **Hinder** så att den försvinner om den rör sprajten **Skott**

    ![image alt text](image_15.png)

## 4 – Flera banor

Nu finns det bara en bana som skalbaggen kan åka på, men det ska du ändra på nu!

1. Klicka på **Rita ny bakgrund**

    ![image alt text](image_16.png)

2. Rita en ny bana

    1. Banorna ska ha samma färg på banan, t.ex. Grå

    2. Banorna ska ha samma färg på gräset, t.ex. Grönt

    3. Banorna ska börja på ungefär samma ställe

> Tips! För att få exakt samma färger på båda banorna kan du använda dig av verktyget **Välj färg**

> ![image alt text](image_17.png)

Den nya banan kan se ut till exempel så här:

![image alt text](image_18.png)

1. Lägg ett block som byter bakgrund till den första när **START** klickas på

    ![image alt text](image_19.png)

När ska skalbaggen komma till den nya banan? Ja, det är upp till dig. Här är två förslag:

**När du gjort några varv av en bana**

1. Ändra på OM-blocket som körs när skalbaggen nuddar mållinjen.

2. Lägg in dessa block precis innan du skickar meddelandet **"starta"**

    * Skicka meddelandet **"Byt bakgrund"** OM **“Varv”** är lika med 3

    ![image alt text](image_20.png)

3. Markera bakgrunden

4. Skapa detta skript för bakgrunden

    * När jag **tar emot "Byt bana"**

    * Nästa bakgrund

    * Sätt **"Varv"** till **0**

    ![image alt text](image_21.png)

**Varje gång du kommer i mål**

1. Ändra på OM-blocket som körs när skalbaggen nuddar mållinjen.

2. Lägg in ett block **skicka "byt bana"** innan du skickar meddelandet **“starta”**

    ![image alt text](image_22.png)

3. Markera bakgrunden

4. Skapa detta skript för bakgrunden

    * När jag **tar emot "Byt bana"**

    * Nästa bakgrund

    ![image alt text](image_23.png)

## Färdig!

Grattis, nu har du skapat ett nytt spel!

**Glöm inte att spara ditt projekt!** Döp det gärna till uppgiftens namn så att du enkelt kan hitta den igen.

> **Testa ditt projekt**

> Visa gärna någon det som du har gjort och låt dem testa. Tryck på DELA för att andra ska kunna hitta spelet på Scratch. Gå ut till projektsidan och låt någon annan testa spelet!

## Utmaningar

**Andra typer av hinder**

Hindren som du har kodat nu står till på banan och du kan ganska enkelt skjuta ner dem. Försök koda ett annat typ av hinder. Till exempel

* Ett hinder som du behöver skjuta på flera gånger

* Ett rörligt hinder som rör sig över banan

**Möjligt att köra på gräset**

Gör det möjligt för skalbaggen att åka på gräset. I stället för att starta om från början så kan till exempel hastigheten minska. Detta gör att det blir enklare att undvika svåra hinder.

**Andra typer av underlag**

Nu finns det två typer av underlag: bana och gräs. Rita och koda ett till underlag, till exempel grus. Vad som ska hända om skalbaggen kommer på detta underlag får du bestämma.

**Flera spelare**

Har du fortfarande bara en spelare? Koda en till sprajt som en kompis kan styra. Här är några tips:

* Du måste ha en variabel **"Fart2"** för den andra spelaren

* Du måste koda en sprajt **Skott** för den andra spelaren

* Du måste se till att sprajten **Hinder** känner av skott från den andra spelaren

* Du måste bestämma regler för när den nya banan ska visas

## Frågeställningar

* Vad är fördelen med att koda ett stort program i flera steg där varje steg är ett färdigt program?

* Vad är fördelen med att testa sin kod ofta?

* I uppgiften kopierade du sprajten **Mat** för att skapa sprajten **Hinder** *i stället för att koda en helt ny sprajt*. Vad är fördelar och nackdelar med detta?
