# Bug Race (intro)

Nu ska du få lära känna Scratch och samtidigt skapa ett roligt spel som är enkelt även om du aldrig har jobbat med Scratch tidigare. Målet är att få en skalbagge att springa runt en bana och försöka undvika att hamna utanför banan genom att styra med vänster- och högerpil på tangentbordet.

## Kom igång med Scratch

* Skapa ett **eget konto** på Scratch: [http://scratch.mit.edu/](http://scratch.mit.edu/)

  Skriv ned ditt användarnamn och lösenord så att du inte glömmer det!

* Tryck på **Skapa** på hemsidan för ett skapa ett nytt projekt

* Om språket inte är svenska, tryck på **jordklotet** och scrolla ner tills du hittar **Svenska**.

  ![image alt text](image_0.png)


Så här ser din arbetsyta i Scratch ut:

![image alt text](image_1.png)

1. Här är din vita bakgrund som också kallas för **scen**.

2. Här kan du se vilka **sprajter** du använder.

3. I kolumnen i mitten plockar du ditt **skript**. Det är skript-block som finns i olika kategorier. Förutom skript finns flikar för **klädslar** och **ljud**.

4. Kolumnen till höger är din **skriptyta** – där du kodar genom att lägga dina skript.
Om du vill ta bort ett block drar du bara tillbaka blocket till mittkolumnen igen.

5. Här är en **Hjälp**-kolumn om du behöver, den kan du klicka bort uppe i det vänstra hörnet.**


## Delmoment 1: Välja en skalbagge som sprajt

I ditt nya projekt visas en katt som enda sprajt på vit bakgrund. Du får börja med att ta bort katten och välja en ny sprajt.

1. Tryck på saxen (högt uppe i mitten) och sedan på katten så försvinner den.
![image alt text](image_2.png)

2. Nu vill du lägga till en skalbagge istället. Tryck på knappen för NY SPRAJT:
![image alt text](image_3.png)

  I menyn till vänster finns en kategori som heter "Djur", tryck på den. I listan hittar du skalbaggen. Tryck på skalbaggen så att den blir markerad och sedan på OK nere till höger.


  ![image alt text](image_4.png)

  ![image alt text](image_5.png)

Nu är skalbaggen klar och det är dags att måla banan som skalbaggen skall springa på!


## Delmoment 2: Rita en bana som bakgrund

Du ska nu få rita en grå bana på grönt gräs som skalbaggen kan springa på.


  ![image alt text](image_6.png)	![image alt text](image_7.png)

  ![image alt text](image_8a.png)

6. Tryck på PENSEL och välj en grå färg. Gör penseln större genom att dra reglaget ända till höger. Rita nu en oval (utdragen cirkel) - gör den så stor som du kan!

  ![image alt text](image_8.png)	![image alt text](image_9.png)

  Ungefär så här skall banan se ut. Om spåret är väldigt smalt kommer spelet bli väldigt svårt. Är banan bred blir spelet lättare!

  ![image alt text](image_10.png)


## Delmoment 3: Ditt första skript**

Nu när bakgrunden är färdig kan du börja skapa ditt första skript. Glöm inte att **spara** ofta!

Börja med att dra skalbagge-sprajten till den målade banan (som på bilden ovanför). Tryck på SKRIPT-fliken om den inte redan är vald.

Har du lagt märke till START- och STOPP-knappen än? Se om du kan hitta dem.

> "När jag trycker på START, ska skalbaggen röra sig."

7. Dra ut ett block för **HÄNDELSER**: **"när START (flaggan) klickas på" **till skriptytan.  Under den kopplar du fast blocket för **RÖRELSE**: **"gå 10 steg"**.

  ![image alt text](image_11.png)

  _Tryck först på Händelser och dra sedan ut "när START klickas på" till fönstret till höger._

  ![image alt text](image_12.png)

  _Tryck på Rörelse och dra sedan ut "gå 10 steg" och placera den som på bilden._

  Testa nu vad som händer när du trycker på START. Skalbaggen flyttar sig åt höger! Det är bra, men du vill ju att skalbaggen skall röra sig framåt hela tiden. Hur gör du det?

8. Det kan du ordna med skriptet **"för alltid"** som finns under rubriken **KONTROLL**.
Det här är en LOOP som gör att sprajten fortsätter röra sig så länge programmet är igång.

  ![image alt text](image_13.png)

  _För att skalbaggen ska fortsätta att gå måste du lägga "gå 10 steg" i mitten av "för alltid"-loopen. "Gå 10 steg" kommer då att upprepas för alltid._

Testa att trycka på START. Nu blir det fart på skalbaggen! Prova vad som händer om du ändrar antalet steg till en lägre siffra. Välj en hastighet som du tror är lagom för att kunna styra skalbaggen.


## Delmoment 4: Sätt en Startposition

För att slippa dra tillbaka skalbaggen varje gång du trycker på START kan du säga åt datorn att placera den på en särskild plats varje gång du startar spelet. Detta kallas för att initiera programmet, du gör ett INIT-SKRIPT som berättar för datorn hur programmet ska starta.


9. Välj från **RÖRELSE** **"gå till x: y:"** och koppla fast direkt under flaggan, innan loopen. De värden som står för X och Y är KOORDINATER för den startposition som du har ställt skalbaggen på.  

  ![image alt text](image_14.png)

Nu kommer skalbaggen automatiskt att flyttas till sin startposition varje gång du trycker på flaggan, utan att du behöver dra den dit själv!


## Delmoment 5: Styra skalbaggen

Nästa steg blir att göra det möjligt att styra skalbaggen! För det behöver du två små skript. Ett som säger åt datorn att svänga höger på skalbaggen när du trycker ned höger piltangent, och ett annat som säger åt den att svänga vänster när du trycker ned vänster piltangent.



  ![image alt text](image_15.png)

Testa vad som händer nu när du trycker på START. Du kan styra skalbaggen åt båda hållen med piltangenterna!


## Delmoment 6: Ändra startriktning

Om du trycker på START igen märker du att skalbaggen behåller den riktning som den hade när du slutade sist. Det kan du lösa genom att lägga in ett till init-skript som säger åt datorn att skalbaggen alltid ska vara vänd åt höger när du startar spelet.


  ![image alt text](image_16.png)


## Delmoment 7: Känna av gräset

Nästa steg är att skapa ett skript som gör att skalbaggen känner av när den hamnar utanför din utmålade bana. Hur ska den kunna göra det? Det kan du lösa med ett skript som känner av vilken färg som skalbaggen rör sig över. Du behöver skapa ett VILLKOR för skalbaggen: OM skalbaggen rör vid färgen grön betyder det att den har åkt av banan, och DÅ ska spelet ta slut - Game Over!



  ![image alt text](image_17.png)

15. Till sist skapar du ett skript för att spelet ska säga att spelet är över om skalbaggen nuddar den gröna färgen. Välj **"säg ___ i 2 sekunder"** under **UTSEENDE**, dra in det innanför "**om <**"**Rör färgen grön?> då**" och ändra texten till det du vill ska stå.

Testa ditt spel! Händer något när skalbaggen nuddar det gröna gräset? Om inte, vad tror du att det kan bero på?


## Delmoment 8: Göra klart skriptet

Något saknas! När vill du att datorn ska känna av om skalbaggen nuddar det gröna gräset? Det behöver göras efter varje steg skalbaggen tar, för att inte missa att den hamnar utanför banan. Därför måste du slå ihop skriptet som känner av gräset med skriptet som får skalbaggen att röra sig.




## Ett färdigt spel!

Grattis, nu har du skapat ett spel! Det färdiga skriptet i sin helhet borde se ut så här:

![image alt text](image_18.png)

Glöm inte att **spara ditt projekt**!
Döp det t ex till _"Bug Race"_ och ditt namn.



Saknas något? Hur skulle du vilja utveckla spelet?

Det får du göra i nästa uppgift!