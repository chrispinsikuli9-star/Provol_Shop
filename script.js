const products = [
    {id: 1, name: "smartphone",
    price: 85000, category: "Téléphones" }
    {id 2, name: "Ordinateur",
    price: 250000, category: "informatique" }
    {id: 3, name: "Casque Bluetooth",
    prince: 15000, category: "Accessoires"}
];
let cart = [];

function addToCart (id) {
    const product = products.find(p => p.id ===id)
    const item = cart.find(p =id === id);

if (item) {
    item.quantity++;
} else {
    cart.push({ ...product, quantity: 1 });
}

updateCart();
}
function updateCart() {
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,0
    );
}