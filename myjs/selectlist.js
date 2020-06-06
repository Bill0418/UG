prodname=new Array();
prodname[0]=[""];//空
prodname[1]=["外電"];	// 材料單號1
prodname[2]=["油壓缸"];	// 材料單號2

department=new Array();
department[0]=[""];//空
department[1]=["￠70*275", "￠110*275"];	// 外電
department[2]=["OJFA 40*20*400", "OJCB 63*35*200"];	// 油壓缸

function part1(index){
for(var i=0;i<prodname[index].length;i++)
	document.myForm.first_member.options[i]=new Option(prodname[index][i]);	// 設定新選項
document.myForm.first_member.length=prodname[index].length;	// 刪除多餘的選項
renew(index)
}

function renew(index){
//window.alert(index)
//index = document.myForm.main_member.selectedIndex;
for(var j=0;j<department[index].length;j++)
	document.myForm.member.options[j]=new Option(department[index][j]);	// 設定新選項
document.myForm.member.length=department[index].length;	// 刪除多餘的選項
}
