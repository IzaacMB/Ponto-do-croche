let products = {
  data: [
    {
      productName: "Orixá (modelo 1)",
      category: "Bonecas(os)",

      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/amigu6.jpg",
      link: "produto1.html"
    },
    {
      productName: "Orixá (modelo 2)",
      category: "Bonecas(os)",

      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/amigu5.jpg",
      link: "produto2.html"
    },
    {
      productName: "Orixá (modelo 3)",
      category: "Bonecas(os)",

      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/amigu4.jpg",
      link: "produto3.html"
    },
    {
      productName: "mestre dos magos (Caverna do Dragão)",
      category: "Personagens(pop)",

      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/amigu_edited.jpg",
      link: "produto4.html"
    },
    {
      productName: "Raposa",
      category: "Animais()",

      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/amigu2.jpg",
      link: "produto5.html"
    },
    {
      productName: "Mini Bruxa",
      category: "Bonecas(os)",
 
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/amigu3.jpg",
      link: "produto6.html"
    },
    {
      productName: "Coelho pascoa (modelo 1)",
      category: "Animais()",
 
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/amigu7.jpg",
      link: "produto7.html"
    },
    {
      productName: "Coelho pascoa (modelo 2)",
      category: "Animais()",
 
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/amigu8.jpg",
      link: "produto8.html"
    },
    {
      productName: "Coelho pascoa (modelo 3)",
      category: "Animais()",
 
      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/amigu9.jpg",
      link: "produto9.html"
    },  
    {
      productName: "Urso",
      category: "Animais()",

      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/amigu10.jpg",
      link: "produto10.html"
    },  
    {
      productName: "Homem-Aranha",
      category: "Personagens(pop)",

      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/amigu11.jpg",
      link: "produto11.html"
    },  
    {
      productName: "Boneca",
      category: "Bonecas(os)",

      image: "file:///C:/Users/moroz/Desktop/Projeto%20crochetpoint/imagem/amigu12.jpg",
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
