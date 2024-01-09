const resultsContainer = document.querySelector(".results");

const urlSquareEyes ="https://api.noroff.dev/api/v1/square-eyes";
// const url = "https://cat-fact.herokuapp.com/facts";
// const url = "https://api-rawg.io/api/games";

async function getMovies (){
    const respons = await fetch (urlSquareEyes);
    const json = await respons.json();

    console.log(json);

    const result = json.all;

    /* resultsContainer.forEach(function)
    results.forEach(function (result) {
        resultsContainer.innerHTML += `<div>${result._id}</div>`
    }); */

    console.log(urlSquareEyes);

}

getMovies ();

/* async function callApi () {
    const respons = await fetch (urlSquareEyes);
    const json = await respons.json();

    console.log(json);

    const result = json.all;

    results.forEach(function (result) {
        resultsContainer.innerHTML += `<div>${result._id}</div>`
    });
}

callApi(); */