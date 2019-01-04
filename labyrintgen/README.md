# Labyrintgenerator
*(Bidrag till kodboken.se)*

Vårt uppdrag är att skriva en labyrintgenerator i Scratch. 
* Man ska kunna välja bredd och höjd på labyrinten, som ska vara rektangulär.
* Det ska gå att ta sig mellan labyrintens fyra hörn. 
* Labyrinten ska se olika ut från gång till gång.
* En labyrintgenerator kan man ha nytta av i olika spel. Därför är det bra om vi har några få sprajtar som man kan importera med ryggsäcken.

Så här kan det se ut när vi är klara:

![Målbild för labyrinten](00-maze-goal.png)

Verkar det svårt? Vi tar ett steg i taget. Jag har formulerat en önskelista som kanske hjälper.

## Önskan 1. Det går att välja bredd och höjd på labyrinten

Den här önskan kan vi uppfylla genom att katten frågar om bredd och höjd. Vi sparar svaren i variablerna `BREDD` och `HÖJD`.

Pröva nu att göra en lösning på egen hand innan du går vidare.

### Ledtrådar

Här är några block som kan vara bra att ha:

![Användbara block](01-useful-blocks.png)

### Lösningsförslag
![Lösningsförslag. Det går att välja bredd och höjd på labyriten](01-solution.png)

Än så länge är det bara katten som frågar. Ingen labyrint syns än.

Jag har valt STORA BOKSTÄVER för variabler som används av flera block. Ett exempel är variabeln `BREDD`. Sådana globala variabler kan ge programfel som är svåra att hitta. Därför sätts deras värden bara en gång.

Variabler med små bokstäver används inom ett block.
 
### Förbättringsidéer

1. Behöver vi kontrollera indata bättre? Vad är rimliga värden på variablerna `BREDD` och `HÖJD`?

## Önskan 2. Det syns ett rutnät
Vi vill att det ser ut något i den här stilen om vi svarar `BREDD` 5 och `HÖJD` 3.

Om vi pekar med muspekaren på scenen så ser vi att Scratch har ett koordinatsystem där `X` går från &ndash;240 till 240 och `Y` går från &ndash;180 till 180. Våra yttersta prickar behöver ligga en liten bit in från kanten så att de syns. Jag har därför använt variablerna
`XSTART`,
`YSTART`,
`XSLUT` och
`YSLUT` som du kan se i bilden. Jag satte t.ex. `XSTART` till &ndash;230 för att hålla mig en bit från vänsterkanten. Genom att använda variabler och inte skriva t.ex. &ndash;230 direkt i koden kan jag justera storleken enkelt om det behövs.

![Koordinater](02-coords.png)
 
Med 5&times;3 rutor (bredd&times;höjd) behövs det ju sex hörnprickar på bredden och fyra på höjden. Avståndet mellan ytterhörnen på bredden är `XSLUT`&ndash;`XSTART` pixlar och genom att dividera med `BREDD` får vi antalet pixlar mellan hörnprickarna. Vi kallar det avståndet `XSTEG`. Se bilden, där `YSTEG` också visas.

### Ledtrådar

* Det kan vara bra att dela upp koden i flera block. Tänk på att du kan skapa egna block. Ett användbart block kan vara

![Rita hörn(B, H)](02-custom-block.png)

där `B` är bredden och `H` höjden. Det nedre vänstra hörnet kan t.ex. vara `(B, H) (0, 0)` och övre högra hörnet `(B, H) = (BREDD, HÖJD)`.

* Ändra gärna koden som du skrev i steg 1. Det är viktigt att skriva om kod som inte passar längre.

* Hörnprickarna kanske kan vara en ny klädsel hos katten? Då slipper vi skapa en ny sprajt.

* Några block som kan vara bra att ha:

![Sätt variabelns värde](02-set-variable.png)

![Stämpla](02-stamp.png)

### Lösningsförslag

![Lösningsförslag. Det syns ett rutnät](02-solution.png)

### Förbättringsidéer

## Önskan 3. Det finns en yttervägg

Så här kan det se ut när vi är klara:

![Labyrint med ytterväggar](03-Goal.png)

Det är fyra ytterväggar att rita. Kan du dela upp jobbet i mindre delar?

### Ledtrådar
* Det kan vara praktiskt att ha ett block för att rita en vägg med olika startpunkt och riktning.

![Blocket Rita vägg](03-Wall.png)

* Har vi ett block för att rita en vägg så kan vi använda det fyra gånger för de olika väggarna.

![Blocket Rita ytterväggar](03-Walls.png)

### Lösningsförslag

Här ser du de block som jag har lagt till eller ändrat. Resten är som innan.

![Koden för grön flagga](03-Top-complete.png)
![Förslag på Rita ytterväggar](03-Walls-complete.png)
![Förslag på Rita vägg](03-Wall-complete.png)

### Förbättringsidéer

## Önskan 4. Det finns innerväggar och man kan gå mellan labyrintens hörn
Just nu får vi den här rektangeln om vi svarar `BREDD` 6 och `HÖJD` 4:

![Labyrint med ytterväggar](04-start.png)

Utan innerväggar är det ingen labyrint. Men innerväggarna kan inte ritas hur som helst om vi vill kunna gå genom labyrinten.

Kan de här reglerna fungera?
* Regel 1. En rektangel som är minst 2 bred eller hög kan delas i två mindre rektanglar om vi ritar en rak innervägg som har ett hål någonstans.
* Regel 2. En rektangel som har bredd eller längd 1 kan inte delas i mindre bitar. Den duger som den är.

Vi behöver ett sätt att komma ihåg vilka rektanglar vi jobbar med.
* Vi kallar kom ihåg-listan för `ritlista`. Du ser den till höger i bilden.
* I `ritlista` sparar vi hörnen i rektanglarna som vi har kvar att fixa
* Till en början är det hela labyrinten med koordinaterna (0,0) och (6,4) för hörnen
* Koordinaterna (0,0) är nedre vänstra hörnet
* Koordinaterna (6,4) är övre högre hörnet

![Steg 1](04-ritlista-01.png) 

### Vi delar på höjden och får två mindre rektanglar

* I vår kod tar vi nu och delar rektangeln mitt på höjden. Det gör vi genom att lägga ihop y-koordinaterna och dela med 2: (0 + 4) / 2 blir 2.
* Väggen som delar den stora rektangeln ska alltså ha y = 2.
* Var hålet i vägggen ska vara slumpar vi fram med blocket *slumptal a till b*
* Vi ritar väggen och lämnar hålet som är en ruta brett. 
* Nu är vi klara med den stora rektangeln. Därför tar vi bort koordinaterna (0,0) och (6,4) ur listan och lägger dit koordinaterna för hörnen i de två mindre rektanglarna som vi strax ska rita väggar i
* Den undre, grönmarkerade rektangeln har hörnen (0,0) och (6,2)
* Den övre, gulmarkerade rektangeln har hörnen (0,2) till (6,4)

Så här ser det ut när vi är klara:

![Steg 1](04-ritlista-02.png) 

### Vi delar igen och får fler rektanglar

* Först i ritlistan ligger nu koordinaterna (0,0) och (6,2). De var grönmarkerade ovan
* Vi gör på samma sätt som vi gjorde för den stora rektangeln
* Du ser ändringarna i grönt och gult i bilden
* Rektangeln (0, 0) till (6,2) försvann ur ritlistan
* Den byttes ut mot de två mindre gröna och gula rektanglarna

![Steg 1](04-ritlista-03.png) 

### En delning till
* Vi gör likadant som ovan. Det nya är markerat med grönt och gult

![Steg 1](04-ritlista-04.png) 

### Bara små rektanglar kvar
* Första rektangeln i ritlistan är (0,0) till (6, 1)
* Den rektangeln har höjden 1 och kan därför inte delas på höjden. Vi tar bort den ur ritlistan som nu har tre rektanglar kvar

![Steg 1](04-ritlista-05.png) 

### Inga rektanglar kvar

Vi går igenom ritlistan och till slut är ritlistan tom och vi är färdiga:

![Steg 1](04-ritlista-06.png) 

### Ledtrådar

De här blocken kan vara bra att känna till:

![Användbara block](04-useful-blocks.png) 

### Lösningsförslag

Variabeln `ritlista` håller reda på alla rektanglar där vi ska rita innerväggar. Varje rektangel motsvaras av fyra värden i listan: `b`, `h` för nedre vänstra hörnet, `b1`, `h1` för övre högre hörnet i rektangeln.

![Kod 1](04-b1.png)
![Kod 2](04-b2.png)
![Kod 3](04-b3.png)
![Kod 4](04-b4.png)
![Kod 5](04-b5.png)

## Önskan 5. Väggarna delar sig horisontellt eller vertikalt, inte bara horisontellt som i nr 4

Det enda som behövs är att ändra
i funktionen *Rita vägg med hål* så att den ibland delar vertikalt istället för bara horisontellt.

### Lösningsförslag

Så här blev min version:

![Nya Rita vägg med hål](05-final.png)

[Här hittar du projektet på Scratch](https://scratch.mit.edu/studios/3568525/)

[Fler algoritmer för att skapa labyrinter finns här](https://github.com/theJollySin/mazelib/blob/master/docs/MAZE_GEN_ALGOS.md)
