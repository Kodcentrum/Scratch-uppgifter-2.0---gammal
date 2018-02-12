# Fantasisynth med Makey Makey

Om du har tillgång till Makey Makey kan du koppla den till din fantasisynth, som du skapat i Scratch, och spela musik på riktiga äpplen! För att göra det kommer du att behöva ändra lite i koden i ditt Scratch-projekt som du skapade i uppgiften <a href="https://www.kodboken.se/start/skapa-musik/uppgifter-i-scratch/fantasisynth" target="_blank"> Fantasisynth </a>

Makey Makey är ett kretskort som kan användas för att styra program på din dator med saker som är elektriskt ledande, som till exempel en frukt, sked eller en kompis!

Du kan titta på en film som visar hur du använder Makey Makey här:  
 <a href="https://www.youtube.com/watch?v=ICd7HzurorM&feature=youtu.be&list=PLD0HD_3AJljWqSuZ31DeGi2Iv7Yzp0NRp" target="_blank">  Interactive Institute - introduktion till Makey Makey </a>

Här är ett exempelprojekt för hur du gör "Fantasisynth med Makey Makey" i Scratch: <a href="https://scratch.mit.edu/projects/130726473/" target="_blank">https://scratch.mit.edu/projects/130726473/</a>


![image alt text](image_6.png)


## 1: Koppla in Makey Makey
Vi kopplar in Makey Makeyn i datorn och testar hur den fungerar!Makey makeyn överför signaler från det ledande objektet, via kretskortet till datorn. De tangenter som finns på en Makey Makey är uppåtpil, nedåtpil, högerpil, vänsterpil,  mellanslag och musklick. Precis som om du skulle använda ett tangentbord och en mus.

![image alt text](image_0.png)

1.	 Ta fram kabeln med **USB** och **mini-USB**, det är den tjockaste kabeln i paketet. Koppla **mini-USB-kabeln** in i Makey Makeyn och **USB-kabeln** in i datorn. Då börjar Makey Makeyn att blinka.

![image alt text](image_1.png)

2.	Om det dyker upp meddelanden på skärmen, stäng ner dem.

3.	Koppla in en **alligatorkabel**, kabel med klämmor, längst ner på Makey Makeyn där det står **earth**. Kläm fast kabeln i några av hålen på metallytan. Det spelar ingen roll vilken färg kabeln har, vi använder orange här i exemplet.

4.	Koppla in en alligatorkabel i Makey Makeyn i hålen där det står **space**. Det betyder att du kopplar in den till **mellanslag** i datorn. Koppla andra klämman till någonting som du tror är ledande – en sked till exempel!

![image alt text](image_3.png)

> Testa om det fungerar! Ta tag i alligatorkabeln som är kopplad till **earth** i ena handen. Det gör du för att **jorda kopplingen** mellan Makey Makeyn och skeden. Rör samtidigt vid skeden. Om det lyser på Makey Makey betyder det att du leder ström! Du kan nu **öppna en texteditor** som Notepad eller Word för att testa om det blir **mellanslag** eftersom den är kopplad till **space**.

5.	Koppla nu in alla alligatorkablar i Makey Makeyn! Du kopplar alltså varsin alligatorkabel till hålen för alla fyra **piltangenter** och till **click**, på samma sätt som du gjorde med kabeln till space.

6.	Koppla den andra klämman på varje alligatorkabel vidare till vad som helst som kan leda ström - flera skedar eller något helt annat.

![image alt text](image_2.png)

> Testa om det fungerar! Prova dig fram och se vad som kan vara tangenter till din fantasisynth, du kanske vill spela på äpplen, bestick eller på dina kompisar?


## 2: Ändra kod i Scratch-projektet

Nu behöver du byta ut vilka tangenter som din fantasisynth spelas med, till de tangenter som finns på Makey Makeyn. På så sätt kommer du att kunna spela på fantasisynthen i Scratch!

7.	Dra ur Makey Makeyns USB-kabel ur datorn. **Gå till Scratch** och öppna ditt projekt som du gjorde i förra uppgiften, **"Fantasisynth"**. Välj **Spara som kopia** och döp ditt nya projekt till **"Fantasisynth med Makey Makey"**. På så sätt har du kvar den vanliga synthen också.

8.	Klicka på SCEN och titta på skripten som finns där och som du ska ändra i. Börja med skriptet som skickar meddelandet **"spela äpple"**. Ändra i blocket **när _ trycks ned** och byt ut **"a"** till **uppåtpil** i rullistan.

9. Gör på samma sätt med de andra tangenterna, men hoppa över **"äpple3"** tills vidare, för den ska ha ett specialskript. Byt ut koden så att:

    * Skriptet för **"spela äpple 2"** har **mellanslag**.
    * Skriptet för **"spela äpple 4"** har **vänsterpil**.
    * Skriptet för **"spela äpple 5"** har **nedåtpil**.
    * Skriptet för **"spela äpple 6"** har **högerpil**.

    ![image alt text](image_4.png)

10.	Klicka nu på skriptet för **"spela äpple 3"**. Denna ska skicka meddelandet när du klickar på musknappen. Därför behövs det ett skript som **för alltid** känner av **om musknappen är nedtryckt** och då **skickar meddelandet**.

11.	Du behöver också lägga in att **vänta tills musknappen inte är nedtryckt** innan programmet gör något annat.

    ![image alt text](image_7.png)

> Testa ditt projekt! Klicka på START. Använd  först tangentbord och mus och testa om skriptet fungerar. Händer det något när du klickar med musen? Spelas det en ton? Spelas det toner när du använder piltangenter och mellanslag?


## 3: Spela fantasisynth med Makey Makey
Nu ska du få testa om du kan spela "Blinka lilla stjärna" med dina ledande saker istället för tangentbord!

12.	 Koppla in Makey Makey i datorn med USB-kabeln.

13.	 Se till så att alla alligatorkablar är inkopplade i Makey Makey, i hålen för alla fyra **piltangenter**, **space**, **click** och att de med andra klämman sitter fast i dina saker som leder ström.

14.	 Se till så att en alligatorkabel är kopplad till **earth**. Håll i den andra klämman för att jorda kopplingen.

> Testa om det fungerar! Rör nu vid alla de olika saker som du har kopplat via Makey Makeyn till datorn. Vad händer? Kan du spela toner på din synth? Kan du lista ut hur du ska spela "Blinka lilla stjärna" med ditt nya instrument?

## Utmaning
Om du vill komponera egen musik med din fantasisynth har du här en tabell över miditoner (nummer 60, 62 och så vidare) som du kan använda i Scratch och som motsvaras av bokstavsnoter. Testa dig fram eller sök på nätet efter noter till din favoritmusik!



<a href="https://wiki.scratch.mit.edu/wiki/MIDI_Notes Scratch Wikipedia" target="_blank">Tabellen hittar du även här på Scratch Wikipedia.  </a>


## Färdig!
Grattis, nu har du gjort klart uppgiften.

**Glöm inte att spara ditt nya projekt!** Döp det gärna till uppgiftens namn så att du enkelt kan hitta den igen.

> **Testa ditt projekt**  
Visa gärna någon det som du har gjort och låt dem testa. Tryck på DELA för att andra ska kunna hitta spelet på Scratch. Gå ut till projektsidan och låt någon annan testa spelet!


## Frågeställningar

* Vad betyder att något är ledande?
* Kan du ge exempel på något som leder ström?
* Hur tror du att ström omvandlas till något som datorn kan förstå?
* Hur tror du att ditt program kan förstå när du rör vid dina ledande saker, till exempel skedar eller frukt?
