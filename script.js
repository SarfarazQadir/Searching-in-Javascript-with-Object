const products = [
    { name: "Shirt", price: 75, discription: "Shirtsss" , image: "Assets/p1.png" },
    { name: "Jacket", price: 80, discription: "Jacketss" , image: "Assets/p2.png" },
    { name: "Dress", price: 68, discription: "Dresss" , image: "Assets/p4.png" },
    { name: "Frawk", price: 70, discription: "Capss" , image: "Assets/p7.png" },
    { name: "Tracksuit", price: 100, discription: "Tracksuit" , image: "Assets/dom-hill-nimElTcTNyY-unsplash.jpg" },
    { name: "T Shirt", price: 99, discription: "T Shirt" , image: "Assets/ian-dooley-wtFc4o4Bir8-unsplash.jpg" },
    { name: "Cap", price: 68, discription: "Cap" , image: "Assets/zakaria-issaad-Pg7m1VqJ-b4-unsplash.jpg" },
    { name: "Frawk", price: 70, discription: "Capss" , image: "Assets/p7.png" },
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
        <p class="text-black">Discription : ${product.discription}</p>
        <button class="add-to-cart">Add To Cart</button>
        <button class="buy-now">Buy Now</button>
      `;
  
      productGrid.appendChild(productCard);
    });
  }

  var search = document.getElementById("searchInput");

  displayProducts(products);

  // function myFunction(){
  //  var a = search.value ;
  //  if()
  // }

