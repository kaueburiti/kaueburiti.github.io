function getImage(url){
  return new Promise(function(resolve, reject){
      var img = new Image()
      img.onload = function(){
          resolve(url)
      }
      img.onerror = function(){
          reject(url)
      }
      img.src = url
  })
};

export function loadBackgroundImage(image, headerClassName,fadeInClass) {
  getImage(image).then(function(loadedImage) {
    const header = document.getElementsByClassName(headerClassName)[0];
    header.style.backgroundImage = `url('${loadedImage}')`;
    header.classList.add(fadeInClass);
  }).catch(function(errorImage) {
    console.log('Error ' + errorImage);
  })
}
