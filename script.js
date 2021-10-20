async function loadEvent() {
    const rootElement = document.getElementById("root");

    const res = await fetch("https://restcountries.com/v3.1/name/peru");
    const peru = await res.json();

    console.log(peru);

    const peruO = peru[0];
   

    const peruHTML =`
        <section class="independent">
            <img src="${peruO.flags.png}" alt="">
            <h1>${peruO.name.official}</h1>
            <li>${peruO.capital[0]}</li>
            <ul>
                <li>First language</li>
            </ul>
            // <h5>I've never met the see</h5>
        </section>
    `;

    rootElement.insertAdjacentHTML(`beforeend`, peruHTML);
}

window.addEventListener("load", loadEvent);