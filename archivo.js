let elementos = ''
fetch('https://rickandmortyapi.com/api/character')

    .then(Response => {
        // console.log(response.json());
        return Response.json();
    })
    .then(data => {
        document.getElementById('demo').innerHTML = "<h1>HOLA</h1>";
        console.log(data);
        console.log(data.info);
        console.log(data.info.pages);
        console.log(data.results);
        console.log(data.results[0]);
        console.log(data.results[0].id + " - " + data.results[0].name);
        console.log(data.results[0].name);

        // console.log(data.results[15].species);
        for (let i = 0; i < data.results.length; i++) {

            // elementos = elementos + `<li>${data.results[i].name}</li>`;
            elementos += `<li>${data.results[i].name}<img src="${data.results[i].image}" alt="">     </li>   `;
            // console.log(data[i].results.species);
            // console.log(data.results[i].name);
        }

        console.log(elementos)

        document.getElementById('posts').innerHTML = elementos;
     
        //(data.results[15].species);
    })