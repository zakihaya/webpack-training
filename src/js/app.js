import $ from "jquery";
import additionCalcurator from "./modules/addition-calculator";
import taxCalcurator from "./modules/tax-calculator";
import hello from "./modules/hello";

console.log("-----------------------------");
console.log("test log");
console.log("-----------------------------");

var item1Price = 400;
var item2Price = 600;
var totalPrice = additionCalcurator(item1Price, item2Price);
var tax = 1.08;
var priceIncludeTax = taxCalcurator(totalPrice, tax);

console.log(`totalPrice: ${totalPrice}`);
console.log(`priceIncludeTax: ${priceIncludeTax}`);
$("body").html(`priceIncludeTax: ${priceIncludeTax}`);

console.log("-----------------------------");
var greeting = hello("Ken");
console.log(greeting);
