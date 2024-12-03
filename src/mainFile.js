const apiKey =
  "live_JUHjGPkY5zKsqYbF4xU0VOG2mX8FRTAtKIlYFTYcnt5a2I1Y1TEdrxc4EIce6tYS";
const apiUrl = `https://api.thecatapi.com/v1/`;
const imgbutton = document.querySelector(".btn-gen-pussy");
const infobutton = document.querySelector(".funfact-btn-search");
const pH = "./src/style/img/pH.jpg";
const input = document.querySelector("input");
const ee = document.querySelector(".title");
let kotek;
function genPussy() {
  const link = `${apiUrl}images/search`;
  axios
    .get(link, {
      headers: {
        "x-api-key": apiKey,
      },
    })
    .then((response) => {
      kotek = response.data[0];
      imageDiv = document.querySelector(".image-main")
      imageDiv.style.backgroundImage = 'url(' + kotek.url + ')';
    })
    .catch(() => {
      document.getElementByClassName("image-main").src = pH;
    });
}
function funFact() {
  const value = input.value;
  if (isNaN(value)) {
    alert(`${value} is not a number`);
    return;
  } else if (value > 100) {
    alert(`Please type a  number between 1-100 not ${value}`);
    return;
  }
  axios
    .get(`https://meowfacts.herokuapp.com/?count=${value}`)
    .then((response) => {
      const kitkiInfo = document.querySelector(".funfact-content");
      kitkiInfo.innerHTML = ""; // czysci <p> inaczej lista idzie w inf
      response.data.data.forEach((fact) => {
        const para = document.createElement("p");
        para.textContent = fact;
        kitkiInfo.appendChild(para);
        document.querySelector(".funfact-content").style.border='3px double blue';
      });
    })
    .catch((error) => {
      console.error("Błąd", error);
      document.querySelector(".funfact-content").textContent =
        "Nie udało się pobrać listy";
    });
}
document.getElementsByClassName("image-main").onerror = () => {
  document.getElementsByClassName("image-main").src = pH;
};
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") funFact();
});

imgbutton.addEventListener("click", genPussy);
infobutton.addEventListener("click", funFact);

function rgb() {
  const rgb = "0123456789ABCDEF";
  let hash = "#";
  for (let i = 0; i < 6; i++) {
    hash += rgb[Math.floor(Math.random() * 16) ];
  }
  return hash;
}

function randomrgb() {
  document.querySelector(".header-line").style.backgroundColor = `${rgb()}`;
  document.querySelector(".footer-text").style.color = `${rgb()}`;
}

setInterval(randomrgb, 300);

function createFlyingImages(numImages) {
  for (let i = 0; i < numImages; i++) {
    const imageElement = document.createElement('div');
    imageElement.classList.add('image-main');
    document.body.appendChild(imageElement);
    moveImage(imageElement);
    setInterval(() => moveImage(imageElement), 100);
  }
}

function moveImage(imageElement) {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const randomX = Math.random() * screenWidth;
  const randomY = Math.random() * screenHeight;
  imageElement.style.position = "absolute"
  imageElement.style.left = `${randomX}px`;
  imageElement.style.top = `${randomY}px`;
}

ee.addEventListener("click",() => {createFlyingImages(10)});
