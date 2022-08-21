const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const classContainer = ["player-container-song","player-control","player-option"];

const player_container = (nameClasses) => {
  const containerBLock = $("#player");
  const main = document.createElement("div");
  main.classList.add("player-container");
  const HTML = nameClasses.map(nameClass=>{
    return `
      <div class = "${nameClass}"></div>
    `
  })
  main.innerHTML = HTML.join("");
  containerBLock.appendChild(main);
}
player_container(classContainer)

const player_container_song = []
