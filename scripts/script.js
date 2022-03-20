const carouselContainer = document.querySelector(".carousel");

const mainCarousel = new Flickity(carouselContainer, {
  cellAlign: "left",
  contain: true,
  autoPlay: 4500,
  groupCells: false,
  wrapAround: true,
});
