# Kodkupeversion av Min hjälte

I denna uppgift får du chansen att jobba vidare med spelet **Min hjälte**. Du kommer få lägga till funktioner som olika väder, tävling mellan dig och din nemesis. Och du kommer få jobba med meddelanden, variabler och kloner.

## 1 – Förberedelser

För att kunna jobba med denna uppgift måste du ha skapat ett färdigt berättelse **Min hjälte** som har några olika funktioner.

**Har du kodat Min hjälte?**

Om du _inte_ är klar med Min hjälte får du börja med att göra klart den. Du hittar uppgiften [här](https://www.kodboken.se/start/skapa-berattelser/uppgifter-i-scratch/min-hjalte) eller i menyn till höger.

> Nu är det dags att koda vidare på spelet!

## 2 – Lägg till en regndroppe

Du skall koda så att en regndroppe ramlar från toppen av skärmen ned till botten.

1. Skapa en ny, tom, sprajt genom att klicka på penseln

   ![Rita ny sprajt](./rita_ny_sprajt.png)

2. Måla en regndroppe

   ![Rita en regndroppe](./rita_regndroppe.png)

3. Minska storleken på din regndroppe genom att först klicka på knappen Förminska och sedan klicka på din regndroppe på scenen.

   ![Förminska](./förminska.png)

4. Nu när vi har målat en regndroppe så är det dags att få den att falla ned till botten när vi startar vår berättelse. Du behöver ett skript som säger:

   * när START klickas på
   * Sätt y till 180
   * Repetera tills y-läge < -180
     * Ändra y med -10

![Lägg till block](./repetera_tills.png)

> Testa! Faller regndroppen nedåt när du trycker på START? Flyttar den sig till toppen nästa gång du trycker start?

## 3 – Skapa kloner av regndroppen så att det ser ut som att det regnar

Är det inte lite tråkigt att det bara faller _en_ regndroppe? Nu skall du koda så att det faller en massa regndroppar.

1. Under _Kontroll_ finns det ett block som heter **"när jag startar som klon"**. Dra ut det och flytta din kod från **"när START klickas på"** till **"när jag startar som klon"**.

2. Modifiera koden så att den säger:

   * när jag startar som klon
   * sätt **y** till **180**
   * sätt **x** till "slumptal **-240** till **240**"
   * Repetera tills y-läge < -180
     * Ändra y med -10
   * radera klonen

3. Lägg sedan till kod under blocket **"när START klickas på"** som säger:

   * när START klickas på
   * för alltid
     * skapa klon av mig själv

![Skapa klon](./skapa_klon_1.png)

> Testa! Faller det ned en massa regndroppar nu när du trycker på START?

Du ser kanske det är en regndroppe som hänger kvar uppe i taket av scenen? Det är vår _ursprungssprajt_. Vi har bara skrivit kod för hur klonerna skall bete sig. Men vi har inte sagt vad som skall hända med urssprungssprajten.

För att bli av med ursprungssprajten: Lägg till ett block **"göm"** under **"när START klickas på"**.

Faller det inte längre några regndroppar? Det är för att en klon får samma beteende som dess ursprungssprajt och nu har vi sagt att den skall vara gömd. Lägg till ett block **"visa"** under **"när jag startar som klon"**.

![Visa/dölj klon](./skapa_klon_2.png)
