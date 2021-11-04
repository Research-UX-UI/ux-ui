const selectedRestrictions = new Set()

var products = [
	{
		name: "WATERSKIING",
		picture: "images/waterskiing.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Vegetable",
	},
	{
		name: "SURFING",
		picture: "images/surfing.png",
		LactoseFree: false,
		NutFree: false,
		isOrganic:true,
		type : "Carbs",
	},
	{
		name: "CANOEING",
		picture: "images/canoe.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Vegetable",
	},
	{
		name: "KAYAKING",
		picture: "images/kayak.png",
		LactoseFree: false,
		NutFree: true,
		isOrganic:true,
		type : "Dairy",
	},
	{
		name: "FISHING",
		picture: "images/fishing.png",
		LactoseFree: false,
		NutFree: true,
		isOrganic:false,
		type : "Dairy",
	},
	{
		name: "JETSKIING",
		picture: "images/jetski.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Protein",
	},
	{
		name: "SCUBA DIVING",
		picture: "images/scuba.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		type : "Fruit",
	},
	{
		name: "SKI",
		picture: "images/ski.png",
		LactoseFree: false,
		NutFree: true,
		isOrganic:true,
		type : "Dairy",
	},
	{
		name: "ICE CLIMBING",
		picture: "images/ice.png",
		LactoseFree: true,
		NutFree: false,
		isOrganic:true,
		type : "Fat",
	},
	{
		name: "FAT BIKING",
		picture: "images/fatbiking.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		type : "Carbs",
	},
	{
		name: "DOG SLEDDING",
		picture: "images/dog.png",
		LactoseFree: true,
		NutFree: false,
		isOrganic:false,
		type : "Fat",
	},
	{
		name: "ICE DIVING",
		picture: "images/icediving.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:false,
		type : "Fruit",
	},
	{
		name: "HIKING",
		picture: "images/hiking.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Fruit",
	},
	{
		name: "TRAIL",
		picture: "images/trail.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Fruit",
	},
	{
		name: "SKATING",
		picture: "images/skating.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Vietnamese",
	},
	{
		name: "RACING",
		picture: "images/racing.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Vietnamese",
	},
	{
		name: "BIKING",
		picture: "images/biking.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Vietnamese",
	},
	{
		name: "CAMPING",
		picture: "images/camping.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Vietnamese",
	},
	{
		name: "BUNGEE JUMPING",
		picture: "images/bungee.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Vietnamese",
	},
	{
		name: "SKYDIVING",
		picture: "images/skydiving.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Vietnamese",
	},
	{
		name: "HORSE RIDING",
		picture: "images/horse.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Vietnamese",
	},
	{
		name: "PARASAILING",
		picture: "images/para.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Vietnamese",
	},
	{
		name: "SIGHTSEEING",
		picture: "images/sight.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Vietnamese",
	},
	{
		name: "RAFTING",
		picture: "images/rafting.png",
		LactoseFree: true,
		NutFree: true,
		isOrganic:true,
		type : "Vietnamese",
	},
];


function restrictListProducts(prods) {
	let filteredProducts = [];
	for (let i = 0; i < prods.length; i += 1) {
	  if ((selectedRestrictions.has("Lactose-Free")) && (prods[i].LactoseFree == false)){
		continue;
	  }
	  if ((selectedRestrictions.has("Nut-Free")) && (prods[i].NutFree == false)){
		continue;
	  }
	  if ((selectedRestrictions.has("Organic")) && (prods[i].isOrganic == false)){
		continue;
	  }
	  filteredProducts.push(prods[i]);
	}
	return filteredProducts;
  }
