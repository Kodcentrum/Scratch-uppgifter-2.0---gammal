# Kom igång med Sonic-Pi

Det här är en introduktion till <a href="http://sonic-pi.net/" target="_blank"> **Sonic Pi**</a>, ett programmeringsspråk där du kan programmera musik. I förra uppgiften installerade du programmet på din dator. Nu ska du få lära dig att använda det för att spela toner.

Sam Aaron skapade Sonic Pi för att han tycker att musik och programmering passar väldigt bra ihop. När du programmerar i Sonic Pi hör du direkt det som du kodar – på så sätt kan du lära dig programmera samtidigt som du skapar musik!


## 1: Lär känna Sonic Pi
Starta programmet Sonic Pi. Så här ser Sonic Pi ut när du öppnar programmet:

![image alt text](image_0.png)

Titta runt en stund. Det finns tre fönster:

1. Det stora fönstret till vänster programmerar du i, den kallas för PROGRAMMERINGSPANEL.

2. Till höger finns en OUTPUTPANEL som visar information om koden som körs.

3. Längst ner finns en HJÄLPPANEL som hjälper till att visa information och hjälp.

I hjälppanelen finns bland annat **förslag på kod** som du kan skriva, **tips** på olika synthljud och mycket mer.  

4. Om du skriver fel eller gör stavfel i koden så kommer en BUGGVARNING, en **rosa pil** fram på den raden som du skrivit felet och visar var någonstans i koden som du har skrivit fel. Titta och försök hitta vad felet är, det syns både i hjälppanelen och i programmeringspanelen!

Buggvarning ser ut såhär:

![image alt text](image_1.png)


## 2: Börja koda musik

Nu kan vi börja programmera musik! Du ska få testa att skriva kod för olika toner.

5.	Klicka på **Buffer 1** som finns längst ner i programmeringspanelen.

![image alt text](image_2.png)

6.	Skriv **play 60** i progammeringspanelen. Det är viktigt att du skriver med små bokstäver (gemena) när du programmerar!

![image alt text](image_3.png)

> Testa ditt program! Klicka på RUN längst upp i vänstra hörnet av programmeringspanelen. Vad händer? Hör du något? Spelas en ton?

![image alt text](image_4.png)

7.	Fortsätt att skriva kod i programmeringspanelen, som bilden nedan visar. Nu vill du spela **60** två gånger och sedan **67** två gånger.

![image alt text](image_5.png)

> Testa ditt program! Klicka på RUN igen. Hör du fyra toner nu? 60 och 67 är två olika toner som spelas två gånger var, men datorn spelar tonerna så fort att vi knappt hinner höra dem separat. Det låter som att alla kommer på samma gång! Vi vill att de ska spelas efter varandra med en paus emellan. Det gör vi i nästa steg.

8. Nu ska du koda en paus mellan varje ton. Det gör du genom att skriva **sleep 1** mellan varje rad som spelar en ton.

![image alt text](image_6.png)

**Tips!** Sleep betyder sova på engelska. **Sleep 1** betyder att du lägger in en paus som är en sekund lång. Du kan ändra detta genom att skriva **sleep 0,5** eller **sleep 2** om du vill ha snabbare eller långsammare  tempo mellan tonerna.

> Testa ditt program! Klicka på RUN igen. Spelas fyra toner i rad med en paus mellan tonerna nu? Nu hinner vi höra de olika tonerna! Du kan stoppa musiken genom att klicka på STOP. Hör du vilken sång det är som du kommer att programmera redan nu?

9. Nu fortsätter du att koda hela sången! Skriv som på bilden här:

![image alt text](image_7.png)

> Testa ditt program! Klicka på RUN igen. Känner du igen låten? Det är "Blinka lilla stjärna"!

## 3: Loopa musiken
Låten spelas bara en gång. Nu kan vi använda en LOOP som gör att vi kan spela låten två gånger utan att behöva trycka på play två gånger. Att loopa kod betyder att repetera, göra något flera gånger.

10. Längst upp i din kod, innan första **play 60**, skriv  in **2. times do**. Det betyder att datorn ska spela programmet två gånger.

![image alt text](image_8.png)

11. Längst ner i koden, efter sista **sleep 1**, skriv in **end**. Det betyder att programmet slutar där. Nu vet datorn var musiken slutar och varifrån musiken ska spelas en gång till.

![image alt text](image_9.png)

12.	Om du vill spela musiken oändligt många gånger, testa att skriva **loop do** istället för *2.times do*. Den nya loopen gör att tonerna spelas FÖR ALLTID och aldrig slutar förrän du klickar på STOP och stoppar ditt program.

![image alt text](image_10.png)

> Testa ditt program! Klicka på RUN igen. Spelas "Blinka lilla stjärna" så många gånger som du har valt att repetera den? Vad tror du händer om du ändrar siffran i **2. times do**?

## Färdig!
Grattis, nu har du lärt dig att programmera musik! I nästa uppgift får du fler tips på hur du kan skapa egen musik med Sonic Pi. Men redan här har du några utmaningar om du vill testa dig fram på egen hand:

## Utmaning 1: Ändra hastighet
Vill du att blinka lilla stjärna ska spelas snabbare eller långsammare?

Testa att ändra på hur långa pauserna ska vara genom att ändra antal sekunder på **sleep**. Till exempel 0.5 eller 2 sekunder – experimentera och hitta en lagom snabb version.

## Utmaning 2: Ändra ljud på synthen
Prova olika ljud för att göra din favoritversion av "Blinka lilla stjärna"!

Du kan använda olika synthljud i Sonic Pi. Längst upp i koden, skriv **use_synth :**. Efter kolon kommer du att få förslag på olika synthljud som du kan använda. Prova till exempel **use_synth :fm** eller **use_synth :dull_bell**.

![image alt text](image_11.png)

Testa dig fram!


## Utmaning 3: Musik till "Framtidens musikspelare"
Vill du göra din egen musik i Sonic Pi? Testa att ändra tonerna och prova dig fram för att skapa en helt ny melodi.

Kan du skapa musik som du kan använda i Scratch-uppgiften <a href="http://www.kodboken.se/start/skapa-musik/uppgifter-i-scratch/framtidens-musikspelare" target="_blank"> **Framtidens musikspelare**</a>? Till det behöver du två låtar, en glad och en arg, eller så många som behövs i din musikspelare.

Om du vill spara din musik i Sonic Pi, finns en  <a href="https://www.kodboken.se/start/skapa-musik/uppgifter-i-sonic-pi/spara-musik-i-sonic-pi" target="_blank"> **instruktion för det här**</a>.
