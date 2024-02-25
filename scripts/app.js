const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const movieYear = document.querySelector(".userInputYear");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");
const btn = document.querySelector(".button");
const movieTitleToDisplay = document.querySelector(".favoriteMovieTitle");
const movieYearToDisplay = document.querySelector(".favoriteMovieYear");

let titleInStorage = localStorage.getItem("title");
let yearInStorage = localStorage.getItem("year");
let imageUrlInStorage = localStorage.getItem("imageUrl");

if (titleInStorage && imageUrlInStorage) {
  movieTitleToDisplay.textContent = titleInStorage;
  movieYearToDisplay.textContent = yearInStorage;
  container.style.backgroundImage = `linear-gradient(rgba(156, 156, 232, 0.715), rgba(176, 145, 145, 0.732))),
    url('${imageUrlInStorage}')`;
}

btn.addEventListener("click", () => {
  let movieTitleInput = movieTitle.value;
  let movieYearInput = movieYear.value;
  let posterUrlInput = moviePosterUrl.value;
  localStorage.setItem("title", movieTitleInput);
  localStorage.setItem("year", movieYearInput);
  localStorage.setItem("imageUrl", posterUrlInput);
  movieTitleToDisplay.textContent = movieTitleInput;
  movieYearToDisplay.textContent = movieYearInput;
  container.style.backgroundImage = `linear-gradient(rgba(156, 156, 232, 0.715), rgba(176, 145, 145, 0.732)), 
    url('${posterUrlInput}')`;
  movieTitle.value = "";
  movieYear.value = "";
  moviePosterUrl.value = "";
});
