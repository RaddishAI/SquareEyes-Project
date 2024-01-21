const displayMovieDetails = () => {
    const detailsElement = document.getElementById('movieDetails');
    if (detailsElement) {
        const movie = JSON.parse(localStorage.getItem('selectedMovie'));

        if (movie) {
            detailsElement.innerHTML = `
                <h1>${movie.title}</h1>
                <img src="${movie.image}" alt="Cover of ${movie.title}">
                <p>${movie.description}</p> <!-- Assuming there is a 'description' field -->
            `;
        } else {
            detailsElement.textContent = 'Movie not found';
        }
    }
};

displayMovieDetails();