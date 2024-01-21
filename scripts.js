const squareMovieUrl = 'https://api.noroff.dev/api/v1/square-eyes/';
let data = []; 

// fetching the movie data 
function getMovies(){
    return fetch(squareMovieUrl)
    .then (response => {
        if (!response.ok) {
            throw new Error ("Network response was not ok");
        }
        return response.json();
    })
    .catch(error =>{
        console.error('Error:', error);
    });
}

function displayMovies() { 
    const postContainers = document.querySelectorAll('.post-container');

    data.forEach(product => {
        const generalProductElement = createGeneralProductElement(product);
        generateMoviePage(product); 
        postContainers.forEach(container => {
            container.appendChild(generalProductElement.cloneNode(true));
        });
        console.log(product)
    });
}

function createGeneralProductElement(product) {
    const generalProductElement = document.createElement('div');
    generalProductElement.dataset.id = product.id; 
    
    generalProductElement.innerHTML =
    `
        <img src="${product.image}" alt="Cover of ${product.title}">
        <br>
        <h2>${product.title}</h2>
    `;

    generalProductElement.addEventListener('click', () => {
        localStorage.setItem('selectedMovie', JSON.stringify(product));
        window.location.href = `movieDetails.html?id=${product.id}`;
    });

    return generalProductElement;
}

getMovies().then(newData => {
    data = newData
    displayMovies();
});


// generate pages based on arrays

function generateMoviePage(product) {
    const moviePage = document.createElement('html');
    moviePage.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Square eyes - ${product.title}</title>
            <link rel="stylesheet" href="style.css">
            <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
        </head>
        <body>
            <div id="post-container">
                <h2>${product.title}</h2>
                <img src="${product.image}" alt="Cover of ${product.title}">
                <p>${product.description}</p> <!-- Assuming there is a 'description' field -->
            </div>
            <script src="script.js"></script>
        </body>
        </html>
    `;
}
