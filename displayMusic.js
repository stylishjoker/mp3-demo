const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const songs = [
  {
    id: 1,
    song: "song 1",
    single: "single 1",
    img: "red",
    linkSinger: "#",
  },
  {
    id: 2,
    song: "song 2",
    single: "single 2",
    img: "green",
    linkSinger: "#",
  },
  {
    id: 3,
    song: "song 3",
    single: "single 3",
    img: "black",
    linkSinger: "#",
  },
  {
    id: 4,
    song: "song 4",
    single: "single 4",
    img: "yellow",
    linkSinger: "#",
  },
  {
    id: 5,
    song: "song 5",
    single: "single 5",
    img: "white",
    linkSinger: "#",
  },
];
const reactions = [
  {
    icon: '<i class="fa-solid fa-heart"></i>',
    link: "#",
  },
  {
    icon: '<i class="fa-solid fa-microphone"></i>',
    link: "#",
  },
];
const displaySongs = () => {
  // h3
  const main_element = $(".tab-personal");
  const h3Block = document.createElement("div");
  h3Block.classList.add("tab-personal__h3");
  const h3 = "<h3>Thư viện</h3>";
  h3Block.innerHTML = h3;
  main_element.appendChild(h3Block);
  //   songs
  const blockSongs = document.createElement("div");
  blockSongs.classList.add("tab-personal__songs");
  const HTMLsongs = songs.map((song) => {
    return `
            <div class = "blockSong">
                <div class="blockSong_main">
                    <div class = "blockSong__id">${song.id}</div>
                    <div class = "blockSong__img" background : "${song.img}"></div>
                    <div class = "blockSong__info">
                        <div class = "blockSong__info-name">${song.song}</div>
                        <div class = "blockSong__info-single"><a href = "#">${song.single}</a></div>
                    </div>
                </div>
                <div class = "blockSong_tittle"><a href = "${song.linkSinger}">${song.song}</a></div>
                <div class = "blockSong_option"><i class="fa-solid fa-angles-right"></i></div>
                
            </div>
        `;
  });
  blockSongs.innerHTML = HTMLsongs.join("");
  main_element.appendChild(blockSongs);
  const optionElement = $$(".blockSong");
  const createOption = document.createElement("div");
  const HtmlOption = reactions.map((element) => {
    return `
      <a href = "${element.link}">${element.icon}</a>
    `;
  });
  Array.from(optionElement).forEach((element) => {
    createOption.classList.add("blockSong_react");
    createOption.innerHTML = HtmlOption.join("");
    element.appendChild(createOption);
    console.log(element);
  });
  var lengthSong = optionElement.length;
};
displaySongs();