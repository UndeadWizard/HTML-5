var rows=0;//global variable  

(function(){
 
  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });
  
})();

function addBooks() {
	var index, table = document.getElementById("shopping-cart-list");
		
	var image = ("<img src='images/books.jpg' width = '80' height = '70'>");
	var quantity = ("Books, Stationery and Accessories");
	var price = ("$100");
	
	var i = 1;
	
	$('#shopping-cart-list').append("<tr>"+"<td>"+image+"</td>"+"<td>"+quantity+"</td>"+"<td>"+price+"</td>");
	
	$("#addbutton").click(function () {
        $("#shopping-cart-list").append('<td><button type="button" class="removebutton" title="Remove this row">X</button></td>'+"</tr>")
	});
}

function addFood() {
	var index, table = document.getElementById("shopping-cart-list");
	
	var image = ("<img src='images/food.jpg' width = '80' height = '70'>");
	var quantity = ("Meal Plan");
	var price = ("$15");
	rows = rows+1;
	
	$('#shopping-cart-list').append("<tr>"+"<td>"+image+"</td>"+"<td>"+quantity+"</td>"+"<td>"+price+"</td>");
}

function addMusic() {
	var index, table = document.getElementById("shopping-cart-list");
	
	var image = ("<img src='images/music.jpg' width = '80' height = '70'>");
	var quantity = ("Musical Instruments");
	var price = ("$200");
	
	$('#shopping-cart-list').append("<tr>"+"<td>"+image+"</td>"+"<td>"+quantity+"</td>"+"<td>"+price+"</td>"+"<td>"+"X"+"</td>"+"</tr>");
}

function addPlant() {
	var index, table = document.getElementById("shopping-cart-list");
	
	var image = ("<img src='images/plant.jpg' width = '80' height = '70'>");
	var quantity = ("Plants Shopping");
	var price = ("$65");
	
	$('#shopping-cart-list').append("<tr>"+"<td>"+image+"</td>"+"<td>"+quantity+"</td>"+"<td>"+price+"</td>"+"<td>"+"X"+"</td>"+"</tr>");
}

function addDecor() {
	var index, table = document.getElementById("shopping-cart-list");
	
	var image = ("<img src='images/decor.jpg' width = '80' height = '70'>");
	var quantity = ("Decoration Material");
	var price = ("$300");
	
	$('#shopping-cart-list').append("<tr>"+"<td>"+image+"</td>"+"<td>"+quantity+"</td>"+"<td>"+price+"</td>"+"<td>"+"X"+"</td>"+"</tr>");
}

function addComputer() {
	var index, table = document.getElementById("shopping-cart-list");
	
	var image = ("<img src='images/computer.jpg' width = '80' height = '70'>");
	var quantity = ("Website Development");
	var price = ("$500");
	
	$('#shopping-cart-list').append("<tr>"+"<td>"+image+"</td>"+"<td>"+quantity+"</td>"+"<td>"+price+"</td>"+"<td>"+"X"+"</td>"+"</tr>");
}

function addTaco() {
	var index, table = document.getElementById("shopping-cart-list");
	
	var image = ("<img src='images/taco.jpg' width = '80' height = '70'>");
	var quantity = ("Mexican Food");
	var price = ("$45");
	
	$('#shopping-cart-list').append("<tr>"+"<td>"+image+"</td>"+"<td>"+quantity+"</td>"+"<td>"+price+"</td>"+"<td>"+"X"+"</td>"+"</tr>");
}

function addSport() {
	var index, table = document.getElementById("shopping-cart-list");
	
	var image = ("<img src='images/sport.jfif' width = '80' height = '70'>");
	var quantity = ("Sports Accessories");
	var price = ("$499");
	
	$('#shopping-cart-list').append("<tr>"+"<td>"+image+"</td>"+"<td>"+quantity+"</td>"+"<td>"+price+"</td>"+"<td>"+"X"+"</td>"+"</tr>");
}

 $(document).on('click', 'button.removebutton', function () {
        $(this).closest('tr').remove();
        return false;
 });
	