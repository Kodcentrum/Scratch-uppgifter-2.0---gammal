<style> i.sb {
    border: 1px solid lightgray;
    border-radius: 5px;
    background: lightgray;
    padding: 2px 5px 4px 5px;
    font-style: normal;
    display: inline-block;
  } i.sb img {
    position: relative;
    margin: 0 2px 0 0 !important;
    top: 5px;
  }</style>

# Programmera Bug race

Nu ska du få bygga ett spel i Scratch där du kör runt en skalbagge på en bana.

**<a href="http://bit.ly/bugrace-vf" target="_blank">Klicka här för att öppna Scratch-uppgiften.</a>**

Vi har redan ritat ut en bana och lagt ut en skalbagge som du skall styra. Även alla block som behövs ligger framme.

> Om du undrar _hur_ eller _varför_ det fungerar eller om du har andra frågor kan du prata med någon av volontärerna.

**Nu programmerar vi!**

1. För att få skalbaggen att gå framåt behöver vi använda blocket <i class="sb">gå 2 steg</i> och sätta den efter blocket <i class="sb">när ![flagga](flagga.png) klickas på</i>.

    ![Skript 1](skript-01.png)

> Tryck på flaggan och se hur skalbaggen rör sig framåt varje gång du trycker.
>
> ![Start-flagga](start-flag.png)

Nu ska vi få skalbaggen att gå 2 steg hela tiden - för alltid. 

2. Vi får flytta <i class="sb">gå 2 steg</i> till blocket <i class="sb">för alltid</i> och stoppa in det där. 
3. Sen drar vi <i class="sb">för alltid > gå 2 steg</i> till start-blocket <i class="sb">när ![flagga](flagga.png)klickas på</i>.

    ![Skript 2](skript-02.png)

> Tryck på flaggan och se hur den går ända till kanten.

När vi startar spelet igen så börjar inte skalbaggen om från början där vi vill att den ska. Vi måste säga till programmet att skalbaggen ska gå till en viss position när den gröna flaggan klickas på. 

4. Lägg blocket <i class="sb">gå till x:9 y:98</i> mellan <i class="sb">när ![flagga](flagga.png)klickas på</i> och <i class="sb">för alltid</i>.

    ![Skript 3](skript-03.png)

> Tryck på flaggan några gånger och se hur skalbaggen alltid börjar på samma position.

Nu ska vi få skalbaggen att vända när vi trycker på piltangenterna.

5. När högerpil trycks ned vill vi att skalbaggen ska vända åt höger så vi drar blocket <i class="sb">vänd höger 15 grader</i> till blocket <i class="sb">när högerpil trycks ned</i>.

    ![När högerpil vänd åt höger](skript-04a.png)

> Starta spelet och tryck på högerpilen på tangentbordet flera gånger. Skalbaggen svänger åt höger!

6. Gör samma sak med <i class="sb">när vänsterpil trycks ned</i> och <i class="sb">vänd vänster 15 grader</i>.

    ![När vänsterpil vänd åt vänster](skript-04b.png)

> Tryck på flaggan och använd höger och vänster piltangenter för att styra skalbaggen.

När du startar spelet nu efter några gånger märker du att skalbaggen pekar åt olika håll nästan varje gång. Vi vill att skalbaggen ska peka framåt varje gång vi startar. 

7. Lägg blocket <i class="sb">peka i 90 vinkel</i> mellan <i class="sb">när ![flagga](flagga.png)klickas på</i> och <i class="sb">gå till x:9 y:98</i>.

    ![När flagga klickas på, peka i 90, gå till x y, för alltid](skript-05.png)

> Tryck på flaggan och se hur skalbaggen alltid pekar framåt när du startar.

Det går nu att köra runt på banan, men inget händer när vi kör utanför banan. Om vi åker utanför banan ska spelet säga _Game over!_ och avsluta spelet. Skriptet behöver kolla varje gång skalbaggen går 2 steg om vi rör färgen grön (samma som gräset) och då säga _Game over!_ samt stoppa spelet (stoppa alla skript).

8. Sätt in blocket <i class="sb">rör färgen ![grön](gron.png)?</i> på den tomma rutan av <i class="sb">om <> då</i>-blocket.  
9. Dra även in <i class="sb">säg Game over! i 2 sekunder</i> in i <i class="sb">om <> då</i> och sen även <i class="sb">stoppa alla</i>.  
10. Slutligen flyttar vi hela <i class="sb">om <> då</i>-blocket och lägger det efter <i class="sb">gå 2 steg</i>.

    ![för alltid, gå 2 steg, om då](skript-06.png)

> Tryck på flaggan och se vad som händer om du kör utanför banan.

Nu är vi nästan klara. Vi behöver bara säga till spelet att vi vunnit när vi kommit i mål (det gula strecket).

Precis som vi kollade i förra steget om vi rörde den gröna färgen vill vi nu kolla om vi rör den gula färgen istället. Om vi rör den gula färgen vill vi säga _Jag vann!_ och sen stoppa spelet.

11. Se om du kan klura ut hur du ska göra för att det ska fungera som vi vill. När du är klar kan du testa att trycka på flaggan och se om det fungerar. 

> Hur hela skriptet ser ut kan du se på nästa sida, men _försök gärna själv först_.

## Ett färdigt spel

Så här ser hela skriptet ut när det är färdigt. Det behöver inte vara exakt likadant på alla ställen så länge det fungerar som du vill.

![Hela skriptet](skript-07.png)

**Bra jobbat!**

### Fortsättning

Du kan fortsätta programmera hemma eller i skolan. Du kan till exempel lägga till lite hinder på banan och du kan göra att två spelare kör varsin skalbagge samtidigt. Det finns mer att göra och fler uppgifter hittar du på kodboken.se.

