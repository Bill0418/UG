stock=new Array();
stock[0]=[""];//空
stock[1]=["製程1"];	// 製令編號1
stock[2]=["製程2"];	// 製令編號2

function renew1(index){
for(var i=0;i<stock[index].length;i++)
	document.myForm2.member.options[i]=new Option(stock[index][i]);	// 設定新選項
document.myForm2.member.length=stock[index].length;	// 刪除多餘的選項
}