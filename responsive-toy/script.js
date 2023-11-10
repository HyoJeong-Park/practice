const moveHome = document.querySelector('.moveHome');
const movePreview = document.querySelector('.movePreview');
const moveTry = document.querySelector('.moveTry');
const homeHeight = window.pageYOffset + document.querySelector('#homeSection').getBoundingClientRect().top - 100;
const previewHeight = window.pageYOffset + document.querySelector('#previewSection').getBoundingClientRect().top - 100;
const tryHeight = window.pageYOffset + document.querySelector('#trySection').getBoundingClientRect().top - 100;
console.log(homeHeight);
console.log(previewHeight);
console.log(tryHeight);

moveHome.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target.classList.value);
  window.scrollTo({
    top: homeHeight
  })
})
movePreview.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target.classList.value);
  window.scrollTo({
    top: previewHeight
  })
})
moveTry.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target.classList.value);
  window.scrollTo({
    top: tryHeight
  })
})