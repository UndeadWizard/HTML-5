(function(){
 
  $("#cart").on("click", function() {
    $(".shopping-cart").fadeToggle( "fast");
  });
  
})();

function addBooks() {
	var index, table = document.getElementById("shopping-cart-list");
		
	var book = ("<img src='images/books.jpg' width = '80' height = '70'>");
	var quantity = ("Books, Stationery and Accessories");
	var price = ("$100");
	
	for(var i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[3].onclick = function() {
                    {
                        index = this.parentElement.rowIndex;
                        table.deleteRow(index);
                    }
        };
    }	
	
	$('#shopping-cart-list').append("<tr>"+"<td>"+book+"</td>"+"<td>"+quantity+"</td>"+"<td>"+price+"</td>"+"<td>"+"X"+"</td>"+"</tr>")
	 
}
		