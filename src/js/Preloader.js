class Preloader {
  constructor() {
    this.run_preloader();
  }
  run_preloader() {
    let preloader = document.querySelector('.preloader');
    if (preloader) {
      window.addEventListener('load', e => {
        preloader.classList.add("preloader--finished");
      });
    }
  }
}
export default Preloader;