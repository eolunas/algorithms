class ShoppingCart {
  private static instance: ShoppingCart;
  private cart: Product[] = [];

  private constructor() {}

  static getInstance(): ShoppingCart {
    if (!ShoppingCart.instance) {
      ShoppingCart.instance = new ShoppingCart();
    }
    return ShoppingCart.instance;
  }
  public getCart(): Product[] {
    return this.cart;
  }
  public addProduct(product: Product): void {
    this.cart.push(product);
  }
  public deleteById(id: number): void {
    let indexProduct = this.cart.findIndex((item) => item.getId() == id);
    this.cart.splice(indexProduct, 1);
  }
}

class Product {
  private id: number;
  private name: string;
  private cost: number;

  public constructor(id: number, name: string, cost: number) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }
  public getId(): number {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getCost(): number {
    return this.cost;
  }
}

(() => {
  const cart = ShoppingCart.getInstance();
  const cart2 = ShoppingCart.getInstance();
  const p1 = new Product(1, "camara", 500);
  const p2 = new Product(2, "cama", 1500);
  const p3 = new Product(3, "cojin", 20);

  cart.addProduct(p1);
  cart.addProduct(p2);
  cart.addProduct(p3);

  console.log(cart.getCart());

  cart.deleteById(2);

  console.log(cart.getCart());
  // Verify the instance is the same in both carts
  console.log(cart === cart2);
  console.log(cart.getCart());
  console.log(cart2.getCart());
})();
