const allItems = restrictListProducts(products)
renderProductList(allItems)

var water = document.getElementsByClassName("waters");
var land = document.getElementsByClassName("lands");
var extreme = document.getElementsByClassName("extremes");


function openInfo(evt, tabName) {

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	if (tabName == "Products" || tabName == "Client") {
		document.getElementById(tabName).style.display = "block";
	}
	else {
		document.getElementById(tabName).style.display = "flex";
	}
	evt.currentTarget.className += " active";

}


function populateListProductChoices(slct1) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById('displayProduct');
    s2.innerHTML = "";

	if (selectedRestrictions.has(s1.value)) {
		selectedRestrictions.delete(s1.value)
	  } else {
		selectedRestrictions.add(s1.value)
	  }

    var optionArray = restrictListProducts(products, s1.value);


	renderProductList(optionArray)
}


function selectedRes() {
	openInfo(event, "Products");
}

function openAll(){
	var all = document.querySelectorAll('[title="type"]');
	for (var i = 0; i < all.length; i++) {
		all[i].style.display = "flex";
	}
}

function openWater() {
	hideElems();
	for (var i = 0; i < water.length; i++) {
		water[i].style.display = "flex";
	}
}

function openLand() {
	hideElems();
	for (var i = 0; i < land.length; i++) {
		land[i].style.display = "flex";
	}
}

function openExtreme() {
	hideElems();
	for (var i = 0; i < extreme.length; i++) {
		extreme[i].style.display = "flex";
	}
}


function hideElems() {
	for (var i = 0; i < water.length; i++) {
		water[i].style.display = "none";
	}
	for (var i = 0; i < land.length; i++) {
		land[i].style.display = "none";
	}
	for (var i = 0; i < extreme.length; i++) {
		extreme[i].style.display = "none";
	}
}

function selectedItems(){

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	var para = document.createElement("P");
	para.innerHTML = "You have selected the following activities:";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}

	c.appendChild(para);

	openInfo(event, "Cart");

}

function priceFilter(a,b){
	return a.price > b.price ? 1:-1;
}

function renderProductList(optionArray){
	var s2 = document.getElementById('displayProduct');
	const sortedOptionArray = optionArray.sort(priceFilter);
	for (i = 0; i < sortedOptionArray.length; i++) {

		var label = document.createElement('label');
		label.className = "option_item";

	  var productName = sortedOptionArray[i].name;
	  var productPrice = sortedOptionArray[i].price;
		var productPicture = sortedOptionArray[i].picture;
		var productType = sortedOptionArray[i].type;

		var type = document.createElement('div');
		type.title = "type";
		if (productType == "water") {
			type.className = "waters";
		}
		if (productType == "land") {
			type.className = "lands";
		}
		if (productType == "extreme") {
			type.className = "extremes";
		}
		

	  var checkbox = document.createElement("input");
	  checkbox.type = "checkbox";
		checkbox.className = "checkbox";
	  checkbox.name = "product";
	  checkbox.value = productName;

		label.appendChild(checkbox);

		var optioninner = document.createElement("div");
		optioninner.className = "option_inner nutfree";
		var tick = document.createElement("div");
		tick.className = "tickmark";
		var icon = document.createElement("div");
		icon.className = "icon";
		var productImage = document.createElement("img");
		productImage.src = productPicture;
		productImage.alt = "";
		icon.appendChild(productImage);
		var prodtext = document.createElement("div");
		prodtext.className = "boxtext";
		var h2 = document.createElement("h2");
		h2.appendChild(document.createTextNode(`${productName}`));
		prodtext.appendChild(h2);
		optioninner.appendChild(icon);
		optioninner.appendChild(tick);
		optioninner.appendChild(prodtext);

		label.appendChild(optioninner);
		type.appendChild(label);
	  s2.appendChild(type);

	  s2.appendChild(document.createElement("br"));
	}
  }