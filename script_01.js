/********** Funktionen 01 **********/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test()
{
    console.log("Hallo Frat!");
}

/********** Funktionen 02a **********/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen() 
{
    const firstName = "Frat"; // Variable --> lokal scope
    console.log("Hallo " + firstName + "!");
}

// ausgabeNamen();
// console.log(firstName);  // Fehler --> lokal!!!

/********** Funktionen 02b **********/
// 2b. Parametrisierung + Datenübergang von AUSSEN

function ausgabeNamenParam(firstName)
{
    if (firstName == "" || firstName == undefined)
    {
        firstName = "Nobody"
    }
 
    console.log("Hallo " + firstName + "!");
}

// ausgabeNamenParam("Frat"); // --> Argument(e) args
// ausgabeNamenParam("Andreas");
// ausgabeNamenParam("Neilos");
ausgabeNamenParam(prompt("Bitte Vornamen eingeben:"));
ausgabeNamenParam();