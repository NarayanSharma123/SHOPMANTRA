// STEP 1: Get category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log("Selected Category:", category);

// STEP 2: Show category name in the title
const categoryTitle = document.querySelector('#category-title');

if(category) {
  const formatedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  categoryTitle.innerText = `${formatedCategory} Collection`;
} else {
  categoryTitle.innerText = "All Products";
}

const allProducts = [
  // Topwear
  // T-Shirts
  {id: 1.0, name: "T-shirt1", price: "499", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHNoaXJ0fGVufDB8fDB8fHww", category: "tshirts"},
  {id: 1.1, name: "T-shirt2", price: "209", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D", category: "tshirts"},
  {id: 1.2, name: "T-shirt3", price: "100", image: "https://images.unsplash.com/photo-1643881080002-afdc695936e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRzaGlydHN8ZW58MHx8MHx8fDA%3D", category: "tshirts"},
  {id: 1.3, name: "T-shirt4", price: "700", image: "https://images.unsplash.com/photo-1621951753015-740c699ab970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRzaGlydHN8ZW58MHx8MHx8fDA%3D", category: "tshirts"},
  {id: 1.4, name: "T-shirt5", price: "99", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRzaGlydHN8ZW58MHx8MHx8fDA%3D", category: "tshirts"},
  {id: 1.5, name: "T-shirt6", price: "100", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHN8ZW58MHx8MHx8fDA%3D", category: "tshirts"},
  {id: 1.6, name: "T-shirt7", price: "499", image: "https://plus.unsplash.com/premium_photo-1673125287084-e90996bad505?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRzaGlydHN8ZW58MHx8MHx8fDA%3D", category: "tshirts"},
  {id: 1.7, name: "T-shirt8", price: "499", image: "https://images.unsplash.com/photo-1622445272461-c6580cab8755?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRzaGlydHN8ZW58MHx8MHx8fDA%3D", category: "tshirts"},
  {id: 1.9, name: "T-shirt9", price: "499", image: "https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRzaGlydHN8ZW58MHx8MHx8fDA%3D", category: "tshirts"},
  // Sneakers
  {id: 2.0, name: "Sneakers1", price: "190", image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNuZWFrZXJzfGVufDB8fDB8fHww", category: "sneakers"},
  {id: 2.1, name: "Sneakers2", price: "199", image: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNuZWFrZXJzfGVufDB8fDB8fHww", category: "sneakers"},
  {id: 2.2, name: "Sneakers3", price: "209", image: "https://plus.unsplash.com/premium_photo-1668767725936-f896fbca8c66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFNuZWFrZXJzfGVufDB8fDB8fHww", category: "sneakers"},
  {id: 2.3, name: "Sneakers4", price: "390", image: "https://plus.unsplash.com/premium_photo-1665413642308-c5c1ed052d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U25lYWtlcnN8ZW58MHx8MHx8fDA%3D", category: "sneakers"},
  {id: 2.4, name: "Sneakers5", price: "450", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U25lYWtlcnN8ZW58MHx8MHx8fDA%3D", category: "sneakers"},
  {id: 2.5, name: "Sneakers6", price: "500", image: "https://plus.unsplash.com/premium_photo-1710107446916-1b0c67a99042?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U25lYWtlcnN8ZW58MHx8MHx8fDA%3D", category: "sneakers"},

  // Casual Shirts
  {id: 3.0, name: "Casual Shirts1", price: "250", image: "https://images.unsplash.com/photo-1602810319250-a663f0af2f75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhc3VhbCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D", category: "shirts"},
  {id: 3.1, name: "Casual Shirts2", price: "340", image: "https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhc3VhbCUyMHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D", category: "shirts"},

  {id: 4.0, name: "Jacket1", price: "599", image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFja2V0fGVufDB8fDB8fHww", category: "jackets"},
  {id: 4.1, name: "Jacket2", price: "299", image: "https://images.unsplash.com/photo-1627637454030-5ddd536e06e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGphY2tldHxlbnwwfHwwfHx8MA%3D%3D", category: "jackets"},

  // Indian & Festive Wear
  // Kurta
  {id: 5.0, name: "Kurta1", price: "250", image: "https://images.unsplash.com/photo-1727835523545-70ee992b5763?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGt1cnRhfGVufDB8fDB8fHww", category: "kurta"},
  {id: 5.1, name: "Kurta2", price: "340", image: "https://images.unsplash.com/photo-1744551358303-46edae8b374b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGt1cnRhfGVufDB8fDB8fHww", category: "kurta"},
  {id: 5.2, name: "Kurta3", price: "400", image: "https://images.unsplash.com/photo-1711045011143-360364323f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGt1cnRhfGVufDB8fDB8fHww", category: "kurta"},
  {id: 5.3, name: "Kurta4", price: "500", image: "https://images.unsplash.com/photo-1645944692361-721984d57b6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGt1cnRhfGVufDB8fDB8fHww", category: "kurta"},
  {id: 5.4, name: "Kurta5", price: "199", image: "https://plus.unsplash.com/premium_photo-1691030256110-550925623d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGt1cnRhfGVufDB8fDB8fHww", category: "kurta"},
  
  // shervanies
  {id: 6.0, name: "sherwanies", price: "899", image: "https://images.unsplash.com/photo-1610047402714-307d99a677db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hlcndhbml8ZW58MHx8MHx8fDA%3D", category: "sherwanies"},
  
  // Bottomwear
  // Jeans
  {id: 7.0, name: "Jeans1", price: "499", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHx8fDA%3D", category: "jeans"},  
  // Casual Trouser
  {id: 8.0, name: "Casual Trouser", price: "689", image: "https://images.unsplash.com/photo-1741915313755-208c59c21165?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhc3VhbCUyMHRyb3VzZXJ8ZW58MHx8MHx8fDA%3D", category: "trousers"},
  // Shorts
  {id: 9.0, name: "Shorts", price: "1199", image: "https://images.unsplash.com/photo-1617951907145-53f6eb87a3a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob3J0c3xlbnwwfHwwfHx8MA%3D%3D", category: "shorts"},  
  
  // Sleepwear
  // Boxers
  {id: 10.0, name: "Boxer", price: "299", image: "https://images.unsplash.com/photo-1727529274342-2a35dc2045fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym94ZXJzfGVufDB8fDB8fHww", category: "boxers"},
  // Vests
  {id: 11.0, name: "Vest", price: "999", image: "https://plus.unsplash.com/premium_photo-1695603437696-0a285facb65d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVzdHN8ZW58MHx8MHx8fDA%3D", category: "vests"},  
  
  // Footwear
  // Casual Shoes
  {id: 12.0, name: "Casual Shoe", price: "499", image: "https://plus.unsplash.com/premium_photo-1668376939292-bd6953dd1bac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FzdWFsJTIwc2hvZXN8ZW58MHx8MHx8fDA%3D", category: "casual_shoes"},
  // Flip Flops
  {id: 13.0, name: "Flip Flop", price: "299", image: "https://images.unsplash.com/photo-1622920799137-86c891159e44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmxpcCUyMGZsb3BzfGVufDB8fDB8fHww", category: "flip_flops"},  
  
  // Sportswear
  // Active T-Shirts
  {id: 14.0, name: "Active T-Shirts", price: "699", image: "https://images.unsplash.com/photo-1739001411231-4fc0f4140259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWN0aXZlJTIwdHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D", category: "active_tshirts"},
  // Tracksuits
  {id: 15.0, name: "TrackSuit", price: "1999", image: "https://images.unsplash.com/photo-1704300553191-d530728380a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYWNrc3VpdHN8ZW58MHx8MHx8fDA%3D", category: "tracksuits"},
  
  //  Gadgets
  // Smart Watches
  {id: 16.0, name: "Smart Watch", price: "2999", image: "https://images.unsplash.com/photo-1698729616358-4fadac492844?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D", category: "watches"},
  // 
  {id: 17.0, name: "Speaker", price: "15999", image: "https://images.unsplash.com/photo-1612241143917-d05c85c43751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwZWFrZXJzfGVufDB8fDB8fHww", category: "speakers"},
  
  // Accessories
  // Belts
  {id: 18.0, name: "Belts", price: "199", image: "https://plus.unsplash.com/premium_photo-1688497829638-a936555c9027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJlbHRzfGVufDB8fDB8fHww", category: "belts"},
  // Wallets
  {id: 19.0, name: "Wallets", price: "289", image: "https://images.unsplash.com/photo-1614330316655-51dbca10f5f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbGV0c3xlbnwwfHwwfHx8MA%3D%3D", category: "wallets"},
  // Rings
  {id: 20.0, name: "Rings", price: "9999", image: "https://images.unsplash.com/photo-1612239396116-4da3087f8f79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJpbmdzfGVufDB8fDB8fHww", category: "rings"},
  // Phone_Cases
  {id: 21.0, name: "Phone Covers", price: "699", image: "https://images.unsplash.com/photo-1535157412991-2ef801c1748b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBjYXNlc3xlbnwwfHwwfHx8MA%3D%3D", category: "phone_cases"},
]

let filteredProducts = [];
if(category) {
  filteredProducts = allProducts.filter(product => product.category === category);
} else {
  filteredProducts = allProducts;
}
// STEP 3-C: Render product cards inside #product-list
const productList = document.querySelector("#product-list");

if(filteredProducts.length === 0) {
  productList.innerHTML = `<p class="text-center">No products found for this category.</p>`
} else {
  productList.innerHTML = filteredProducts.map(product => 
      `<div class="mb-4 col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
        <div class="card shop-product-card h-100 shadow">
          <a href="${product.image}"><img src="${product.image}" class="card-img-top" alt="${product.name}"></a>
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">₹${product.price}</p>
            <a href="#" class="btn w-100 add_to_card_btn">Add to Cart</a>
            <a href="pay.html" class="btn mt-3 w-100 buy_now_btn">Buy Now</a>
          </div>
        </div>
    </div>`
  ).join("");
}
