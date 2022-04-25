/*
const, let, var kulcsszavakkal hozunk létre változókat

az egyenlőség jel bal oldalán szerepel a változó nevem jobb oldalán pedig az ehhez tartozó érték

a primitívek a következők: string, szám, boolean, undefined, null

*/

let aString = "this is a string"; //MINDIG idézőjelbe tesszük a stringet. Backtickkel ` több soros stringet tudunk létrehozni, a " és ' idézőjelekkel pedig csak egy sorosat.

let aNumber = 1; //Ezt nem szabad idézőjelbe tenni.

let aBoolean = false; //Ezt sem szabad idézőjelbe tenni.

let anUndefined = undefined; //Ezt sem szabad idézőjelbe tenni.

let aNull = null; //Ezt sem szabad idézőjelbe tenni.

let notANumber = NaN //Ezt sem szabad idézőjelbe tenni.

console.log(typeof aString)

console.log(typeof anUndefined) //Undefined a típusa.

console.log(typeof aNull) //Objektum a típusa.

console.log(typeof notANumber) //Szám a típusa.

console.log(aFunction1()); //Ez is működik.

function aFunction1() {
    //Ez a függvény belseje.

    //a függvény mindenképpen return-öl, ha lefuttatjuk. Ha nem adunk meg return-t, akkor undefined-ot ad vissza.

    return "this is a function"
}

//A return 2 dolgot csinál: lezár egy folyamatot és visszaad egy értéket. A return alatti dolgok nem futnak le.

const aFunction2 = function () {
    //Ez is egy függvény, majdnem ugyanúgy viselkedik, mintha a függvénynek neve lenne.

    return "this is another function"
}

console.log(aFunction1()); //Ez is működik.

console.log(aFunction2()); //Minden változóba mentett dolgunkhoz csak azokban a sorokban férünk hozzá, amelyek utána jönnek.


if (true) {
    //ide jön az, ha teljesül a feltételünk
}
else {
    //ide jön az, ha nem teljesül a feltételünk
}

console.log("0" == 0);
console.log("0" === 0);
//3db = összehasonlításra használjuk

//tömb/felsorolás - for ciklussal lehet rajtuk végigmenni

const arr = [34, 15, 88, 2] //ez egy tömb, hiszen négyzetes zárójelben vannak

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}

for (const item of arr) {
    console.log(item)
}

//ez a 2 ugyanazt csinálja, a cikluson belül ugyanúgy tudunk ifelni
