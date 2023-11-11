const moveHome = document.querySelector('.moveHome');
const movePreview = document.querySelector('.movePreview');
const moveTry = document.querySelector('.moveTry');

// 메뉴 탭 이동
if(window.innerWidth >= 758){
  const desktopMargin = 100;
  const homeHeight = window.pageYOffset + document.querySelector('#homeSection').getBoundingClientRect().top - desktopMargin;
  const previewHeight = window.pageYOffset + document.querySelector('#previewSection').getBoundingClientRect().top - desktopMargin;
  const tryHeight = window.pageYOffset + document.querySelector('#trySection').getBoundingClientRect().top - desktopMargin;
  moveHome.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event.target.classList.value);
    window.scrollTo({
      top: homeHeight
    })
  })
  movePreview.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event.target.classList.value);
    window.scrollTo({
      top: previewHeight
    })
  })
  moveTry.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event.target.classList.value);
    window.scrollTo({
      top: tryHeight
    })
  })
}
if(window.innerWidth < 768 && window.innerWidth >= 320){
  const mobileMargin = 80;
  const homeHeight = window.pageYOffset + document.querySelector('#homeSection').getBoundingClientRect().top - mobileMargin;
  const previewHeight = window.pageYOffset + document.querySelector('#previewSection').getBoundingClientRect().top - mobileMargin;
  const tryHeight = window.pageYOffset + document.querySelector('#trySection').getBoundingClientRect().top - mobileMargin;
  moveHome.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event.target.classList.value);
    window.scrollTo({
      top: homeHeight
    })
  })
  movePreview.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event.target.classList.value);
    window.scrollTo({
      top: previewHeight
    })
  })
  moveTry.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event.target.classList.value);
    window.scrollTo({
      top: tryHeight
    })
  })

  const mobilePreviewContentWrapper = document.querySelector('.previewContentWrapper');
  mobilePreviewContentWrapper.style.width = window.innerWidth * 3 + 'px';
  console.log(mobilePreviewContentWrapper.style.width); 
  // 여기 실행 안됐던 이유: innerWidth 값 구한 거에 단위 지정 안 해줘서
}
// console.log(homeHeight);
// console.log(previewHeight);
// console.log(tryHeight);

