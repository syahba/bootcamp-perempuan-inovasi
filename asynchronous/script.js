const url = "https://pokeapi.deno.dev/pokemon?limit=10";

const getData = async () => {
    try {
        const fetchData = await fetch(url);
        const pokemon = await fetchData.json();

        const container = document.getElementById('list-pokemon');
        pokemon.map((value) => { // loop untuk buat card setiap data
            container.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${value.imageUrl}" class="card-img-top" alt="${value.name}">
                    <div class="card-body">
                        <h5 class="card-title">${value.name}</h5>
                        <p class="card-text">${value.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            `;
        });
    } catch (err) {
        console.log(err);
    }
}

getData(); // panggil function untuk start process