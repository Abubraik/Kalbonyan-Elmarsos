const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const startaddMovieButton = document.querySelector("header button");
const comfirmAddMovieButton = addMovieModal.querySelector(".btn--success");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else entryTextSection.style.display = "none";
};

const deleteMovieHandler = (id) => {
  let index = 0;

  for (const movie of movies) {
    if (movie.id === id) {
      break;
    }
    index++;
  }

  movies.splice(index, 1);
  const list = document.getElementById("movie-list");
  list.children[index].remove();
};

const renderNewElement = (id, title, imageUrl, rating) => {
  const newElement = document.createElement("li");
  newElement.className = "movie-element";
  newElement.innerHTML = `
  <div class = "movie-element__image">
  <img src = "${imageUrl}" alt = "${title}">
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
  </div>
  `;

  newElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const list = document.getElementById("movie-list");
  list.append(newElement);
};

const toggleBackdropModal = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdropModal();
};

const clearMovieInput = () => {
  for (const input of userInputs) {
    input.value = "";
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter a valid value");
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startaddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
comfirmAddMovieButton.addEventListener("click", addMovieHandler);
