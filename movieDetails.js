const displayMovieDetails = () => {
    const detailsElement = document.getElementById('movieDetails');
    if (detailsElement) {
        const movie = JSON.parse(localStorage.getItem('selectedMovie'));

        if (movie) {
            detailsElement.innerHTML = `
                
                <h1>${movie.title}</h1>

                <div class ="movie1">
                    <div class ="movie2">
                        <div class="left">
                        <img src="${movie.image}" alt="Cover of ${movie.title}" class="coverPhoto">
                        </div>
                        <div class="right">
                            <ul class="movieUl">
                                <li class="movieInfo2">
                                    <h2>Description:</h2>
                                    <p id="movieDisc">
                                        ${movie.description}
                                    </p>
                                
                                <li class="movieInfo">
                                    <p class="info">
                                    <h2>Year: </h2>
                                    <p class="backInfo">
                                    ${movie.released}</p>
                                </li>
                                <li class="movieInfo">
                                <img class="smallLogo" src="images/IMDB.png" alt="IMDB logo">
                                <p class="backInfo">${movie.rating}</p>
                                </li>
                                <li class="movieInfo">
                                <div class="price">
                                    <p>${movie.discountedPrice}</p>
                                    <a href="/pages/checkout.html"><img src="images/addBasket.png" alt="Add to basket" id="addBasket"></a>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        } else {
            detailsElement.textContent = 'Movie not found';
        }
    }
};

displayMovieDetails();