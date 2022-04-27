console.log(beers)

const beersSectionComponent = function (inner, id) {
    return `
        <section id="${id}">${inner}</section>
    `
}

const beersCardComponent = function (title, sub, text) {
    return `
        <div class="card" >
            <div beers="${title}">${title}</div>
            <div beers="${sub}">${sub}</div>
            <div beers="${text}">${text}</div>
        </div>
        `
}

const loadEvent = function () {
    const rootElement = document.getElementById("root");
    for (const title; sub; text) {
        let sectionInner = ""
        console.log(title; sub; text)

        rootElement.insertAdjacentHTML("beforeend", beersSectionComponent(sectionInner, title.id));
    }
}

window.addEventListener("load", loadEvent)