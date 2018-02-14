# Jakten på nyckeln PRO

I denna uppgift ska du få koda en mer avancerad version av spelet "Jakten på nyckeln". Den kommer att vara lite närmare hur ett riktigt platsbaserat spel fungerar. Dock så krävs det mer avancerad kod för att få det att fungera, och därför är denna uppgift bara lämplig om du är en mer van kodare. Du behöver till exempel kunna använda variabler och kloner.

Ett exempel på hur spelet kan se ut hittar du här: <a href="https://scratch.mit.edu/projects/172533037" target="_blank">https://scratch.mit.edu/projects/172533037</a>

![image alt text](image_0.png)

## 1 - Remixa ett projekt

Vi börjar med att remixa ett befintligt projekt.

1. Öppna din webbläsare och gå till

    <a href="https://scratch.mit.edu/projects/172763496/" target="_blank">https://scratch.mit.edu/projects/172763496/</a>

2. Klicka på knappen **"Se inuti"** så att du kan se koden.

    ![image alt text](image_1.png)

3. Klicka sedan på knappen **"Remix"**.

    ![image alt text](image_2.png)

4. Döp om projekt till något som passar bättre.

    ![image alt text](image_3.png)

I projektet har du nu fem sprajtar. Fyra av dessa bildar bakgrunden, den karta som spelet utspelar sig på. Hur dessa fungerar ska vi titta på strax. Du har också en sprajt som är en robot och som kan röra sig över scenen.

    ![image alt text](image_4.png)

*De fem sprajtarna i det remixade programmet*

> Testa programmet! Kan du förflytta roboten över scenen med hjälp av piltangenterna? Förflyttar sig scenen när du rör på roboten?

## 2 – Förstå koden

Det är bra om du förstår hur koden i det remixade programmet fungerar. På så sätt blir det enklare att förändra spelet efter dina önskemål. Du kanske vill utöka banan, eller använda dig av en egenritad bakgrund.

### Bakgrunden

En sprajt eller en bakgrund kan i Scratch maximalt vara 480 pixlar bred och 360 pixlar hög, eftersom det är storleken på scenen. Därför är det svårt att importera till exempel en jättestor karta som bakgrund. I detta spel har vi löst det genom att skapa fyra sprajter som är 480 x 360 pixlar var och lägga dem sida vid sida, som så här:

    ![image alt text](image_5.png)

I bilderna som finns i det remixade spelet har en smal vit linje ritats ut mellan bilderna för att göra detta extra tydligt. Denna går självklart att ta bort, men för tillfället får den vara kvar.

När vi sedan rör roboten över scenen kommer bilderna att flyttas med roboten. Ibland kanske en hel bakgrunds-sprajt visas på scenen, ibland visas delar av två och ibland visas delar av tre, osv, beroende vara roboten är.

För att få detta att fungera så behöver vi introducera ett nytt koordinatsystem. Roboten kommer att förflytta sig inom det vanliga koordinatsystemet på scenen, medan bakgrunden kommer att förflytta sig i sitt eget koordinatsystem som vi skapar med hjälp av variabler. I stället för att ange koordinaterna med x och y i detta koordinatsystem så anges dem med variablerna **"fokus x"** och **“fokus y”**.

    ![image alt text](image_6.png)

Nu tittar vi på koden för sprajten **upp_vänster**, den bakgrunds-sprajt som är längst upp till vänster. Den har ett enkelt skript som körs när den tar emot meddelandet **"flytta"**. Det enda skriptet gör är att flytta sprajten till en ny position på scenen som beror på variablerna **“fokus x”** och **“fokus y”**.

    ![image alt text](image_7.png)

Liknande kod finns för de andra tre bakgrunds-sprajterna. Deras kod går ut på att placera den sprajten korrekt beroende på variablerna **"fokus x"** och **“fokus y”**.

> Se om du kan förstå hur deras kod fungerar!

### Roboten

Sprajten **Robot** har lite mer kod, men mycket av den fungerar på samma sätt. Vi börjar med att titta på startskriptet.

    ![image alt text](image_8.png)

När spelet startar så sätts båda variablerna **"fokus x"** och **“fokus y”** till 0. Därefter så skickas meddelandet **“flytta”** som gör att alla bakgrund-sprajter placeras ut korrekt. Till sists så placeras roboten på ett lämpligt ställe på scenen.

Roboten har också fyra skript som startar när de fyra piltangenterna trycks ned. Vi tar och tittar på skriptet som körs när **uppåt-pilen** trycks ned.

    ![image alt text](image_9.png)

Det första som händer är helt enkelt att roboten förflyttas 10 steg längs y-axeln och studsar tillbaka om den nuddar kanten. Det är inte så konstigt. Men denna kod gör ju inte att bakgrunden flyttas med.

> Om du vill kan du dra bort OM-satsen från skriptet och ser hur spelet fungerar ut den.

Resten av koden är till för att förflytta bakgrunden. Först ändras variabeln **"fokus y"** och sedan skickas meddelandet **“flytta”** som får alla bakgrund-sprajter att förflyttas –10 steg. OM-satsen gör att roboten inte kan förflytta sig utanför den uppritade bakgrunden.

## 3 – Lägg till en nyckel

Efter en lång introduktion är det nu dags att börja remixa spelet! Nu ska du få  skapa målet för spelet: nycklar som roboten ska hitta.

1. Klicka på **"Välj sprajt från biblioteket"**

    ![image alt text](image_10.png)

2. Markera Nyckeln och klicka på **Ok**

3. Klicka på knappen **Förminska** och sedan några gånger på **Nyckeln** så att den blir mindre.

Nästa steg är att rita en nya klädsel för nyckeln. Den kommer att vara en tunn **ring** och ska fungera som **ledtråd** till nyckeln när Roboten kommer nära så att spelaren vet när den är på rätt väg. Ungefär så här kommer det se ut när du spelar:

    ![image alt text](image_11.png)

1. Markera **Nyckel** sprajten och klicka på fliken **Klädslar**.

2. Klicka på **Rita ny klädsel** ![image alt text](image_12.png)

3. Rita en **rund cirkel** i en **ljus färg** med hjälp av **Cirkelverktyget**

    ![image alt text](image_13.png)
    *Ungefär så här stor ska cirkeln vara*

4. **Döp** klädseln till **cirkel**. Du kan ändra namnet på en klädsel i den lilla textrutan ovanför alla ritverktyg.

    ![image alt text](image_14.png)

*Skriv in namnet på klädseln och tryck på Enter*

## 4 – Koda nyckeln

Nu är det äntligen dags att koda! Vi ska placera ut ett antal nycklar slumpmässigt på scenen och om **Roboten** kommer nära dem ska den få poäng.

1. Börja med att skapa en variabel som heter **"Antal nycklar"**. Den kan vara synlig på scenen.

2. Skapa ett skript för **Nyckeln** som säger

    1. När START klickas på

    2. Sätt **"Antal nycklar"** till 0

    3. Göm

    4. REPETERA **5** gånger

        1. Vänta 3 sekunder

        2. **Skapa klon** av mig själv

    ![image alt text](image_15.png)

Detta är **startskriptet** för nyckeln. Eftersom vi kommer att skapa nycklar med hjälp av KLONER kommer vi att gömma sprajten. Sedan placerar vid ut 5 KLONER på scenen med 3 sekunders mellanrum.

Nu ska vi koda vad som händer när klonerna startar.

* Börja med att skapa två variabler **"mitt x"** och **“mitt y”**. **OBS!** Dessa två variabler ska endast vara för **Nyckel**–sprajten. De ska inte visas på scenen.

    ![image alt text](image_16.png)

*Det är viktigt att du kryssar i "Enbart för denna sprajt"*

Detta kommer att vara klonens x- och y–koordinater i samma koordinatsystem som bakgrunden.

Skapa ett skript för nyckeln som säger

1. När meddelandet **"flytta"** tas emot

2. Gå till x: **"fokus x" – “min x”**,  y: **“fokus y” – “min y”**

    ![image alt text](image_17.png)

Detta skript kommer göra så att nyckeln placeras ut på bakgrunden.

>Jämför denna kod med koden för till exempel sprajten **upp_vänster**! Det är ungefär samma kod och har samma syfte.

Skapa ett till skript för nyckeln som säger

1. När jag **startar som klon**

2. Sätt **"mitt x"** till slumptal mellan –480 och 0

3. Sätt **"mitt y"** till slumptal mellan 0 och 360

4. För alltid

    1. OM avstånd till **Robot** är mindre än **50**

        1. Visa

        2. Byt klädsel till **cirkel**. Detta är den klädsel du ritade nyss.

        3. OM avstånd till Robot är mindre än 10

            1. Byt klädsel till **key**. Detta är nyckeln-klädseln.

            2. Ändra **"Antal nycklar"** med 1

            3. Vänta 1 sekund

            4. Radera klonen

    2. ANNARS

        4. Göm

    ![image alt text](image_18.png)

*Dessa kodblock behöver du för skriptet ovan*

Först kommer klonen att få slumpmässiga koordinater. Sedan så kollar vi om **Roboten** är i närheten av **Nyckeln**. Om den inte är i närheten gömmer vi sprajten och om den är i närheten visar vi den som en cirkel. Om den däremot är riktigt nära så visar vi nyckeln och tar bort klonen.

> Testa spelet! Hittar du fem nycklar? Visas ledtråden?

## Färdig!

Grattis, nu har du skapat ett nytt program!

Glöm inte att spara ditt projekt! Döp det gärna till uppgiftens namn så att du enkelt kan hitta den igen.

> **Testa ditt projekt**
> Visa gärna någon det som du har gjort och låt dem testa. Tryck på DELA för att andra ska kunna hitta spelet på Scratch. Gå ut till projektsidan och låt någon annan testa spelet!

## Utmaningar

Det färdiga spelet är bara en prototyp. Det finns många sätt du kan utveckla spelet att bli bättre. Var kreativ! Här är några förslag på vad du kan göra.

### Hinder

På bakgrunden var vi ritat ut blåa fält som ska föreställa vatten och bruna fält som ska föreställa hus. Nu kan roboten gå över dem. Gör så att något händer när roboten går på till exempel ett blått fält. Du kan använd dig av ett kodblock **"rör färgen … ?"** ![image alt text](image_19.png)

### Flera nycklar

För tillfället så skapas bara fem nycklar och när roboten har hittat alla så är spelet slut. Koda så att fler nycklar skapas. Det är bra om antalet nycklar på scenen begränsas så att inte den blir full av nycklar.

### Utökad bakgrund

Rita fler sprajter som kan användas som bakgrund. Se bara till att det är 480 x 360 pixlar stora.

Så här kan du göra:

* Klicka på **"Rita ny sprajt"**

* **Färga sprajten med grönt** genom att använda **Färgburken**

* Lägg till ett skript så att sprajten placeras korrekt när meddelandet **"flytta"** tas emot

* Ändra i **Robotens** skript som körs när piltangenterna trycks ned

* Ändra i **Nyckelns** skript så att de kan placeras ut på den utökade bakgrunden

## Frågeställningar

Vad är en koordinat?

Hur lång är x–axeln i Scratch?

Hur lång är y–axeln i Scratch?

Vilken koordinat har mitten på scenen?

Vad innebär det att Remixa ett projekt?

Varför behövs det nytt koordinatsystem för bakgrunden?

Vad används KLONER till?

Varför är det bra att använda KLONER i ställer för flera sprajter som ser likadana ut?
