stock=new Array();
stock[0]=[""];//空
stock[1]=["庫別名稱1"];	// 庫別1
stock[2]=["庫別名稱2"];	// 庫別2

function renew1(index){
for(var i=0;i<stock[index].length;i++)
	document.myForm1.member.options[i]=new Option(stock[index][i]);	// 設定新選項
document.myForm1.member.length=stock[index].length;	// 刪除多餘的選項
}