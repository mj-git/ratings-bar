import "./styles.css";

const dots = document.querySelectorAll(".dot");
Array.from(dots).forEach((dot, idx, arr) => {
  dot.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("hovered")) {
      for (let i = idx; i < arr.length; i++) {
        arr[i].classList.remove("hovered");
      }
    } else {
      for (let i = 0; i <= idx; i++) {
        arr[i].classList.add("hovered");
      }
    }
  });
});
