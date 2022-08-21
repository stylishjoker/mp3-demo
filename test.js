const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const option = {
  classBlockTab: ".sideBar_intro",
  classBlockPanes: ".container",
  classActive: "active-tab",
  classChild: ".sideBar_intro-element",
  classContainer: "",
  classPanes: "",
};

const handleClick = (option) => {
  $(".sideBar_intro").children[0].classList.add("active-tab");
  $(".container").children[0].classList.add("active-tab");

  const tabs = $$(".sideBar_intro-element");
  const panes = $$(".tabUI");
  const tabActive = $(".sideBar_intro-element.active-tab");
  const lineActive = $(".sideBar_intro .lineTab");

  lineActive.style.top = tabActive.offsetTop + "px";
  lineActive.style.height = tabActive.offsetHeight + "px";

  tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = () => {
      $(".sideBar_intro-element.active-tab").classList.remove("active-tab");
      $(".tabUI.active-tab").classList.remove("active-tab");

      lineActive.style.top = tab.offsetTop + "px";
      lineActive.style.height = tab.offsetHeight + "px";
      tab.classList.add("active-tab");
      pane.classList.add("active-tab");
    };
  });
};
handleClick(option);
