
# Instruktioner

Originaldokumenten ska vara i markdown men innan du checkar in så generera HTML. Du behöver ha [node](https://nodejs.org/en/) installerat och sedan köra `npm install` för att komma igång.

Innan varje incheckning: kör `npm start` för att generera HTML.

Gör helst en Pull Request (PR) i Github om du vill göra ändringar även om du tillhör Kodcentrum. För då kan vi diskutera ändringarna innan det läggs in. Men om det är stavfel, tekniska fel med Gulp, eller annat som uppenbarligen måste fixas så kan du göra det direkt i master-branch utan en PR.

# Style guide

Här är några tips och regler som du ska försöka hålla dig till då du skriver nya uppgifter

En bra uppgift att kolla på för att få inspiration är `block3_jaktenpanyckel`. Den är framtagen och reviderad efter feedback från lärare.


### Disposition

* För varje uppgift ska det finnas ett exempelprojekt i Scratch. Detta projekt ska länkas till i början av uppgiften tillsammans med en skärmdump

* Länken till exempelprojektet ska öppnas i ett nytt fönster, så vanliga HTML måste användas för det, t.ex:

        <a href="https://scratch.mit.edu/projects/27697024/" target="_blank">här på Scratch</a>

* Sträva efter korta deluppgifter som går att testa individuellt

* Varje deluppgift ska ha som rubrik en siffra följt av en kort och enkel text, t.ex. **2 - Sätta bakgrund**

* Varje deluppgift ska börja med en kort text som förklarar vad som ska göras i deluppgiften

* Varje deluppgift ska avslutas med en uppmaning att testa koden (om möjligt).

* Avsluta uppgiften med en rubrik **Färdig** och som ska ha ungefär denna text:

    Grattis, nu har du skapat ett nytt spel!

    Glöm inte att spara ditt projekt! Döp det gärna till uppgiftens namn så att du enkelt kan hitta den igen.

    > **Testa ditt projekt**

    > Visa gärna någon det som du har gjort och låt dem testa. Tryck på DELA för att andra ska kunna hitta spelet på Scratch. Gå ut till projektsidan och låt någon annan testa spelet!


* Efter avsnittet **Färdig** lägg in ett avsnitt med **Utmaningar** och ett avsnitt med **Frågeställningar**

### Text

* Använd korta och kärnfulla instruktioner, helst i punktform

* Använd bildtexter endast om de tillför viktigt information. Annars ska bilderna vara enkla att förstå från instruktionerna

* Var extra noggrann med instruktioner och bilder om du introducerar ett nytt koncept, t.ex. variabler eller meddelanden

* Använd fet och kursiv text för att markera kodelement t.ex. block, värden och variabler

* Använd särskild formatering med (>) för tips, utförligare förklaringar och uppmaningar till testning. Detta för att göra det tydligt att det inte är kodinstruktioner, t.ex.

    > Detta är ett tips om att du bör testa din kod nu.

* Undvik instruktioner som har för många nivåer av indentering, t.ex. en trippelnästlad OM-sats. De blir svåra att läsa, så försök istället skriva om koden eller dela upp instruktionerna


### Bilder

* Använd bilder för att illustrera instruktionerna, och försök hitta en bra balans för antalet bilder. Hellre en extra bild än en för lite

* Alla bilder ska vara indenterade tillsammans med de instruktioner som hör till. Detta för att de ska sidbrytas ihop när uppgifterna skrivs ut

* I början av uppgiften kan bilderna gärna få vara hela algoritmer, men de ska sedan övergå till bilder på block som användaren får plocka ihop själv

* Beskär bilderna så att det inte är minimalt med grått runt dem

* Försök att skapa bilder för max 3 algoritmer, gör inte bilderna för stora med massor av block.

* Annotera bilder från Scratchs gränssnitt med pilar, cirklar etc för att tydliggöra vad som ska hända eller var användaren ska klicka
