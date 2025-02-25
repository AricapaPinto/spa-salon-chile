let d = document,
  ls = localStorage;

export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

  console.log($selectors);

  // variables para cambiar el icono
  let moon = '<i class="ri-moon-fill"></i>',
    sun = '<i class="ri-sun-fill"></i>';

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.innerHTML = moon;
    ls.setItem("theme", "light");
  };
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.innerHTML = sun;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.closest(btn)) {
      // console.log($themeBtn.textContent);
      // console.log("Ingreso Al click del btn");
      if ($themeBtn.innerHTML === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
