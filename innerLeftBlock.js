// import handleEvent from "./ToastMessage.js"; 
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const displaySideBar = {
  introSideBars: [
    {
      name: "Nhạc cá nhân",
      icon: '<i class="fa-solid fa-list-ul"></i>',
    },
    {
      name: "Khám phá",
      icon: '<i class="fa-solid fa-compact-disc"></i>',
    },
    {
      name: "Zingchart",
      icon: '<i class="fa-solid fa-headphones"></i>',
    },
    {
      name: "Radio",
      icon: '<i class="fa-solid fa-radio"></i>',
    },
    {
      name: "Theo dõi",
      icon: '<i class="fa-solid fa-calendar-plus"></i>',
    },
  ],
  mainSideBars: [
    {
      name: "Nhạc Mới",
      icon: '<i class="fa-solid fa-circle-play"></i>',
      link: "#",
    },
    {
      name: "Thể loại",
      icon: '<i class="fa-brands fa-instalod"></i>',
      link: "#",
    },
    {
      name: "Top 100",
      icon: '<i class="fa-solid fa-ranking-star"></i>',
      link: "#",
    },
    {
      name: "MV",
      icon: '<i class="fa-solid fa-video"></i>',
      link: "#",
    },
  ],
  librarys: [
    {
      name: "Bài hát",
      icon: "./assest/iconSidebar/playlist.png",
      link: "#",
    },
    {
      name: "Play list",
      icon: "./assest/iconSidebar/list.png",
      link: "#",
    },
    {
      name: "Gần đây",
      icon: "./assest/iconSidebar/clock.png",
      link: "#",
    },
  ],
  tittles: [
    {
      name: "Tháng 1",
      link: "#",
    },
    {
      name: "Nhạc Quốc Tế",
      link: "#",
    },
    {
      name: "BXH",
      link: "#",
    },
  ],
  addLists: [
    {
      name: "Tạo play list mới",
      icon: '<i class="fa-solid fa-plus"></i>',
      link: "#",
    },
  ],
  innerIntroSidebar: () => {
    var htmlsSibar = "";
    displaySideBar.introSideBars.map((sideBar) => {
      return (htmlsSibar += `
                <div class = "sideBar_intro-element">
                    <a class = "sideBar_intro-item">
                    ${sideBar.icon}
                    <span>${sideBar.name}</span>
                    </a>
                </div>
            `);
    });
    htmlsSibar += '<div class="lineTab"></div>';
    $(".sideBar_intro").innerHTML = htmlsSibar;
  },
  innerMainSidebar: () => {
    var Html = "";
    displaySideBar.mainSideBars.map((mainSideBar) => {
      return (Html += `
        <div  class="scroll-item sideBar_special-main_element">
            <a class="sideBar_special-main_link" href= "${mainSideBar.link}">
                ${mainSideBar.icon}
                <span>${mainSideBar.name}</span>
            </a>
        </div>
        `);
    });
    $(".sideBar_special-main").innerHTML = Html;
  },
  innerBuyVip: () => {
    const Html = `
         <span>Nghe nhạc không quảng cáo <br> cùng  kho nhạc VIP</span>
         <br>
         <button>Mua VIP</button>
    `;
    $(".sideBar_special-adver").innerHTML = Html;
  },
  innerLibrary: () => {
    var h4 = "<h4>Thư viện</h4>";
    var Html = displaySideBar.librarys.map((library) => {
      return `
      <div class="libary-item">
        <a href = "${library.link}">
          <img src="${library.icon}" alt="">
          <span>${library.name}</span>
        </a>
      </div>
      `;
    });
    h4 = h4 + Html.join("");
    $(".sideBar_special-libary").innerHTML = h4;
  },
  innerTittlel: () => {
    const Html = displaySideBar.tittles.map((tittle) => {
      return `
        <a href="${tittle.link}"><h4>${tittle.name}</h4></a>
      `;
    });
    $(".sideBar_special-title").innerHTML = Html.join("");
  },
  innerAddList: () => {
    const Html = displaySideBar.addLists.map((addList) => {
      return `
        <a href = "${addList.link}">
          ${addList.icon}
          <span>${addList.name}</span>
        </a>
      `;
    });
    $(".sideBar_addList").innerHTML = Html.join("");
  },
  //fix
  // innerScroll: () => {
  //   const cd = $(".sideBar_special");
  //   console.log([cd]);
  //   cd.addEventListener('scroll', (event) => {
  //     console.log(cd.scrolllRight)
  // });

  // },
  start: () => {
    displaySideBar.innerIntroSidebar();
    displaySideBar.innerMainSidebar();
    displaySideBar.innerBuyVip();
    displaySideBar.innerLibrary();
    displaySideBar.innerTittlel();
    displaySideBar.innerAddList();
    // displaySideBar.innerScroll();
  },
};
//start
displaySideBar.start();
