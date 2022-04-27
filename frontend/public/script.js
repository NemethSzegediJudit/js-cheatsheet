//Legelső lépések: backend és frontend mappa, benne megfelelő helyen a fájlok --> html, benne root id-jű div. a két js fájl legyen belinkelve a html elejébe, megfelelő sorrendben

const beerCardComponent = function (name, company, type) {
    console.log(company)
    return `
        <div class="card" >
            <div class="beerName">${name}</div>
            <div class="beerCompany">${company}</div>
            <div class="beerType">${type}</div>
        </div>
        `
}


//ha ez nem függvény lenne, hanem sima string, akkor nem lehetne beletenni változó értékeket paraméterként.
//a függvény paramétereinek (name, company, type) bármilyen szó megadható, csak azt következetesen kell utána használni




const beerTitleComponent = `
    <h1>Beers</h1>
`;
//alább beerTitleComponent néven létrehoztunk egy változót, amit fentebb "határoztunk meg". Ehelyett az is egy jó megoldás lett volna, ha nem változót hozunk létre argumentumként, hanem a fenti `` között lévő részt illesztjük a változó nevének helyére.

const loadEvent = function () {
    const rootElement = document.getElementById("root");
    console.log(rootElement);
    rootElement.insertAdjacentHTML("beforeend", beerTitleComponent) //az insertAdjacentHTML egy metódus (ami már eleve meg volt írva, mi csak használjuk), ami 2 argumentumot kér (amik stringek): egy position stringet és egy olyan stringet, amit html kóddá tud konvertálni

    console.log(beers.cards);
    console.log(beers.logo)

    //az "of" után a tömb nevét kell beírni, ezt jelen esetben fentebb határoztuk meg
    //az "of" elé bármi írható, kisbetűvel, egyes számban
    //tömb esetében for ciklust használunk

    for (const beer of beers.cards) {
        console.log(beer);
        //console.log(beers.cards[0].title) --> Ehelyett hoztuk létre a beer iterátort.
        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub, beer.text))
    }
}

//FOR, FOR OF CIKLUSOKAT ÁTNÉZNI. EXTRA FELADAT: KAPUNK EGY UGYANILYEN ADATSTRUKTÚRÁJÚ "DOLGOT" (MOZIFILMEKRŐL) --> DISCORD --> IMPORTANT NOTES. ÉRDEMES EGY ÚJ REPOBAN UGYANEZT MEGCSINÁLNI.

//Ezzel a ciklussal végiglépkedek egy tömb elemein, ennek a tömbnek az elérési útvonala a beers nevű változó cards kulcsán lévő tömb. És ezt a folyamatot elnevezem, ez az elnevezés az iterátor. Később erre hivatkozom. 

//Attól függ, melyik for ciklust használom, hogy van-e adat vagy sem. Ha van adat: for of. Ha nincs: "sima" for (azaz i++).



window.addEventListener("load", loadEvent)

//a js azonnal létrehoz egy window objektumot, amit lát a böngésző.
//minden script.js-ben benne kell lennie a 26-os sorban lévő dolgoknak.
//addEventListener: eseményfigyelő