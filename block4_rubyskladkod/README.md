# Rubys klädkod

Tycker du det är jobbigt att välja kläder på morgonen? Skulle du vilja att det fanns ett program som valde kläder åt dig efter några enkla regler? Om det till exempel var fredag så skulle programmet välja ut randiga kläder; eller om det var soligt skulle programmet välja shorts. I den här uppgiften ska du få skapa en prototyp till precis ett sådant program! Du ska få koda ett program som hjälper flickan Ruby att välja kläder.

*Denna uppgift är en variant på uppgiften <a href="http://www.helloruby.com/play/8" target="_blank">Dresscode</a> från boken Hello Ruby av Linda Liukas. Du kan använda <a href="http://www.kodboken.se/start/lana-bild-ljud/hej-ruby" target="_blank">Lindas bilder och läsa mer om boken här.</a>*

Ett exempel på hur programmet kan se ut hittar du här:  <a href="https://scratch.mit.edu/projects/117618751/" target="_blank">https://scratch.mit.edu/projects/117618751</a>

men tänk på att du kommer göra ett program som kanske ser helt annorlunda ut.

![image alt exempel](image_1.png)

## 1: Ladda ner bilder


Innan du bestämmer reglerna behöver du ladda ner **”Ruby med klädslar”** från <a href="http://www.kodboken.se/" target="_blank">kodboken.se</a>. Det är en mapp med olika bilder på Ruby, där hon har olika klädslar, som du kan spara på din dator och sedan välja bilder ur.

  1. Gå till <a href="http://www.kodboken.se/start/lana-bild-ljud/hej-ruby" target="_blank">Låna bild och ljud / Hej Ruby</a>

  2. Högerklicka på Ruby och spara filen **ruby-clothes-360.zip** till din dator.

  <a href="http://www.kodboken.se/media/584133/ruby-clothes-360.zip">![image alt exempel](ruby-helkropp.png)</a> _Bilden du ska högerklicka på._

  3. Öppna upp zip-filen på din dator så att du kan titta på de olika bilderna.

## 2: Bestämma regler

Det första du behöver göra är att komma på de regler som avgör vilka kläder Ruby ska ha på sig. Det är främst vilken veckodag som ska avgöra vad Ruby ska ha på sig. Det är din fantasi som styr och det är helt upp till dig vilka regler som ska gälla.

**Obs!** _Tänk på att kläderna som finns i dina regler också måste finnas tillgängliga som bilder._

Ett förslag är följande:

1.	På måndagar klär sig Ruby i röda eller gröna kläder

2.	På tisdagar klär sig Ruby i kläder med röda prickar

3.	På fredagar klär sig Ruby i kläder som INTE är svarta

4.	På helgen klär sig Ruby i valfria kläder

Du kan också tänka på **olika aktiviteter** som Ruby kan ha för sig som t.ex. lyssna på musik. Vad ska Ruby ha för kläder eller saker ska Ruby ha på sig då?

Du kan också tänka på vad det är för **väder** och om Ruby ska vara **inomhus eller utomhus**. Vad ska Ruby ha på sig om hon ska gå ut och det regnar?

**Tips:** Om du tycker det är svårt att komma på regler kan du utgå ifrån vad du själv brukar ha på dig på olika dagar eller när du gör roliga saker.

## 3: Bakgrund och en sprajt

Vi börjar med en bakgrund och en sprajt för Ruby!

1.	Skapa ett nytt projekt och ta bort katten.

2.	Välj en bakgrund till från biblioteket som passar som ett rum. Förslag är **bedroom1** och **bedroom2**, men du kanske tycker att Ruby ska bo på ett slott!

   ![image alt exempel](image_2.png)

3.	Välj en ny sprajt genom att **ladda upp en bild från din dator**. Välj bilden där **Ruby är i underkläderna**.

    ![image alt exempel](image_3.png)
    _Bilden med Ruby i underkläder_

4.	Sätt **namnet** på sprajten till **Ruby**. Placera den på ett lämpligt ställe i rummet.

5.  Du kan förminska sprajten lite om du tycker den är för stor.

6.	**Lägg till flera klädslar** till sprajten genom att ladda upp bilder från din dator. Välj de kläder och utseende på Ruby som behövs för de reglerna du satte upp i 2.

    ![image alt exempel](image_4.png)

7.	Skapa ett skript för **Ruby** som säger:

  *	Startar när START klickas på

  * **Byt klädsel** till **"RUBY_underware"**

  * **Säg** *”Hej mitt namn är Ruby! Jag måste välja kläder. Kan du hjälpa mig?"*

  ![image alt block](image_5.png)

## 4: Acceptera uppdraget

När programmet startar ska Ruby fråga användaren om den vill hjälpa till med att välja kläder. Användaren ska sedan acceptera uppdraget genom att klicka på en knapp.

1.	**Lägg till en sprajt** från biblioteket, till exempel **”Button1”**.

2.	Placera sprajten någonstans i rummet.

3.	Gå till fliken för KLÄDSLAR och använd **textverktyget** för att skriva **”JA”** på knappen.

    ![image alt block](image_6.png)

4.	Skapa ett skript för **knappen** som säger

  * Startar när START klickas på

  * **Visa** sprajten

5.	Skapa ett andra skript för sprajten som säger

  * Startar när denna sprajt klickas på

  * Skicka **meddelandet ”byt klädsel”**

  * **Göm** sprajten

  ![image alt block](image_7.png)

## 5: Välja dag

Många av de reglerna som du skapade i 2 är beroende på vilken dag det är. Nu ska du få koda vilken veckodag det är. Det finns flera möjliga sätt att göra det på och du får själv välja vilken du tycker är bäst.

1.	Fråga användaren vad det är för dag

2.	Slumpa fram en dag

3.	Gör en liten enkel kalender

Här får du hjälp hur du kan göra alternativ 1 och 2. Alternativ 3 är lite svårare och du hittar instruktioner under utmaningar i slutet på uppgiften.

![image alt block](image_25.png)

_Så här kommer veckodagen visas på skärmen om du väljer att göra alternativ 1 eller 2._

### Fråga användaren:

1.	Skapa en **variabel** som heter **”Idag är det: ”**. Den kan visas på skärmen.

2.	Skapa ett skript för **Ruby** som säger:

  * När den tar emot meddelandet **”byt klädsel”**

  * **Fråga** _”Vad är det för dag?”_ och vänta

  * **Sätt ”Idag är det: ”** till **”svar”**

  ![image alt block](image_8.png)

  _Block du behöver för punkt 2._

### Slumpa fram en dag:

1.	Skapa en **variabel** som heter **”veckodag”**. Den ska inte visas på skärmen.

2.	Skapa en **variabel** som heter **”Idag är det: ”**. Den kan visas på skärmen.

3.	Skapa ett skript för **Ruby** som säger:

  * När den tar emot meddelandet **”byt klädsel”**

  * **Sätt ”veckodag”** till ett **slumptal mellan 1 och 7**

  * **Sätt ”Idag är det: ”** till **”Måndag"** OM **”veckodag”** är 1

  * Sätt **”Idag är det: ”** till **"Tisdag"** OM **”veckodag”** är 2

  * Sätt **”Idag är det: ”** till **"Onsdag"** OM **”veckodag”** är 3

  * Sätt **”Idag är det: ”** till **"Torsdag"** OM **”veckodag”** är 4

  * Sätt **”Idag är det: ”** till **"Fredag"** OM **”veckodag”** är 5

  * Sätt **”Idag är det: ”** till **"Lördag""** OM **”veckodag”** är 6

  * Sätt **”Idag är det: ”** till **"Söndag"** OM **”veckodag”** är 7

  ![image alt block](image_9.png)

  _Block du behöver för punkt 3. Tänk på att du behöver använda vissa block mer än en gång!_

> Testa programmet! Vad händer om du trycker på Ja-knappen? Visas veckodagen på skärmen?


## 6: Byta kläder på Ruby

Nu är det dags att IMPLEMENTERA dina regler från för Ruby. IMPLEMENTERA innebär att du kodar en strategi eller logik som du har bestämt innan. I det här fallet handlar det om logiken eller reglerna för vad kläder Ruby ska ha på sig.

1.	**Fortsätt på skriptet** du gjorde ovan som startar när sprajten tar emot meddelandet **”byt klädsel”**.

2.	Använd ett **OM-block** och variabeln **”Idag är det: ”** för att utföra ett klädbyte

  ![image alt block](image_10.png)

  _Det är sådana här kodblock du behöver skapa för att utföra de olika klädbytena._

3. Innuti **OM**-blocket lägger du in ett **byt klädsel til..."**-block för att byta klädsel. Du kan också lägga in andra block om du vill att något annat ska hända.

  ![image alt block](image_21.png)

  _Så här kan koden se ut_

4.	**Repetera** med fler OM-block tills du har lagt in alla regler

  ![image alt block](image_26.png)

  _Flera OM-block behövs för att implementera alla regler._

5.	Efter du har kodat alla OM-block så **säg** _”Tack! Nu kan jag börja leka.”_

## 7: Välja mellan två kläder

Om du vill låta användaren välja mellan två slumpmässigt valda klädslar kan du följa detta exempel.

Det går ut på att:

1. Välj ut två slumpmässiga klädslar

2. Visa dessa två klädslar

3. Låta användaren välja mellan de två klädslarna genom att klicka på en av två knappar.

Det kan se ut så här:

  ![image alt block](image_22.png)

Vi börjar med att lägga till två knappar som det står ”1” och ”2” på. De ska vara gömda när programmet startar och visas först när meddelandet **"välj kläder"** skickas.

1.	**Lägg till** en sprajt från biblioteket. Ett exempel är **”Ball”**.

2.	Sätt **namnet** på sprajten till **Val1**

3.	Skapa ett skript för **Val1** som säger:

  * När START klickas på

  * **Göm** sprajten

4.	Skapa ett till skript för **Val1** som säger:

  * När jag **tar emot** meddelandet **”välj kläder”**

  * **Visa** sprajten

  ![image alt block](image_12.png)

  _Så är ska koden för **Val1** se ut._

5.	**Kopiera** nu sprajten så du har två knappar. Kalla den nya sprajten **Val2**.

6.	Ändra klädseln på sprajten så att den har en annan färg.

7.	Använd **textverktyget** och **skriv ”1”** på **Val1** och **”2”** på **Val2**.

   ![image alt block](image_13.png)

   _Så här kan knapparna se ut_

Nu är det dags att skapa kod för **Ruby**. För ska du koda så att två slumpmässiga klädslar väljs och visas.

1.	**Skicka** meddelandet **”välj kläder”** OM [det är helg]. Här får du själv välja när du meddelandet ska skickas och när två kläder ska slumpas fram.

  ![image alt block](image_23.png)

  _Så här kan koden se ut som skickar meddelandet **"välj kläder"**_

2.	Skapa två **variabler** som heter **”val1”** och **”val2”** och som inte ska synas. Dessa kommer användas för att hålla reda på de två slumpmässigt valda klädslarna.

3.	Skapa ett skript för **Ruby** som säger

  * När jag tar emot **”välj kläder”**

  * **Sätt ”val1”** till ett **slumptal mellan 2 och 9**. Byt ut **9** mot det antal klädslar du lade till sprajten.

  * Sätt **”val2”** till **”val1”**

  * REPETERA tills **”val1”** INTE ÄR LIKA **”val2”**: Sätt **”val2”** till ett **slumptal mellan 2 och 9**.

  * **Säg** *”Ska jag ha den här…?”*

  * **Byt** klädsel till **”val1”**

  * **Vänta** 4 sekunder

  * **Säg** *”… eller den här?”*

  * **Byt** klädsel till **”val2”**

  ![image alt block](image_11.png)

  **"repetera tills"**-loopen behöver du ha så att inte två likadana klädslar väljs. Tyvärr gör det koden lite svårare att läsa.

Det sista som du ska koda är att se till att klädseln ändras när ett meddelande från knapparna tas emot.

1.	Skapa ett skript för **Ruby** som säger

  * När jag **tar emot** meddelandet **”gjorde val1”**

  * **Byt** klädsel till **”val1”**

  * **Säg** *”Tack! Nu kan jag börja leka”*

  ![image alt block](image_14.png)

2.	Skapa ett liknande skript för Ruby när sprajten **tar emot** meddelandet **”gjorde val2”**, men byt istället till klädseln **"val2"**.

3.	Skapa ett skript för sprajten **Val1** som säger:

  * När denna sprajt **klickas på**

  * **Göm** sprajten

  * **Skicka** meddelandet **”gjorde val1”**

  ![image alt block](image_24.png)

4. Skapa ett liknande skript för **Val2**-knappen men skicka där meddelandet **"gjorde val2"**.

5.	Skapa också skript så att **Val2** döljs när **Val1** klickas på, och tvärtom. Båda sprajterna ska ju försvinna när användaren har gjort sitt val.

> Testa programmet! Vad händer när du är på en veckodag där två kläder ska slumpas fram? Visas de två valen på skärmen med lite mellanrum?

## 8: Egna aktiviteter och val

Nu har du en stomme till ett program där du har kodat vilka kläder Ruby ska få på olika dagar. Nu är det fritt fram att koda andra aktiviteter och val. Det är väldigt fritt och kanske känner du att det är svårt att komma på hur du ska koda. Här är några tips.

1.	Utgå ifrån koden när Ruby tar emot **meddelandet ”byt käder”** och där du har lagt in OM-block för att göra olika saker på olika veckodagar.

2.	Om du vill att något särskilt ska hända på en specifik dag, **skicka ett meddelande** på den dagen.

3.	Skapa ett **nytt skript** för **Ruby** eller en **annan sprajt** som körs när det meddelandet tas emot.

4.	I det skriptet lägger du in all kod som gör att Ruby till sist får rätt kläder

  * Du kan till exempel **fråga användaren** om det är soligt eller regnigt väder

  * Du kan **visa en sprajt** på skärmen och använda den för att få information från användaren. Tänk på hur du kodade knappar **Val1** och **Val2** ovan.

  * När du har fått ett **svar från användaren**, genom variabeln **”svar”** eller genom att **meddelandet** har skickats så **byter du kläder** på Ruby.

  * Självklart kan du **kombinera** de två sätten att få information från användaren om du till exempel först vill fråga om det är regnigt och sedan fråga om Ruby vill vara inne eller ute.

### Exempel

Här kommer ett konkret exempel. Det går ut på att på fredagar så vill Ruby lyssna på musik.

1.	Skapa ett OM-block som kollar om **”Idag är det: ”** är lika med **”Fredag”**

  * **Byt** klädsel till **"RUBY_jeans_tshirt"**

  * **Säg** *”Kan du hitta mina hörlurar?”*

  * **Skicka** meddelandet **”hitta hörlurar”**

  ![image alt block](image_15.png)

2.	Lägg till en sprajt genom att ladda upp bilden för **hörlurarna** från din dator.

3.	Skapa ett skript för **hörlurarna** som ser till att de är **gömda** när START klickas på

4.	Skapa sedan ett skript till för **hörlurarna** som **visar** dem när meddelandet **”hitta hörlurar”** tas emot.

5.	**Skicka** meddelandet **”hörlurar”** när sprajten klickas på.

6.	Skapa ett skript för **Ruby** som säger

  * När meddelandet **”hörlurar”** tas emot

  * **Byt** klädsel till **"RUBY_jeans_tshirt_headphones"**

  * **Säg** _”Tack! Nu kan jag börja leka”_

  ![image alt block](image_16.png)

## Färdig!
Grattis, nu har du gjort klart uppgiften.

**Glöm inte att spara ditt projekt!** Döp det gärna till uppgiftens namn så att du enkelt kan hitta den igen.

> **Testa ditt projekt**  
Visa gärna någon det som du har gjort och låt dem testa. Tryck på DELA för att andra ska kunna hitta spelet på Scratch. Gå ut till projektsidan och låt någon annan testa spelet!

## Utmaningar

### Välja igen

Nu avslutas programmet när du har valt klädsel till Ruby. Gör så att det kommer upp en knapp som frågar användaren om hjälp igen.

**Tips:** Skicka meddelandet **"byt kläder"** när användaren klickar på knappen.

### En enkel kalender

Det här är ett tredje förslag på hur veckodag kan kodas istället för att fråga användaren eller slumpa fram dagen. Det kommer finnas två pilar på skärmen så att användaren enkelt kan bläddra mellan de olika veckodagarna.

  ![image alt kalender](image_18.png)

  _Ungefär så här kommer kalendern se ut._

**Obs!** Du måste komma ihåg att välja dag innan du klickar på **Ja**-knappen.

1.	Skapa en **variabel** som heter **”idag”** och som inte ska visas på skärmen.

2.	Skapa en **lista** som heter **"veckodagar"**. Den ska inte visas på skärmen. Du hittar knappen för att skapa lista på fliken DATA.
    ![image alt knapp](image_17.png)

    En lista är som en variabel som kan innehålla flera värden. I din lista ska du lägga in namnet på alla veckodagarna.

3.	Markera scenen och skapa ett skript för den som säger

  * När START klickas på

  * **Ta bort allt** i **”veckodagar”**

  * **Lägg till ”Måndag" i ”veckodagar”**

  * Lägg till **”Tisdag"** i **”veckodagar”**

  * Lägg till **"Onsdag"** i **”veckodagar”**

  * Lägg till **"Torsdag"** i **”veckodagar”**

  * Lägg till **"Fredag"** i **”veckodagar”**

  * Lägg till **”Lördag"** i **”veckodagar”**

  * Lägg till **”Söndag"** i **”veckodagar”**

  * Sätt **”idag”** till ett **slumptal mellan 1 och 7**

  * Sätt **”Idag är det: ”** till **objekt ”idag”** i **”veckodagar”**

  ![image alt block](image_19.png)

  _Dessa block behöver du för koden ovan. Tänk på att du måste lägga till fler block för att lägga in alla dagar i listan._

4.	**Lägg till en sprajt** från biblioteket som ser ut som en pil, till exempel **Arrow2**.

5.	Förminska pilen så att den blir lagom stor och placera den till höger om variabeln **”Idag är det: ”**

6.	Skapa ett skript för **pilen** som säger:

  * Startar när sprajten klickas på

  * OM **”idag”** är **mindre än 7**: **ändra ”idag”** med **1**

  * ANNARS: **sätt ”idag"** till **1**

  * Sätt **”Idag är det: ”** till **objekt ”idag”** i **”veckodagar”**

  ![image alt block](image_20.png)

7.	**Kopiera sprajten** så att du har två pilar.

8.	**Ändra klädsen** på den andra sprajten så att den pekar åt vänster.

9.	Placera den till vänster om variabeln **”Idag är det: ”**

10.	Ändra i koden för **vänster-pilen** så den säger:

  * Startar när sprajten klickas på

  * OM **”idag”** är **större än 1**: **ändra ”idag”** med **-1**

  * ANNARS: **sätt ”idag"** till **7**

  * Sätt **”Idag är det: ”** till **objekt ”idag”** i **”veckodagar”**

> Testa! Vad händer om du klickar på de olika pilarna? Vad händer om det är söndag och du klickar på höger-pilen?


## Frågeställningar

* Vad innebär det att du implementerar regler?

* På vilka olika sätt kan du få information från användaren?

* Vilka för- och nackdelar finns det med de olika sätt att få information från användaren?
