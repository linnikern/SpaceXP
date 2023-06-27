document.addEventListener("DOMContentLoaded", function () {
  
  // Obtém os elementos HTML
  const playButton = document.querySelector("#play")
  const videoElement = document.querySelector("#screen video")

  // Adiciona o evento de clique ao botão play
  playButton.addEventListener("click", function () {
    if (videoElement.paused) {
      videoElement.play() // Reproduz o vídeo se estiver pausado
    } else {
      videoElement.pause() // Pausa o vídeo se estiver reproduzindo
    }
  })
})
document.getElementById('icon4').addEventListener('click', function() {
      var videoElement = document.querySelector('#screen video');
      var videoURL = videoElement.getAttribute('src');
      
      var downloadLink = document.createElement('a');
      downloadLink.href = videoURL;
      downloadLink.download = 'video.mp4';
      downloadLink.click()
})
function copyPageURL() {
  var pageURL = window.location.href
  navigator.clipboard
    .writeText(pageURL)
    .then(function () {
      console.log("Page URL copied to clipboard")
    })
    .catch(function (error) {
      console.error("Unable to copy page URL: ", error)
    })
}
var icon1 = document.getElementById("icon1")

icon1.addEventListener("click", function () {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen()
  } else if (document.documentElement.mozRequestFullScreen) {
    // Firefox
    document.documentElement.mozRequestFullScreen()
  } else if (document.documentElement.webkitRequestFullscreen) {
    // Chrome, Safari e Opera
    document.documentElement.webkitRequestFullscreen()
  } else if (document.documentElement.msRequestFullscreen) {
    // Internet Explorer/Edge
    document.documentElement.msRequestFullscreen()
  }
})
var icon1 = document.getElementById("icon1")

icon1.addEventListener("click", function () {
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    // Se a página estiver em modo de tela cheia, saia do modo de tela cheia
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  } else {
    // Caso contrário, entre no modo de tela cheia
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen()
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen()
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen()
    }
  }
})

