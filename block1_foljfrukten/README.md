# Följ frukten

I denna uppgift ska du få leka med koordinater i Scratch. Koordinater behövs för att ange någon eller någots position. Du ska få animera en robot så att den rör sig runt på scenen och äter frukt. Roboten och frukterna kommer ha olika koordinater som anger deras position.

Ett exempel på hur det kan se ut hittar du här:

[https://scratch.mit.edu/projects/172523787/](https://scratch.mit.edu/projects/172523787/)

![image alt text](image_0.png)

## Delmoment 1 - Remixa ett projekt

Vi börjar med att remixa projekt som redan finns på Scratch. Detta gör att det blir enklare att komma igång. Dessutom får du två sprajtar och lite kod på köpet. Smart va?!

Öppna din webbläsare och gå till

[https://scratch.mit.edu/projects/172763192/](https://scratch.mit.edu/projects/172763192/)

Klicka på knappen **"Se inuti"** så att du kan se koden.

![image alt text](image_1.png)

*Projektsidan som visas när du följer länken ovan*

Klicka sedan på knappen **"Remix"** så att du får din egen version av projektet.

![image alt text](image_2.png)*Remix-knappen markerad*

När du har remixat programmet så ser du att projektets namn har förändrats. Om du tittar under namnet ska du också se ditt eget användarnamn. Du kan döpa om projekt till något som passar bättre.

![image alt text](image_3.png)

*Namnet på projektet har fått ordet "remix" på slutet*

I projektet har du nu två sprajter: ![image alt text](image_4.png)

1. En robot-sprajt som är din spelare

2. Koordinataxlar som visar x- och y-axeln.

Innan vi börjar koda ska vi först titta lite närmare på våra två sprajter och koordinatsystemet i Scratch. Varje Sprajt har en specifik position i koordinatsystemet som anges med två siffror. En som anger positionen i höger–vänster riktning och en som anger positionen i upp–ner riktning. Positionen i höger–vänster riktning kallas x–värdet och positionen i upp–ner riktning kallas y-värdet. X– och y–värdena anges på två axlar: x–axeln och y–axeln. X–axeln går mellan –240 och 240, medan y–axeln går mellan –180 och 180.

![image alt text](image_5.png)*Så här ser en markerad sprajt ut*

Om du markerar sprajten **Koordinater** så får du upp koden för denna sprajt. Det är en enkel kod som helt enkelt placerar sprajten på rätt ställe på scenen.

Om du klickar på fliken **Klädslar** kan du se att det finns koordinatsystemet uppritat på olika sätt.

![image alt text](image_6.png)

*De olika sätten att rita koordinatsystemet*

Om du klickar på klädseln **"mitten_svart"** så får du upp ett sätt att visa koordinatsystemet som du kanske känner igen bättre. I detta koordinatsystem korsar x– och y–axeln med varandra.

![image alt text](image_7.png)

Det är dock lika rätt att visa koordinatsystemet som det gjordes när du remixade projektet. Klicka på klädseln **"uppe_svart"**. I detta koordinatsystem visas x–axeln överst på scenen och y–axeln till vänster i scenen. På så sätt så skyms inte så mycket av spelet av koordinatsystemet, så vi kommer använda oss av det i denna övning. Om du känner dig säkrare med “korset” så klicka på klädseln **“mitten_svart”**.

> Nu ska vi kolla så att placeringen av koordinatsystemet fungerar!

![image alt text](image_8.png)

*När du har musen vid –50 på x-axeln så visas koordinaterna i nedre-högra hörnet*

* Flytta musen så att den är vid siffran **–50** på **x-axeln**.

* Om du tittar i högra hörnet under scenen så visar Scratch koordinaterna för musen. Stämmer den siffran överens med siffran på den utritade x-axeln?

* Flytta nu musen till **50** på **y-axeln**. Visas rätt koordinater under scenen?

Klicka nu på sprajten **Robot** så att den blir markerad. Koordinaten för en sprajt visas i övre högra hörnet i skriptytan. Vilka koordinater har sprajten?

![image alt text](image_9.png)

* Flytta omkring **Robot-sprajten** på scenen och se hur koordinaterna ändrar sig

* Placera **Robot**-sprajten ungefär vid **x: 0, y:0**. Denna punkt kallas *origo*, och är mitt på scenen.

## Delmoment 2 - Bakgrund och frukter

Du ska få börja med att ladda en bakgrundsbild för spelet.

![image alt text](image_10.png)

* Klicka på fliken** Bakgrunder**

* Klicka på **Färgburken** och färglägg bakgrunden med en grön färg.

![image alt text](image_11.png)

*Färgburken är markerad i bilden*

Nu ska vi placera ut några frukter på scenen!

![image alt text](image_12.png)

1. Klicka på "Välj sprajt från biblioteket"

2. Markera **Äpplet** och klicka på **Ok**

3. Placera **Äpplet** i övre vänstra hörnet på scenen.

Nu får själv lägga till tre sprajter och placera ut dem på scenen. Här har vi valt att lägga ut **Bananer**, **Apelsin** och **Vattenmelon**.

Det kan se ut så här:

![image alt text](image_13.png)

## Delmoment 3 - Animera roboten

Nu ska vi animera roboten så att den rör sig mellan de olika frukterna: först till äpplet, sedan till bananerna, sedan till vattenmelonen och till sist till apelsinen.

1. Börja med att markera **Robot** sprajten:

![image alt text](image_14.png)

*När en sprajt är markerad ser du ett blå ruta runt den sprajten*

2. Sedan ska vi skapa ett skript för roboten. Börja med att dra in ett kodblock som heter **"När denna sprajt klickas på"** till skriptytan.

![image alt text](image_15.png)

3. Under detta block fäster du ett kodblock **"Gå till x: y:"**

![image alt text](image_16.png)

4. I stället för koordinaterna som står i kodblocket skriver du vilka koordinater **du tror att äpplet har**. Använd det utritade koordinatsystemet som hjälp. Det kan se ut se här.

![image alt text](image_17.png)

5. Dra in sedan ett kodblock **"Vänta 1 sekund"** och fäst det underst i skriptet.

![image alt text](image_18.png)

6. Nu drar du in ett till **"gå till x: y:"** och anger koordinaterna för bananerna. Och sedan ett **“vänta”**-block.

7. Fortsätt så tills du har animerat **Roboten** att gå runt till alla frukterna.

> Testa programmet! Går Roboten runt till alla frukterna?

Vi ska göra programmet lite bättre, så att roboten kommer tillbaka till mitten när spelet startar. Detta kallas ett *startskript*. Skapa följande skript för **Roboten**

1. När START klickas på

2. Gå till x:0 y:0

3. Lägg överst

![image alt text](image_19.png)

*Detta är robotens startskript*

## Färdig!

Grattis, nu har du skapat ett nytt program!

Glöm inte att spara ditt projekt! Kom ihåg att ge spelet ett bra namn.

## Utmaningar

### Frukterna äts upp

Du kan göra så att frukterna försvinner när roboten besöker dem. För varje skript behöver du skapa följande skript

1. När START klickas på

2. Visa

3. För alltid

    1. OM rör vid **Robot**

        1. Göm

Kan du pussla ihop detta skript från dessa kodblock ?

![image alt text](image_20.png)

> **Tips!** Du kan kopiera kod mellan sprajter genom att dra ett skript till en sprajt.

![image alt text](image_21.png)

### Snitslad bana

Du kan rita en bana på bakgrunden som roboten måste röra sig innanför. På detta sätt blir det viktigare att ange exakta koordinater där **Roboten** ska röra sig. Det kan se ut så här

![image alt text](image_22.png)

Skapa ett skript för **Roboten** som säger

1. När START klickas på

2. För alltid

    1. OM rör **grön** färg

        1. Stoppa alla

Dessa kodblock behöver du:

![image alt text](image_23.png)

## Frågeställningar

Vad är en koordinat?

Hur lång är x–axeln i Scratch?

Hur lång är y–axeln i Scratch?

Vilken koordinat har mitten på scenen?

Vad innebär det att Remixa ett projekt?

Vad är ett startskript? Varför är det bra att använda det?
