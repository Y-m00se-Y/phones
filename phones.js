var iPhone6S = new Phone('Apple', '6S', 2250, 4.7, 'silver');
var SamsungGalaxyS6 = new Phone('Samsung', 'GalaxyS6', 1256, 5.1, 'white')
var HuaweiMate10Pro = new Phone('Huawei', 'Mate 10 Pro', 1500, 6, )

function Phone(brand, model, price, screenSize, color) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.screenSize = screenSize;
	this.color = color;
}
Phone.prototype.printInfo = function() {
	console.log('The phone brand is: ' + this.brand + '\n' + 'Model is: ' + this.model + '\n' + 'Screen size is: ' + this.screenSize + '"' + '\n' + 'Color is: ' + this.color + '\n' + 'Price is: ' + this.price + '$' + '\n');
}
Phone.prototype.printRating = function() {
	if (this.brand == 'Apple') {
		console.log('Price is waaay too high!' + '\n' + 'Sorry Tomasz :)');
	}
	if (this.brand == 'Samsung') {
		console.log('It will stop working soon' + '\n' + 'Don\'t even try to count on service');
	}
	if (this.brand == 'Huawei') {
		console.log('Spies are listening' + '\n' + 'Phone itself is pretty descend');
	}
	console.log('--------------------------------');
}
iPhone6S.printInfo();
iPhone6S.printRating();
SamsungGalaxyS6.printInfo();
SamsungGalaxyS6.printRating();
HuaweiMate10Pro.printInfo();
HuaweiMate10Pro.printRating();