/********** Funktionen 01 **********/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test()
{
    console.log("Hallo Welt!");
}

/********** Funktionen 02a **********/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen() 
{
    const firstName = "Welt"; // Variable --> lokal scope
    console.log("Hallo " + firstName + "!");
}

// ausgabeNamen();
// console.log(firstName);  // Fehler --> lokal!!!

/********** Funktionen 02b **********/
// 2b. Parametrisierung + Datenübergang von AUSSEN

function ausgabeNamenParam(firstName)
{
    console.log("Hallo " + firstName + "!");
}

ausgabeNamenParam("Welt"); // --> Argument(e) args
ausgabeNamenParam("Mars");
ausgabeNamenParam("Sonne");