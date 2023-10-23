const navLinksDropDown = [
  { name: "Disco Duro", path: "./discoDuro.html" },
  { name: "Controlador", path: "./controladores.html" },
  { name: "Extras", path: "./extras.html" },
  { name: "Bibliografia", path: "./bibliografia.html" },
];
const navLinks = [
  { name: "Inicio", path: "./index.html", dropdown: false },
  { name: "Menu", dropdown: true, items: navLinksDropDown },
];

let contenedor = document.querySelector(".navbar-nav");
navLinks.forEach(item => {
  if (!item.dropdown) {
    contenedor.innerHTML += `
    <li class="nav-item">
      <a class="nav-link ${document.title == item.name ? "active" : ""
      }" href=${item.path}> ${item.name} </a>
    </li>
    `;
  } else {
    contenedor.innerHTML += `
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
      >
        ${item.name}
      </a>
      <div class="dropdown-menu" _msthidden="4">
      ${createDropDownItems(item.items)}
      </div>
    </li>`;
  }
});

function createDropDownItems(Items) {
  let dropDownHTML = "";
  Items.forEach(subItem => {
    dropDownHTML += `<a class="dropdown-item ${document.title == subItem.name ? "active" : ""
      }" href=${subItem.path}>${subItem.name}</a>`;
  });
  return dropDownHTML;
}