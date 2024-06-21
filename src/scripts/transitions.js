const images = document.querySelectorAll(".animated-area");
//console.log(images);

function trigerAnimation(entries) {
  entries.forEach(entry => {
    //const image = entry.target.querySelector("img");
    /* console.log(entry); */
    const text = entry.target.querySelector(".animate");

    //true
    //image.classList.toggle("unset", entry.isIntersecting);
    text.classList.toggle("unset", entry.isIntersecting);
  });
}
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

const observer = new IntersectionObserver(trigerAnimation, options);
images.forEach(image => {
  observer.observe(image);
});
