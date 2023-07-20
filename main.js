// image-loading.js
document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('.blur-image')
  var blurThreshold = 50 // Adjust this value as needed

  function checkImagePosition() {
    images.forEach(function (image) {
      var imageRect = image.getBoundingClientRect()
      var viewportHeight =
        window.innerHeight || document.documentElement.clientHeight

      if (imageRect.top < viewportHeight - blurThreshold) {
        image.classList.remove('blur-image')
        image.classList.add('unblur-image')
      }
    })
  }

  // Check image position on page load
  checkImagePosition()

  // Check image position on scroll
  window.addEventListener('scroll', checkImagePosition)
})
