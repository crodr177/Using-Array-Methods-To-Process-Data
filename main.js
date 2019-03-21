//Question #1
var priceArr = items.map(function(item) {
  return item.price;
});
console.log(priceArr);

var priceSum = priceArr.reduce(function(a, b) {
  return (a + b);
});

var avg = priceSum/priceArr.length;
var avgRnd = parseFloat(avg).toFixed(2);

document.querySelector("#answer1").innerHTML = `The average price is $${avgRnd}`;

//Question #2
var inBetween = items.filter(function(item) {
  if(item.price > 14 && item.price < 18) {
    return true;
  }
});

var itemsInBetween = inBetween.map(function(item) {
  return item.title;
});

var addBr = itemsInBetween.join("<br>");

document.querySelector("#answer2").innerHTML = `${addBr}`;

//Question #3

var gbp = items.filter(function(item) {
  if(item.currency_code === "GBP") {
    return true;
  }
});

var titleGBP = gbp.map(function(item) {
  return item.title;
})

var priceGBP = gbp.map(function(item) {
  return item.price;
})

document.querySelector("#answer3").innerHTML = `${titleGBP} costs &#163;${priceGBP}`;

//Question 4

var wood = items.filter(function(item) {
  return item.materials.indexOf("wood") !== -1;
});

var woodTitle = wood.map(function(item) {
  return item.title;
});

var woodTitleAddBr = woodTitle.join("<br>");

document.querySelector("#answer4").innerHTML = `${woodTitleAddBr}`;

//Question 5

var items8OrMore = items.filter(function(item) {
  if(item.materials.length >= 8) {
    return true;
  }
});

var itemTitle = items8OrMore.map(function(item) {
  return item.title;
});

var numOfItems = items8OrMore.map(function(item) {
  return item.materials.length;
});

var itemsMadeOf = items8OrMore.map(function(item) {
  return item.materials;
})

var item1Title = itemTitle[0];
var item2Title = itemTitle[1];

var numOfItems1 = numOfItems[0];
var numOfItems2 = numOfItems[1];

var itemsMadeOf1 = itemsMadeOf[0];
var itemsMadeOf2 = itemsMadeOf[1];

var itemsModeOf1Br = itemsMadeOf1.join("<br>");
var itemsModeOf2Br = itemsMadeOf2.join("<br>");

document.querySelector("#answer5").innerHTML = `${item1Title} has ${numOfItems1} materials:\n${itemsModeOf1Br}\n\n
${item2Title} has ${numOfItems2} materials:\n${itemsModeOf2Br}`;

//Question #6

var itemsMade = items.filter(function(item) {
  return item.who_made.indexOf("i_did") !== -1;
});

var numOfMade = itemsMade.length;

document.querySelector("#answer6").innerHTML = `${numOfMade} were made by their sellers`;