var itemPrices = {
  coke: 1.50,
  pepsi: 1.50,
  sprite: 1.50,
  water: 1.00,
  lemonade: 2.00,
  hamburger: 5.00,
  cheeseburger: 5.50,
  chicken: 6.00,
  veggie: 5.50,
  fish: 6.50,
  fries: 2.00,
  onionrings: 2.50,
  icecream: 3.00,
  cookie: 1.50,
  brownie: 2.00
};

var itemNames = {
  coke: "Coke",
  pepsi: "Pepsi",
  sprite: "Sprite",
  water: "Water",
  lemonade: "Lemonade",
  hamburger: "Hamburger",
  cheeseburger: "Cheeseburger",
  chicken: "Chicken Sandwich",
  veggie: "Veggie Burger",
  fish: "BLT Sandwich",
  fries: "Fries",
  onionrings: "Onion Rings",
  icecream: "Ice Cream",
  cookie: "Cookie",
  brownie: "Brownie"
};

function generateSummary() {
  var nameInput = document.getElementById('customerName');
  var customerName = nameInput.value;
  if (!customerName) {
    alert("Please enter a name!");
    return;
  }
  

  var summaryText = "<h3>Order for: " + customerName + "</h3>";
  var totalCost = 0;
  
  //DRINKS
  var drinksCost = 0;
  var drinksText = "";
  
  var drinkItems = ["coke", "pepsi", "sprite", "water", "lemonade"];
  for (var i = 0; i < drinkItems.length; i++) {
    var drinkId = drinkItems[i];
    var quantityInput = document.getElementById("drink_" + drinkId);
    var quantity = quantityInput.value;
    
    // Only add if they ordered something
    if (quantity > 0) {
      quantity = Number(quantity);
      var price = itemPrices[drinkId];
      var itemCost = quantity * price;
      drinksCost += itemCost;
      drinksText += "<li>" + quantity + "x " + itemNames[drinkId] + ": $" + itemCost.toFixed(2) + "</li>";
    }
  }
  
  // Add drinks to summary if they ordered any
  if (drinksCost > 0) {
    totalCost += drinksCost;
    summaryText += "<h3>Drinks ($" + drinksCost.toFixed(2) + ")</h3>";
    summaryText += "<ul>" + drinksText + "</ul>";
  }
  
  //SANDWICHES  
  var sandwichesCost = 0;
  var sandwichesText = "";
  
  var sandwichItems = ["hamburger", "cheeseburger", "chicken", "veggie", "fish"];
  for (var i = 0; i < sandwichItems.length; i++) {
    var sandwichId = sandwichItems[i];
    var quantityInput = document.getElementById("sandwich_" + sandwichId);
    var quantity = quantityInput.value;
    
    if (quantity > 0) {
      quantity = Number(quantity);
      var price = itemPrices[sandwichId];
      var itemCost = quantity * price;
      sandwichesCost += itemCost;
      sandwichesText += "<li>" + quantity + "x " + itemNames[sandwichId] + ": $" + itemCost.toFixed(2) + "</li>";
    }
  }
  
  if (sandwichesCost > 0) {
    totalCost += sandwichesCost;
    summaryText += "<h3>Sandwiches ($" + sandwichesCost.toFixed(2) + ")</h3>";
    summaryText += "<ul>" + sandwichesText + "</ul>";
  }
  
  //SIDES
  var sidesCost = 0;
  var sidesText = "";
  
  var sideItems = ["fries", "onionrings", "icecream", "cookie", "brownie"];
  for (var i = 0; i < sideItems.length; i++) {
    var sideId = sideItems[i];
    var quantityInput = document.getElementById("side_" + sideId);
    var quantity = quantityInput.value;
    
    if (quantity > 0) {
      quantity = Number(quantity);
      var price = itemPrices[sideId];
      var itemCost = quantity * price;
      sidesCost += itemCost;
      sidesText += "<li>" + quantity + "x " + itemNames[sideId] + ": $" + itemCost.toFixed(2) + "</li>";
    }
  }
  
  if (sidesCost > 0) {
    totalCost += sidesCost;
    summaryText += "<h3>Sides & Desserts ($" + sidesCost.toFixed(2) + ")</h3>";
    summaryText += "<ul>" + sidesText + "</ul>";
  }
  
  // Add the total cost
  summaryText += "<h3>Total: $" + totalCost.toFixed(2) + "</h3>";
  
  // Show the summary on the page
  document.getElementById('summary').innerHTML = summaryText;
}