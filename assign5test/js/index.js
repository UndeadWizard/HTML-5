(function(){
 
  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });
  
})();

function addBooks() {
	 var book = document.createElement("IMG");
	 var quantity = document.createElement("li");
	 var price = document.createElement("li");
	 var textnode = document.createTextNode("Books, Stationery and Accessories");
	 var textnode1 = document.createTextNode("$100");
	 book.setAttribute("src", "images/books.jpg");
	 book.setAttribute("width", "80");
	 book.setAttribute("height", "50");
	 quantity.appendChild(textnode);
	 price.appendChild(textnode1);
	 document.getElementById("shopping-cart-imagelist").appendChild(book);
	 document.getElementById("shopping-cart-quantitylist").appendChild(quantity);
	 document.getElementById("shopping-cart-pricelist").appendChild(price);
}
