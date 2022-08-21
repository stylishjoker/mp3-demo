const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const displayHeader = {
  Searchs: [
    {
      content: "Nhập tên bài hát, nghệ sĩ, MV...",
      incon: '<i class="fa-solid fa-magnifying-glass"></i>',
    },
  ],
  options: [
    {
      name: "theme",
      icon: "./assest/imglogo/headerOption/t-shirt.png",
    },
    {
      name: "upload",
      icon: "./assest/imglogo/headerOption/dowload.png",
    },
    {
      name: "setting",
      icon: "./assest/imglogo/headerOption/settings.png",
    },
    {
      name: "profile",
      icon: "./assest/imglogo/headerOption/profile.png",
    },
  ],
  tabUIs: [
    {
      name: "personal",
      class: "tab-personal",
    },
    {
      name: "discover",
      class: "tab-discover",
    },
    {
      name: "zingchart",
      class: "tab-zingchart",
    },
    {
      name: "radio",
      class: "tab-radio",
    },
    {
      name: "follow",
      class: "tab-follow",
    },
  ],
  innersearch: () => {
    const Html = displayHeader.Searchs.map((Search) => {
      return `
            ${Search.incon}
              <input class="head-search-bar" type = "text" placeholder = "${Search.content}">
        `;
    });
    $(".head-search").innerHTML = Html.join("");
  },
  innerOption: () => {
    const Html = displayHeader.options.map((option) => {
      return `
        <li><img src = "${option.icon}"></li>
      `;
    });
    $(".head-option").innerHTML = `<ul>${Html.join("")}</ul>`;
  },
  innerTabUI: () => {
    const Html = displayHeader.tabUIs.map((tabUI) => {
      return `
        <div class="tabUI ${tabUI.class}"></div>
      `;
    });
    $(".container").innerHTML = Html.join("");
  },
  handleBorderSearch: () => {
    const result = $(".head-search");
    result.onclick = () => {
      result.style.background = "rgba(0, 0, 0, 0.05)";
    };
  },
  start: () => {
    displayHeader.innersearch();
    displayHeader.handleBorderSearch();
    displayHeader.innerOption();
    displayHeader.innerTabUI();
  },
};
displayHeader.start();
