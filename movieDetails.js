const displayMovieDetails = () => {
    const detailsElement = document.getElementById('movieDetails');
    if (detailsElement) {
        const movie = JSON.parse(localStorage.getItem('selectedMovie'));

        if (movie) {
            detailsElement.innerHTML = `
                <h3>${movie.title}</h3>

                <div class ="movie1">
                    <div class ="movie2">
                        <div>
                        <img src="${movie.image}" alt="Cover of ${movie.title}" class="coverPhoto">
                        </div>
                        <div>
                            <ul class="movieUl">
                                <li class="movieInfo">
                                    <p class="info">
                                    Year: </p>
                                    <p class="backInfo">
                                    ${movie.released}</p>
                                </li>
                                <li class="movieInfo">
                                <img class="smallLogo" src="images/IMDB.png" alt="IMDB logo">
                                <p class="backInfo">${movie.rating}</p>
                                </li>
                            </ul>
                            <div class="price">
                            <p>${movie.discountedPrice}</p>
                            <a href="checkout.html"><img src="images/addBasket.png" alt="Add to basket" id="addBasket"></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Description:</h3>
                        <p id="movieDisc">
                            ${movie.description}
                        </p>
                    </div>
                </div>
            `;
        } else {
            detailsElement.textContent = 'Movie not found';
        }
    }
};

displayMovieDetails();