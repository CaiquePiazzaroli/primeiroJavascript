//criando variáveis e selecionando a imagem, o título e o botão.
const myImage = document.querySelector("img");
let myheading = document.querySelector("h1");
let myButton = document.querySelector("button");

//Função que altera o atributo da imagem no html
function teste () {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "img/mascote_javascript.svg") {
      myImage.setAttribute("src", "img/javascript.png");
    } else {
      myImage.setAttribute("src", "img/mascote_javascript.svg");
    }
  }
  
// Função que chama um prompt para o ususario para digitar um nome,
// vefica se um nome foi digitado e armazena no localstorage e
// diciona o nome ao titulo no html.
function setUserName() {
    const myName = prompt("Por favor digite o seu nome.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla é legal, ${myName}`;
    }

}

//Verifica se existe ou nao um nome no localstorage, se exisstir, 
// adiciona ao titulo, se nao, executa a função setUserName.
if (!localStorage.getItem("name")){
  setUserName();
}else {
   const storedName = localStorage.getItem("name");
   myheading.textContent = `Javascript é legal, ${storedName}`;
}

myImage.onclick = teste;
myButton.onclick = () => {
    setUserName();
    
}
