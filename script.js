const products = [
    { name: "Shirt", price: 75, Description: "Shirtsss" , image: "Assets/p1.png" },
    { name: "Jacket", price: 80, Description: "Jacketss" , image: "Assets/p2.png" },
    { name: "Dress", price: 68, Description: "Dresss" , image: "Assets/p4.png" },
    { name: "Frawk", price: 70, Description: "Capss" , image: "Assets/p7.png" },
    { name: "Tracksuit", price: 100, Description: "Tracksuit" , image: "Assets/dom-hill-nimElTcTNyY-unsplash.jpg" },
    { name: "T Shirt", price: 99, Description: "T Shirt" , image: "Assets/ian-dooley-wtFc4o4Bir8-unsplash.jpg" },
    { name: "Cap", price: 68, Description: "Cap" , image: "Assets/zakaria-issaad-Pg7m1VqJ-b4-unsplash.jpg" },
    { name: "Pent", price: 70, Description: "Pent" , image: "Assets/download.jpg" },
  ];
  
  const productGrid = document.getElementById("productGrid");
  
  function displayProducts(productList) {
    productGrid.innerHTML = ""; // Clear previous products
    productList.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <p class="text-black">Description : ${product.Description}</p>
        <button class="add-to-cart">Add To Cart</button>
        <button class="buy-now">Buy Now</button>
      `;
  
      productGrid.appendChild(productCard);
    });
  }

  var search = document.getElementById("searchInput");

  displayProducts(products);

function myFunction(){
  const result = Object.keys(products).filter(key => key.includes(string)).some(key => products[key] === valueToMatch)
  console.log(result) 
//   var a = search.value.toLowerCase(); 
// if(a.includes(products.name)){
//   console.log("jasbdhkdfa");
// }else{
//   console.log("no");
// }
}



// hello
