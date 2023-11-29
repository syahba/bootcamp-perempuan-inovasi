const url = "https://pokeapi.deno.dev/pokemon?limit=10";

// get data from url with async await
async function getDataPokemon () {
    try { // run proses yang ingin dilakukan
        const response = await fetch(url); // ambil data dari url
        const pokemon = await response.json(); // nunggu data diambil, lalu dibuat bentuk json
        // dibuat await agar tidak error, agar proses convert jadi json hanya terjadi jika data sudah diambil dari url

        const res = pokemon.filter(value => value.types[0] == 'Water'); // ambil data dengan value tertentu
        console.log(res);
    } catch (err) { // catch jika ada error dari proses try
        console.log(err);
    }
}
getDataPokemon();

/*
// get data from url with promise
fetch(url)
    // ambil data dari url
    .then(res => {
        // console.log(res);
        return res.json();
    })
    // tampilin data json dari url
    .then(res => {
        console.log(res);
    })
    // catch jika ada error selama pengambilan data
    .catch(err => {
        console.log(err);
    })
*/