stock1=new Array();
stock1[0]=[""];//空
stock1[1]=["庫別名稱1"];	// 庫別1
stock1[2]=["庫別名稱2"];	// 庫別2

function renew(index){
for(var i=0;i<stock1[index].length;i++)
	document.myForm1.member.options[i]=new Option(stock1[index][i]);	// 設定新選項
document.myForm1.member.length=stock1[index].length;	// 刪除多餘的選項
}

