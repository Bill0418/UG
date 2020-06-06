

$(document).ready(function(){
  var temp = 0;
  $("#add").click(function(){
	temp += 1;
	var inputproduct = $("#inputproduct").val(); //<!--品名-->
	var inputsize = $("#inputsize").val(); //<!--規格-->
	var inputcount = $("#inputcount").val(); //<!--數量-->
	var inputprice = $("#inputprice").val(); //<!--單價-->
	var inputsum = $("#inputsum").val(); //<!--小計-->
	$("#toDoList").append(
	  `<tr><td>${temp}</td><td>${inputproduct}</td><td>${inputsize}</td><td>${inputcount}</td><td>${inputprice}</td><td>${inputsum}</td><td><button class="delete">Delete</button></td></tr>`
	);
	
	$(".delete").each(function(){
	  $(this).click(function(){
	   $(this).closest('tr').remove(); 
	  })
	})
  });
});


