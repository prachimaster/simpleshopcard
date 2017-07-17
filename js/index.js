const shop = [
  {
    name: "pink gown",
    price: 1000,
    quantity: 0
  },
  {
    name: "green gown",
    price: 5557,
    quantity: 0
  },
  {
    name: "blue gown",
    price: 1500,
    quantity: 0
  },
  {
    name: "red gown",
    price: 4.84,
    quantity: 0
  },
  {
    name: "yellow gown",
    price: 10.93,
    quantity: 0
  }
];

const vm = new Vue({
  el: "#app",
  data: {
    items: [],
    shop: shop,
    showCart: false,
    verified: false
  },
  computed: {
    total() {
      var total = 0;
      for(var i = 0; i < this.items.length; i++) {
        total += this.items[i].price;
      }
      return total;
    }
  },
  methods: {
    addToCart(item) {
      item.quantity += 1;
      this.items.push(item);
    },
    removeFromCart(item) {
      item.quantity -= 1;
      this.items.splice(this.items.indexOf(item), 1);
    }
  }
});