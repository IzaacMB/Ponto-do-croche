let products = {
  data: [
    {
      productName: "Boné Verde",
      category: "Chapéus",

      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/clothe1.jpg",
      link: "produto1.html"
    },
    {
      productName: "Botas de cano alto Amarela",
      category: "Calçados",
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/clothe2.jpg",
      link: "produto2.html"
    },
    {
      productName: "Botas de cano alto vermelho",
      category: "Calçados",
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/clothe3.jpg",
      link: "produto3.html"
    },
    {
      productName: "Bikini borboleta Arco-Íris",
      category: "Bikinis",
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/clothe4.jpg",
      link: "produto4.html"
    },
    {
      productName: "Bikini borboleta Lílas",
      category: "Bikinis",
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/clothe5.jpg",
      link: "produto5.html"
    },
    {
      productName: "Bikini borboleta Azul claro e escuro",
      category: "Bikinis",
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/clothe6.jpg",
      link: "produto6.html"
    },
    {
      productName: "Botas de cano alto Cinza",
      category: "Calçados",
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/clothe7.jpg",
      link: "produto7.html"
    },
    {
      productName: "Botas de cano alto Branca",
      category: "Calçados",
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/clothe8.jpg",
      link: "produto8.html"
    },
    {
      productName: "Botas Cinza-Amarronzadas",
      category: "Calçados",
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/clothe9.jpg",
      link: "produto9.html"
    },  
    {
      productName: "Saia Florida",
      category: "Saias",
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/roupa.png",
      link: "produto10.html"
    },  
    {
      productName: "Saia curta Laranja",
      category: "Saias",
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/clothe10.jpg",
      link: "produto11.html"
    },  
    {
      productName: "Saia longa de Pria Colorida",
      category: "Saias",
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/clothe11.jpg",
      link: "produto12.html"
    },                     
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "" + i.price;
  container.appendChild(price);
 //button
let button = document.createElement("button");
button.innerText = "Clique para saber mais sobre";
button.style.backgroundColor = "white";
button.style.color = "green";
button.style.padding = "10px";
button.style.borderRadius = "5px";
button.style.border = "1px solid green";
container.appendChild(button);

//add styles on hover
button.addEventListener("mouseover", function() {
  button.style.backgroundColor = "green";
  button.style.color = "white";
});

//remove styles on hover out
button.addEventListener("mouseout", function() {
  button.style.backgroundColor = "white";
  button.style.color = "green";
});

//add click event to button
button.addEventListener("click", function() {
  window.location.href = i.link;
});
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
//Activate search button on enter key press
document.getElementById("search-input").addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("search").click();
  }
});
