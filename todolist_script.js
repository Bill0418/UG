function Todolist()
{
	var todoItem = new TodoItem('...')
}

function TodoItem(order,product,size,count,price,sum)
{
	//定義各種 TodoTtem 屬性
	this.order = order;
	this.product = product;
	this.size = size;
	this.count = count;
	this.price = price;
	this.sum = sum;
	
	return this;
}

var general = {
	//儲存每個 todoItem 的陣列
	todos:[]
	
	globalID:[]
}

