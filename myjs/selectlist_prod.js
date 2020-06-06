department=new Array();
department[0]=[""];//空
department[1]=["￠70*275", "￠110*275"];	// 外電
department[2]=["OJFA 40*20*400", "OJCB 63*35*200"];	// 油壓缸

function renew(index){
for(var i=0;i<department[index].length;i++)
	document.myForm.member.options[i]=new Option(department[index][i], department[index][i]);	// 設定新選項
document.myForm.member.length=department[index].length;	// 刪除多餘的選項
}
