const selectedRestrictions = new Set()

var products = [
	
	{
		name: "CANOE",
		picture: "images/canoe.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "water",
	},
	{
		name: "JETSKI",
		picture: "images/jetski.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "water",
	},
	{
		name: "SCUBA DIVING",
		picture: "images/scuba.png",
		Niagra: true,
		Banff: true,
		Whistler:false,
		Tremblant:true,
		Morne:true,
		type : "water",
	},
	{
		name: "SKI",
		picture: "images/ski.png",
		Niagra: false,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "land",
	},
	{
		name: "ICE CLIMBING",
		picture: "images/ice.png",
		Niagra: true,
		Banff: false,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "extreme",
	},
	{
		name: "Winter BIKING",
		picture: "images/fatbiking.png",
		Niagra: true,
		Banff: true,
		Whistler:false,
		Tremblant:true,
		Morne:true,
		type : "extreme",
	},
	{
		name: "DOG SLEDDING",
		picture: "images/dog.png",
		Niagra: true,
		Banff: false,
		Whistler:false,
		Tremblant:true,
		Morne:true,
		type : "land",
	},
	{
		name: "ICE DIVING",
		picture: "images/icediving.png",
		Niagra: true,
		Banff: true,
		Whistler:false,
		Tremblant:true,
		Morne:true,
		type : "extreme",
	},
	{
		name: "HIKING",
		picture: "images/hiking.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "land",
	},
	{
		name: "TRAIL",
		picture: "images/trail.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "land",
	},
	{
		name: "SKATING",
		picture: "images/skating.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "land",
	},
	{
		name: "RACING",
		picture: "images/racing.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "land",
	},
	{
		name: "BIKING",
		picture: "images/biking.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "land",
	},
	{
		name: "CAMPING",
		picture: "images/camping.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "land",
	},
	{
		name: "BUNGEE JUMPING",
		picture: "images/bungee.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "extreme",
	},
	{
		name: "SKY DIVING",
		picture: "images/skydiving.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "extreme",
	},
	{
		name: "HORSE RIDING",
		picture: "images/horse.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "land",
	},
	{
		name: "PARA SAILING",
		picture: "images/para.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "water",
	},
	{
		name: "SIGHT SEEING",
		picture: "images/sight.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "land",
	},
	{
		name: "RAFTING",
		picture: "images/rafting.png",
		Niagra: true,
		Banff: true,
		Whistler:true,
		Tremblant:true,
		Morne:true,
		type : "extreme",
	},
];


function restrictListProducts(prods) {
	let filteredProducts = [];
	for (let i = 0; i < prods.length; i += 1) {
	  if ((selectedRestrictions.has("niagra")) && (prods[i].Niagra == false)){
		continue;
	  }
	  if ((selectedRestrictions.has("banff")) && (prods[i].Banff == false)){
		continue;
	  }
	  if ((selectedRestrictions.has("whistler")) && (prods[i].Whistler == false)){
		continue;
	  }
	  if ((selectedRestrictions.has("tremblant")) && (prods[i].Tremblant == false)){
		continue;
	  }
	  if ((selectedRestrictions.has("morne")) && (prods[i].Morne == false)){
		continue;
	  }
	  filteredProducts.push(prods[i]);
	}
	return filteredProducts;
  }
  