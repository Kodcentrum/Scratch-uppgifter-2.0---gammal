# Koda musik med Sonic Pi

Den här uppgiften har vi tagit fram tillsammans med Julia och Maria som jobbar på Spotify i Stockholm. Det är en fortsättning på förra uppgiften där du fick komma igång och lära känna programmeringsspråket <a href="http://sonic-pi.net/" target="_blank"> **Sonic Pi**</a>, och här får du chans att utforska vidare och skapa helt egen musik!


## 1: MIDI-noter och toner
I förra uppgiften fick du skriva in siffror efter **play**, till exempel **60**, **62**. Siffrorna representerar noter och motsvarar något som kallas MIDI-noter.

Det finns en tabell som visar hur dessa nummer motsvarar vanliga noter som används när man spelar instrument som till exempel piano:

![image alt text](image_0.png)

C4 D4 E4 F4 står för TON och OKTAV, medan 60 62 64 65 är MIDI-noter. Den här tabellen kan vara väldigt användbar när du vill översätta vanliga noter som kan spelas på ett piano till siffror att använda i Sonic Pi.

Att översätta från vanliga noter till siffror kan ta ett litet tag. Du kan om du vill direkt använda vanliga noter i SonicPi, genom att skriva vilken TON i vilken OKTAV som du vill använda.

En oktav kan enkelt förklaras som en grupp av åtta tonsteg, vilket motsvarar avståndet från ett C till nästa C:

![image alt text](image_1.png)

Ju lägre nummer på oktaven ju lägre ton (motsvarar den vänstra sidan av ett piano) och ju högre oktavnummer desto högre ton (motsvarar den högra sidan av ett piano).

Nu ska du få prova att koda "Blinka lilla stjärna" med noter istället för MIDI-toner.

1.	Öppna en ny buffer i Sonic Pi.

2.	Då testar vi att skriva "Blinka lilla stjärna" med noter istället. Gör som på bilden:

![image alt text](image_2.png)

> Testa ditt program! Klicka på RUN. Låter melodin som den du gjorde med MIDI-toner i förra uppgiften?


## 2: Release, amplitud och slumpnoter
Du kan ge olika input till tonerna, det vill säga ge kommandon som beskriver hur du vill att tonerna ska låta. Det gör du i en kommaseparerad lista efter tonen:

3.	Använd **release** för att bestämma hur länge en ton ska låta. Default är 1.

![image alt text](image_3.png)

4.	Använd **amplitud** för att bestämma hur högt en ton ska låta. Hög amplitud, högt ljud. Låg amplitud, lågt ljud. Testa!

![image alt text](image_4.png)

5.	Använd **rrand_i** för slumpmässiga toner. Vad är det som händer här egentligen? Jo, vi har skrivit kod som instruerar Sonic Pi att slumpmässigt välja noter med värden mellan 60 och 95 och så spelar vi det i en oändlig låt.

![image alt text](image_5.png)

> Testa ditt program! Klicka på RUN och ändra i koden medan du lyssnar. Prova dig fram!

## 3: Byta synthljud
Vi kan göra det ännu mer spännande genom att byta ut vilken **synth** vi använder oss av. Default, det som blir om du inte anger någon synth alls, är en som heter *beep*.

6. För att byta synth behöver du skriva koden **use_synth :[namnet på synthen]**. Här i exemplet använder vi **use_synth :saw**.

7.	Testa ur det låter med och utan synthen *saw*:

![image alt text](image_6.png)

8. Du kan alltså använda olika synthljud i Sonic Pi. Hitta din favorit! Längst upp i koden, skriv **use_synth :**. Efter kolon får du förslag på synthar som du kan använda. Testa till exempel **use_synth :fm**  eller **use_synth :dull_bell**.

![image alt text](image_7.png)

> Testa ditt program! Klicka på RUN och ändra i koden medan du lyssnar. Prova dig fram och hitta synthljud som du tycker om!

## 4: Använda samplingar
I den här delen ska vi kombinera det vi har lärt oss hittills med att använda samplingar, det vill säga förinspelade ljud som finns tillgängliga i Sonic Pi. En SAMPLING är ett inspelat ljud från vad som helst, det kan till exempelvis vara ljudet av en kaffemaskin eller från en bil.

9. För att använda samplingar, så behöver du skriva koden **sample :[namnet på samplingen]**. Testa till exempel de som du ser på bilden här:

![image alt text](image_8.png)

**Tips!** Märker du att sleep-kommandot inte väntar in att ett ljud ska avslutas? Det kontrollerar bara när nästa ljud ska börja! Så om en sampling är längre än pausen så kommer nästa ljud börja spelas innan samplingen är klar. Ändra värdet på **sleep** om du vill ha längre paus.

10. Nu ska du få prova att ändra hur samplingen spelas upp. Använd **rate:** och jämför skillnaden när du sätter olika värden. 0.5 är dubbelt så lång som 1, med lägre oktav.

![image alt text](image_9.png)

11. Prova att sätta **rate:** till **-1**. Kan du höra vad som händer? Jo, samplingen spelas baklänges!

12. Nu får du testa olika samplingar i Sonic Pi. Hitta din favorit! Längst upp i koden, skriv **sample :** Efter kolon kommer du få förslag på samplingar som du kan använda. Testa dig fram med hjälp av denna lista på sample-prefix:

* **sample :ambi_**
* **sample :bass_**
* **sample :elec_**
* **sample :perc_**
* **sample :guit_**
* **sample :drum_**
* **sample :misc_**
* **sample :bd_**

> Testa ditt program! Klicka på RUN. Prova att ändra samplingar medan du lyssnar och skapa musik med ljuden!

## 5: Använda studioeffekter
En av de roligaste delarna av Sonic Pi är möjligheten att enkelt lägga studioeffekter (FX) till sina ljud!

13. För att använda effekter på samplingar, skriver du koden **with_fx :[namnet på studioeffekten] do [ljudet du vill använda studioeffekten på] end**.

14. Testa att lägga till studioeffekten **echo**, eko-effekt på dina ljud. Lyssna med och utan effekten för att höra skillnaden:

![image alt text](image_10.png)

15. Prova dig fram med olika effekter. Här är en lista med exempel på tillgängliga studioeffekter som du kan använda:

* **:wobble**
* **:reverb**
* **:echo**
* **:distortion**
* **:slicer**

> Testa ditt program! Klicka på RUN. Prova att ändra studioeffekter medan du lyssnar och hör hur ljuden förändras!


## Färdig!
Grattis, nu har du lärt dig att programmera musik! I nästa uppgift får du fler tips på hur du kan skapa egen musik med Sonic Pi. Men redan här har du några utmaningar om du vill testa dig fram på egen hand:

## Utmaning 1: Fritt skapande av musik!
I den här utmaningen får du använda din fantasi och dina nyligen lärda kunskaper i Sonic Pi för att testa dig fram i den digitala musikskapandets härliga och oändliga värld!

Kan du kanske:

1.	Skapa en helt ny låt?

2.	Göra en egen version av Blinka lilla stjärna?

3.	Översätta en av dina favoritlåtar till Sonic Pi?

De flesta kända melodier kan du hitta noterna till på nätet. <a href="http://www.spelapiano.org/latar.html" target="_blank"> **Till exempel här!**</a>
Men det kräver att du kan läsa noter, om inte rekommenderar vi alternativ 1 eller 2.

## Utmaning 2: Musik till "Framtidens musikspelare"
Vill du göra din egen musik i Sonic Pi till Scratch-uppgiften <a href="http://www.kodboken.se/start/skapa-musik/uppgifter-i-scratch/framtidens-musikspelare" target="_blank"> **Framtidens musikspelare**</a>? Du behöver göra två olika låtar, till exempel en glad och en arg låt, eller så många som behövs för din musikspelare.

Om du vill spara din musik i Sonic Pi, finns en <a href="https://www.kodboken.se/start/skapa-musik/uppgifter-i-sonic-pi/spara-musik-i-sonic-pi" target="_blank"> **instruktion för det här**</a>.

## Tips på fler låtar!
Här är exempel på andra låtar som vi har översatt till Sonic Pi, som du kan bygga vidare på. Följ koden på bilden och skriv in i ditt program. Testa då och då och försök lyssna om det låter rätt!

### Star wars
![image alt text](image_13.png)

### Super Mario Bro
![image alt text](image_14.png)
