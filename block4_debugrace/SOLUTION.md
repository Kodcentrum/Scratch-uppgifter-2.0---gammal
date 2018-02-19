# Debug Race – lösning

Detta är buggarna i spelet:

* Skalbaggen går 5000 steg istället för t.ex. 2 i varje iteration

* Piltangerna som roterar skalbaggen är ombytta

* Skalbaggen förflyttas med en **repetera**-loop istället för en **för alltid**-loop.

* Den gröna färgen som ska känna av gräsmattan är fel nyans.

* Variabeln **"Liv"** ändras med 1 när skalbaggen rör gräset och inte -1

* Bananerna slumpas bara ut på en fjärdedel av banan p.g.a felaktiga slumptal

* Meddelandet **"starta"** skickas inte när skalbaggen rör gräset

* Meddelandet **"starta"** skickas inte när skalbaggen rör mållinjen

* Det finns två loopar som startas när meddelande **"starta"** tas emot, det skapar problem när skalbaggen rör mållinjen. Variabeln **"varv"** ökar ibland med mer än 1.

* Istället för att jämföra om variabeln **"varv"** är 5 för att avsluta spelet så jämförs 5 med texten *"varv"* och villkoret kommer därför aldrig vara sant.

* Bakgrunden byts inte tillbaka banan när skalbaggen har gjort 5 varv och man vill spela en gång till
