function showHourText() {
  const message = document.querySelector(".container-box-txt")
  const img = document.querySelector(".container-box-img")
  const date = new Date()
  const hour =
    String(date.getHours()).length <= 1
      ? `0${date.getHours()}`
      : date.getHours()
  const minutes =
    String(date.getMinutes()).length <= 1
      ? `0${date.getMinutes()}`
      : date.getMinutes()
  const seconds =
    String(date.getSeconds()).length <= 1
      ? `0${date.getSeconds()}`
      : date.getSeconds()

  message.innerHTML = `Agora são ${hour}:${minutes}:${seconds}`

  if (hour >= 0 && hour < 12) {
    img.src = "images/morning.jpg"
    document.body.style.backgroundColor = "#557b94"
  }
  else if (hour >= 12 && hour <= 18) {
    img.src = "images/afternoon.jpg"
    document.body.style.backgroundColor = "#5a4427"
  } else {
    img.src = "images/night.jpg"
    document.body.style.backgroundColor = "#181822"
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    showHourText()
  }, 1000)
})
