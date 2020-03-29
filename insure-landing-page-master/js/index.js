let navbarToggle = document.querySelector(".navbar-collapse")
navbarToggle.addEventListener("click", () => {
  let toggleTargetName = navbarToggle.getAttribute("target")
  let toggleTarget = document.querySelector(`#${toggleTargetName}`)
  toggleTarget.classList.toggle("active")
  navbarToggle.classList.toggle("active")
})
