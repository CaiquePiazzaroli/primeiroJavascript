function teste () {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "img/mascote_javascript.svg") {
      myImage.setAttribute("src", "img/javascript.png");
    } else {
      myImage.setAttribute("src", "img/mascote_javascript.svg");
    }
  }

function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
}

const myImage = document.querySelector("img");
myImage.onclick = teste;


let myButton = document.querySelector("button");
myButton.onclick = () => {
    setUserName();
}

let myheading = document.querySelector("h1")
if (!localStorage.getItem("name")){
    setUserName();
}else {
    const storedName = localStorage.getItem("name");
    myheading.textContent = `Javascript é legal, ${storedName}`;
}