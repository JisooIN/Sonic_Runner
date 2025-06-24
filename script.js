const sonic = document.querySelector(".sonic");
const Motobug = document.querySelector(".Motobug");
const Mapa = document.querySelector(".Mapa");
const jumpSound = new Audio('./audio/JUMP-SONG.unknown');
const greenhill = new Audio('./audio/greenHill.mp3');

const jump = () => {
    jumpSound.currentTime = 0; 
    jumpSound.play();

    sonic.classList.add("jump");
    sonic.src = "./image/Sonic-jumping-unscreen.gif";

    setTimeout(() => {
        sonic.classList.remove("jump");
        sonic.src = "./image/gif sonic runing.gif"; 
    }, 900);
}

const loop = setInterval(() => {
 greenhill.play();
 const MotobugPosition = Motobug.offsetLeft;
 const sonicPosition =+window.getComputedStyle(sonic).bottom.replace("px", "");

 if (MotobugPosition < 115 && MotobugPosition > 0 && sonicPosition < 325) {
 
 Motobug.style.animation = "none";
 Motobug.style.left = `${MotobugPosition}px`;

  sonic.style.animation = 'none';
  sonic.src = "./image/soniclostlife.png";
  sonic.style.width = "200px";

  Mapa.src = "./image/over.png";

 }

},10);


document.addEventListener("click", jump);




