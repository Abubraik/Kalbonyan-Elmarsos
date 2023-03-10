const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const startaddMovieButton = document.querySelector("header button");
const comfirmAddMovieButton = addMovieModal.querySelector(".btn--success");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else entryTextSection.style.display = "none";
};

const deleteMovie = (id) => {
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
  cancelMovieDeletion();
  updateUI();
};

const cancelMovieDeletion = () => {
  toggleBackdropModal();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (id) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdropModal();

  const cancelDeleteButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeleteButton = deleteMovieModal.querySelector(".btn--danger");

  cancelDeleteButton.removeEventListener("click", cancelMovieDeletion);
  cancelDeleteButton.addEventListener("click", cancelMovieDeletion);

  confirmDeleteButton.replaceWith(confirmDeleteButton.cloneNode(true));

  confirmDeleteButton = deleteMovieModal.querySelector(".btn--danger");
  confirmDeleteButton.addEventListener("click", deleteMovie.bind(null, id));
  // deleteMovie(id);
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

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdropModal();
};

const clearMovieInput = () => {
  for (const input of userInputs) {
    input.value = "";
  }
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  toggleBackdropModal();
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
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdropModal();
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
  closeMovieModal();
  cancelMovieDeletion();
  clearMovieInput();
};

startaddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
comfirmAddMovieButton.addEventListener("click", addMovieHandler);
