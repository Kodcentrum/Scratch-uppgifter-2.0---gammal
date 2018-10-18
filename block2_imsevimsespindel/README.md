# Imse Vimse Spindel

Nu ska du få skapa ett program som är en interaktiv berättelse, en berättelse där användaren styr vad som ska hända. Programmet är enkelt även om du aldrig har jobbat med Scratch tidigare. Målet är att illustrera barnvisan ”Imse Vimse Spindel” med hjälp av enkla animationer.

> Bläddra dig fram genom denna guide, steg för steg. <a href="https://scratch.mit.edu" target="_blank">
  Öppna även verktyget Scratch på sajten www.scratch.mit.edu</a> där du kodar och skapar själva spelet utifrån Kodbokens instruktioner.

Ett exempel på det färdiga spelet kan du se här: <a href="https://scratch.mit.edu/projects/118774105/" target="_blank">https://scratch.mit.edu/projects/118774105/</a>

  ![image alt text](image_1.png)
  
  Då börjar vi koda!

## 1: Välja en insekt som sprajt

I ditt nya projekt visas en katt som enda sprajt på en vit bakgrund. Du får börja med att ta bort katten och välja en ny sprajt.

1.	Tryck på saxen (högt uppe i mitten) och sedan på katten så försvinner den.

  ![image alt text](image_2.png)

2.	Nu vill du lägga till en insekt i stället. Tryck på knappen för NY SPRAJT:

  ![image alt text](image_3.png)

  I menyn till vänster finns en kategori som heter **”Djur”**, tryck på den. I listan hittar du flera insekter. Välj den som heter **”Ladybug2”**. Tryck på insekten så att den blir markerad och sedan på OK nere till höger. (Tyvärr finns det ingen riktig spindel, så därför får du använda dig av **”Ladybug2”**)

3.	Placera spindel på botten och mitten av bakgrunden.

Nu har du gjort spindel och det är dags att skapa en rolig bakgrund!

## 2: Skapa en bakgrund

Du ska nu få infoga en bakgrundsbild från biblioteket och därefter rita lite spindelnät.

1.	För att ändra bakgrunden trycker du först på SCEN längst till vänster och sedan på fliken BAKGRUNDER högst upp i mitten.

  ![image alt text](image_4.png)

2.	Tryck sedan på knappen för NY BAKGRUND:

  ![image alt text](image_5.png)

I menyn till vänster finns en kategori som heter **”Utomhus”**, tryck på den. I listan hittar du flera utomhusmiljöer. Välj den som heter **”brick wall2”**. Tryck på den bilden så att den blir markerad och sedan på OK nere till höger.

> **Tips:** Om du vill så får du använda en annan bakgrund, det är bara att markera en annan bild.

Nu får du se till att rita lite spindelnät:

1.	Tryck på PENSEL eller LINJE och välj en vit färg. Rita ett tjusigt spindelnät i övre högra hörnet.

  ![image alt text](image_6.png)

2.	Tryck på LINJE och välj en vit färg. Rita en rak tråd i mitten av bakgrunden, från spindelnätet till gräset där spindeln är placerad. Det är den här tråden spindeln ska klättra upp på lite senare.

Ungefär så här ska programmet se ut nu. Exakt hur spindelnätet ser ut spelar ingen roll.

  ![image alt text](image_7.png)

## 3: Ditt första skript

Nu när bakgrunden är färdig kan du börja skapa ditt första skript. Glöm inte att **spara** ofta!

Börja med att klicka på sprajten så att den är markerad och tryck därefter på SKRIPT-fliken.

 ![image alt text](image_8.png)
 _Så här ser det ut när sprajten är markerad_

Animationen du ska koda nu är för att få spindeln att klättra på den lodräta tråden i mitten av scenen.  Detta ska ske när du klickar på spindeln.

1.	Dra ut ett block för **HÄNDELSER**: **”när denna sprajt klickas på”** till skriptytan. Under den kopplar du fast blocket för **RÖRELSE**: **”ändra y med 10”**

  ![image alt text](image_9.png)

  ![image alt text](image_10.png)

> Testa nu vad som händer när du trycker på spindeln. Den flyttar sig uppåt! Det är bra, men du vill ju att spindeln ska fortsätta uppåt på tråden. Hur gör du det?

2.	Det kan du ordna med skriptet **”repetera 10”** som finns under rubriken **KONTROLL**. Det här är en LOOP som gör att du kan upprepa en viss kod ett antal gånger.

  ![image alt text](image_11.png)

3. Markera **10:an** och skrv in **7** istället, så att loopen körs _7_ gånger. Då kan du sjunga med i ramsan när spindeln åker upp!

  > Testa att trycka spindeln nu. Nu åker spindeln uppåt!

3.	Du kan förbättra animationen genom att lägg in en fördröjning efter varje gång spindeln flyttas. Dra ett block KONTROLL: ”vänta 1 sekunder” och placera den direkt efter blocket ”ändra y med 7.

  ![image alt block](image_12.png)

> Tryck på spindeln igen! Hur ser animationen ut nu? Åker den för fort eller för långsamt? Åker den för långt eller för kort på tråden? Du kan ändra både hur mycket du ska flytta spindeln och hur många gånger tills du är nöjd.


## 4: Sätt en Startposition

För att slippa dra tillbaka spindeln varje gång du vill testa din animation ska du nu skapa koda som säger åt datorn att placera spindeln på en särskild plats. Detta kallas för att INITIERA programmet och berättar för datorn vad som ska hända när programmet startar.


> För att starta och stoppa ett program, finns det i Scratch två särskilda knappar.  ![image alt text](image_31.png) Har du lagt märke till dem än? Nu ska du se till att spindeln hamnar i början av tråden när du klickar på START-knappen.

1.	Dra ett block för **HÄNDELSER**: **”när START (flaggan) klickas på”** till skriptytan.

2.	Dra spindeln till botten av den lodrätta tråden.

3.	Välj **RÖRELSE**: **”gå till x: y:”** och koppla fast direkt under flaggan. De värden som står för X och Y är KOORDINATER för den startposition som du har ställt spindeln på.

  ![image alt text](image_13.png)

Nu kommer spindeln automatiskt att flyttas till sin startposition varje gång du trycker på flaggan, utan att du behöver dra den dit själv!

## 5: Ner faller regnet...

Nästa sak som händer i ramsan är att det börjar regna. Därför behöver du ett moln i ditt program. Det ska du få koda nu!

  ![image alt text](image_14.png)

1.	Tryck på knappen för **NY SPRAJT** och välj sprajten **”cloud”**.

2.	Placera den uppe i vänstra hörnet.

Sprajten **cloud** är ett helt vanligt moln men i ramsan regnar det. Du ska därför få rita ett regnmoln. Det kan du göra genom att lägga till en ny KLÄDSEL för sprajten.

1. Gå till fliken KLÄDSLAR

2. Högerklicka på klädseln. Du ska då få fram en meny där du kan klicka på KOPIERA. Nu ska du ha två likadana klädslar.

  ![image alt text](image_15.png)
  ![image alt text](image_15b.png)

3. Använd linjeverktyget och en blå färg och rita  till lite regndroppar.

  ![image alt text](image_16.png)

  ![image alt text](image_17.png)
  _Så här kan de två klädslarna för molnet se ut_.


Nu är det dags att animera molnet!

1. Nu ser du att du har fått en helt tomt skriptyta. Här kan du lägga in kod som styr molnet.

2.	**Skapa ett skript** för **molnet** som säger:

  * När **START** klickas på

  * **Gå till** x: y:

  Det här är precis samma skript som du gjorde för spindeln förut, men den här gången har molnet andra KOORDINATER som startposition.

  ![image alt text](image_18.png)

  _Skillnaderna på de två start-skripten du gjort. Det enda som skiljer sig är x- och y-värdet._

3. För att se till att det är det vanliga molnet som syns när programmet startar så dra ett block **UTSEENDE**: **"byt klädsel till ..."** och lägg det under blocket **"gå till...""**  

4. Klicka på den lilla pilen intill namnet på klädseln och välj **"cloud"**.

  ![image alt text](image_19.png)

Nu ska du få animera molnet. Målet är att få den att glida åt höger när du klickar på den samtidigt som den byter utseende. Den ska hamna precis ovanför spindeln.

1. Dra ut ett block för **HÄNDELSER**: **”när denna sprajt klickas på”** till skriptytan.

2. Under **RÖRELSE** finns det ett block som heter **”glid 1 sek till x: y:”**. Placera den direkt under blocket i punkt 1.

3. **Ändra x-värdet** till **0**

4. Ändra också **1 sek** till **2 sek**

5. Dra sedan ett block **UTSEENDE**: **byt klädsel...** till skriptet. Se till att klädseln **"cloud2"** väljs i listan över klädslar.

  ![image alt text](image_20.png)

> Testa spelet! Glider molnet till den lodrätta tråden och blir till ett regnmoln?

## 6: Skicka meddelanden

När du klickar på molnet ska även spindeln spindeln spolas bort och glida bort ifrån tråden. Men hur ska spindeln få reda på att du klickat på molnet? Svaret är MEDDELANDEN! När molnet har klickats på skickar den ut ett meddelande som spindeln kan lyssna på. Fiffigt va?

Block för att skicka och ta emot meddelanden hittar du under **HÄNDELSER**.

1.	Dra ett block för **HÄNDELSER**: **”skicka meddelande1”** och placera den direkt under koden för animationen du gjorde tidigare.

  ![image alt text](image_21.png)

2.	Klicka på den lilla **nedåtpilen** på kodblocket och klicka på **”nytt meddelande”**.

3.	I rutan som dyker upp skriver du in **”molndans”**.

  ![image alt text](image_22.png)

Nu skickar molnet meddelande **"molndans"** när du klickar på den. Nu ska du fixa så att spindeln lyssnar på detta meddelande och glider bort från tråden.

1. Klicka på spindeln sprajten så att den är markerad och du ser koden du gjorde tidigare

2.	Dra ett block **HÄNDELSER**: **”när jag tar emot...”** till skriptytan och välj **"molndans"** i listan över meddelanden.  

   ![image alt text](image_23.png)

3.	Dra ett block **UTSEENDE**: **”säg ... i 2 sek”** och placera direkt under. Skriv in **”Usch…”** i stället för ”Hello”

4.	Dra ett block **UTSEENDE**: **”byt klädsel till…”** och placera den direkt under **”säg..”**-blocket.

  ![image alt text](image_24.png)

4.	Spindel sprajten har två klädslar som du kan se om du klickar på fliken KLÄDSLAR. De två klädslarna skiljer sig åt på hur munnen ser ut. Klädseln **”ladybug2-a”** ser lite mer ledsen ut så välj den i **”byt klädsel till…”**-blocket genom att klicka på den lilla nedåtpilen.

5.	Använd sedan ett block **RÖRSELSE**: **”glid 1 sek till x: y:”**. Låt y-värdet stå kvar men **ändra x-värdet** till **-100**

  ![image alt text](image_25.png)

> Tryck på molnet! Rör sig både molnet och spindeln nu?

## 7: Ljudeffekt

Du ska få göra det lite roligare genom att lägga till ett ljud till animationen.

1.	Klicka på fliken LJUD och därefter på knappen för **NYTT LJUD**: ![image alt text](image_26.png)

2.	Välj ljudet **”screech”** genom att klicka på det så att det blir markerad och sedan på knappen OK.

Nu har du lagt till ett ljud till sprajten som kan spelas upp. Block för olika ljudeffekter hittar du under kategorin LJUD.

3.	Dra ett block **LJUD**: **”spela ljudet…”** och placera på skriptytan under den kod du gjorde ovan.

4.	Välj **”screech”** från menyn genom att klicka på den lilla **nedåtpilen**.

  ![image alt text](image_27.png)

## 8: Upp stiger solen...

Härnäst i ramsan om spindeln kommer solen som gör spindeln glad. Nu är det dags att lägga till en sol till ditt program. Solen ska fungera på nästan samma sak som molnet du just har kodat. När du klickar på solen ska du animera den och solen ska skicka ett meddelande. När spindeln tar emot det meddelandet ska den åka tillbaka till tråden och bli glad.

1.	Tryck på knappen för **NY SPRAJT** och välj sprajten **”Sun”**.

2.	Placera den i övre, högra hörnet.

3.	**Skapa ett skript** för solen som säger:

  * När **START** klickas på

  * **Gå till** x: y:

Nu är det dags att animera solen!

1. **Skapa ett skript** för **solen** som säger:

  * När denna sprajt **klickas på**

  * **Glid 2 sekunder till x: y:**. Ange koordinaterna så att solen hamnar precis ovanpå molnet, i mitten på skärmen.

  * **Skicka** meddelandet **"soldans"**

  ![image alt text](image_28.png)

> Klicka på solen! Glider den och hamnar ovanför molnet?

## 9: Torka bort allt regn

Nu är regnmolnet kvar även om du klickar på solen vilket är konstigt. Det sista du ska fixa är att se till att molnet åker bort och blir till ett vitt och fluffigt moln. Du ska också se till att spindeln åker tillbaka till tråden.

1.	**Skapa ett skript** för **molnet** som säger:

  * När jag **tar emot ”soldans”**

  * **Byt klädsel** till **”cloud”**

  * **Glid 1 sekunder** till x: -150 y: 110

  ![image alt text](image_29.png)

2. **Skapa ett skript** for **spindeln** som säger:

   * När jag **tar emot ”soldans”**

   *  **Byt klädsel** till **”ladybug2-a”**

   * **Glid 1 sekund x: y:**. Ange samma koordinater som spindeln startar på i början av programmet.

  > **Tips**. Du behöver använda samma block som i skriptet för molnet.

## Färdig!
Grattis, nu har du skapat ett nytt program!

**Glöm inte att spara ditt projekt!** Döp det gärna till uppgiftens namn så att du enkelt kan hitta den igen.

> **Testa ditt projekt**  
Visa gärna någon det som du har gjort och låt dem testa. Tryck på DELA för att andra ska kunna hitta spelet på Scratch. Gå ut till projektsidan och låt någon annan testa spelet!


## Utmaningar

### Fler ljud

Kan du lägga till fler ljudeffekter? Du kan till exempel lägga till ett ljud när solen stiger upp.

### Roligare animationer

Kan du förbättra dina animationer? Det finns en hel del olika block under kategorin **RÖRELSER**. Testa dig fram genom att prova de olika blocken.

### Ändra sprajter och bakgrund

Tycker du inte om spindlar eller tycker du att de är läskiga? Då kan du byta ut spindeln mot en annan sprajt och skapa en helt annan berättelse. Du kan också byta ut bakgrunden eller rita en helt egen!

### En annan barnvisa

Har du en annan sång som du tycker bättre om? Kan du bryta ner den i olika sprajtar och block som blir till ett program? Här är ett exempel:

    En elefant balanserade på en liten spindeltråd,
    det tyckte hon var så intressant
    så hon gick och hämtade en annan elefant

    Två elefanter balanserade på en liten spindeltråd,
    det tyckte de var så intressant
    så de gick ock hämtade en tredje elefant

    osv

För att illustrera denna barnvisa kan du till exempel:

  * Rita en bakgrund med två träd och en tråd emellan dem
  * Ha två eller fler elefant-sprajtar
  * När spelet startar är bara en elefant synlig
  * När du klickar på den första elefanten så dansar den på tråden
  * När den har dansat klart så dyker det upp en andra elefant
  * När du klickar på den nya elefanten så dansar båda två på tråden
  * När de har dansat klart så dyker det upp en tredje elefant

Ett exempel på det färdiga spelet kan du se  <a href="https://scratch.mit.edu/projects/117364599/
" target="_blank">här på Scratch</a>

## Frågeställningar

* Vad är ett start-skript?

* Varför är det bra att koda ett sådant skript?

* Vad är en loop?

* När är det bra med en loop?

* Vad är ett meddelande?

* Hur kan du använda ett meddelande?

* Varför kan en sprajt ha flera klädslar?

* Vad kan du använda det till?
