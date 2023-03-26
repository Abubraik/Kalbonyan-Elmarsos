class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class ShoppingCart {
  items = [];

  addProduct(product) {
    this.items.push(product);
    this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;
  }

  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
    `;
    cartEl.className = "cart";
    this.totalOutput = cartEl.querySelector("h2");
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart(product) {
    App.addProductToCart(product);
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
  <div>
  <img src ="${this.product.imageUrl}">
  <div class = "product-item__content">
  <h2>${this.product.title}</h2>
  <h3>\$${this.product.price}</h3>
  <p>${this.product.description}</p>
  <button>Add to Cart</button>
  </div>
  </div>`;
    const addCartButton = prodEl.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      "A Pillow",
      "https://cdn.thewirecutter.com/wp-content/media/2023/01/bedpillows-2048px-9999.jpg",
      "A soft pillow!",
      26.5
    ),

    new Product(
      "A Carpet",
      "https://m.media-amazon.com/images/I/71IdS-8oSDL._AC_UF1000,1000_QL80_.jpg",
      "A soft Carpet!",
      105.5
    ),
  ];

  render() {
    const prodList = document.createElement("ul");

    prodList.className = "product-List";

    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderDiv = document.getElementById("app");

    this.cart = new ShoppingCart();
    const cartEl = this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderDiv.append(cartEl);
    renderDiv.append(prodListEl);
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
