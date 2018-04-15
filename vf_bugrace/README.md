# Bug race

Nu ska du få bygga ett spel i Scratch där du kör runt en skalbagge på en bana.

## 1: Scratch studio

Först lär vi oss de olika delarna i Scratch:

![Scratch studio](scratch-studio.png)

Ett skript är flera kommandon i följd som datorn kan förstå. I Scratch ser kommandona ut som block (skriptblock). Datorn läser dem uppifrån och ned när de sitter ihop. Som ett exempel, om vi kollar på bilden nedan, så kommer datorn läsa det som att den först ska gå 10 steg, sen vänta 1 sekund och sist gå 5 steg till.

![Skript-kommandon](skript-kommandon.png)

## 2: Börja programmera

Vi startar med att gå till Scratch-uppgiften i en webbläsare: <a href="http://bit.ly/bugrace-vf" target="_blank">bit.ly/bugrace-vf</a>.

I den här uppgiften har vi redan ritat ut en bana (bakgrunden) och lagt ut en skalbagge (en sprajt) som du skall styra. Även alla block som behövs till skriptet ligger framme på skriptytan.

> Om du undrar hur eller varför det fungerar eller om du har andra frågor kan du prata med någon av volontärerna.

Nu programmerar vi!

Om du inte ser några block på skriptytan klickar du på sprajten “Beetle” ![Beetle](beetle.png)så att blocken dyker upp.

Om du testar att klicka på den gröna flaggan ![Flagga](flagga.png)för att starta spelet så händer ingenting just nu. 

1. För att få skalbaggen att gå framåt behöver vi använda blocket **gå 2 steg** och sätta den på blocket **när ![flagga](flagga.png)klickas på**.

    ![Skript 1](skript-01.png)

> Tryck på flaggan och se hur skalbaggen rör sig framåt varje gång du trycker.

Nu ska vi få skalbaggen att gå 2 steg hela tiden - för alltid. 

2. Vi får flytta **gå 2 steg** till blocket **för alltid** och stoppa in det där. 
3. Sen drar vi **för alltid > gå 2 steg** till start-blocket (**när ![flagga](flagga.png)klickas på**).

    ![Skript 2](skript-02.png)

> Tryck på flaggan och se hur den går ända till kanten.

När vi startar spelet igen så börjar inte skalbaggen om från början där vi vill att den ska. Vi måste säga till programmet att skalbaggen ska gå till en viss position när den gröna flaggan klickas på. 

4. Lägg blocket **gå till x:9 y:98** mellan **när ![flagga](flagga.png)klickas på** och **för alltid**.

    ![Skript 3](skript-03.png)

> Tryck på flaggan några gånger och se hur skalbaggen alltid börjar på samma position.

Nu ska vi få skalbaggen att vända när vi trycker på piltangenterna. Det finns två block som vi ska använda. 

5. När högerpil trycks ned vill vi att skalbaggen ska vända åt höger så vi drar blocket **vänd höger 15 grader** till blocket **när högerpil trycks ned**.

    ![När högerpil vänd åt höger](skript-04a.png)

> Starta spelet och tryck på högerpilen på tangentbordet flera gånger. Skalbaggen svänger åt höger!

6. Gör samma sak med **när vänsterpil trycks ned** och **vänd vänster 15 grader**.

    ![När vänsterpil vänd åt vänster](skript-04b.png)

> Tryck på flaggan och använd höger och vänster piltangenter för att styra skalbaggen.

När du startar spelet nu efter några gånger märker du att skalbaggen pekar åt olika håll nästan varje gång. Vi vill att skalbaggen ska peka framåt varje gång vi startar. 

7. Lägg blocket **peka i 90 vinkel** mellan **när ![flagga](flagga.png)klickas på** och **gå till x:9 y:98**.

    ![När flagga klickas på, peka i 90, gå till x y, för alltid](skript-05.png)

> Tryck på flaggan och se hur skalbaggen alltid pekar framåt när du startar.

Det går nu att köra runt på banan, men inget händer när vi kör utanför banan. Om vi åker utanför banan ska spelet säga _Game over!_ och avsluta spelet. Skriptet behöver kolla varje gång skalbaggen går 2 steg om vi rör färgen grön (samma som gräset) och då säga _Game over!_ samt stoppa spelet (stoppa alla skript).

8. Sätt in blocket **rör färgen ![grön](gron.png)?** på den tomma rutan av **om <> då**-blocket.  
9. Dra även in **säg Game over! i 2 sekunder** in i **om <> då** och sen även **stoppa alla**.  
10. Slutligen flyttar vi hela **om <> då**-blocket och lägger det efter **gå 2 steg**.

    ![för alltid, gå 2 steg, om då](skript-06.png)

> Tryck på flaggan och se vad som händer om du kör utanför banan.

Nu är vi nästan klara. Vi behöver bara säga till spelet att vi vunnit när vi kommit i mål (det gula strecket).

Precis som vi kollade i förra steget om vi rörde den gröna färgen vill vi nu kolla om vi rör den gula färgen istället. Om vi rör den gula färgen vill vi säga _Jag vann!_ och sen stoppa spelet.

11. Se om du kan klura ut hur du ska göra för att det ska fungera som vi vill. När du är klar kan du testa att trycka på flaggan och se om det fungerar. 

> Hur hela skriptet ser ut kan du se på nästa sida, men _försök gärna själv först_.

## 3: Ett färdigt spel

Så här ser hela skriptet ut när det är färdigt. Det behöver inte vara exakt likadant på alla ställen så länge det fungerar som du vill.

![Hela skriptet](skript-07.png)

**Bra jobbat!**

## Fortsättning

Du kan fortsätta programmera hemma eller i skolan. Du kan till exempel lägga till lite hinder på banan och du kan göra att två spelare kör varsin skalbagge samtidigt. Det finns mer att göra och fler uppgifter hittar du på kodboken.se.
