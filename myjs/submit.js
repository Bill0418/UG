$(function () { 
var porduct = $("#inputorder"); 
var test = $("#inputorder"); 
$("#submit").click(function () { 
test.append("<div class='item'><span class='serial'></span>"); 
var items = test.find(".item"); 
var serials = test.find(".serial"); 
items.attr("opt", ""); 
serials.html(""); 
$.each(items, function (k, v) { 
$(this).attr("opt", "mopt" + k); 
serials.eq(k).html(k); 
}); 
num++; 
}); }); 


