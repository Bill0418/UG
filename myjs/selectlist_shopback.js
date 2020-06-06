good=new Array();
good[0]=[""];//空
good[1]=["空壓缸","貼合氣壓缸固定塊(素材)"];	// CSCA 063020023
good[2]=["空壓缸","油壓缸"];	// CSCA 063020025
good[3]=["空壓缸"];	// CSLB 080025007

function renew(index){
for(var i=0;i<good[index].length;i++)
	document.myForm1.member.options[i]=new Option(good[index][i]);	// 設定新選項
document.myForm1.member.length=good[index].length;	// 刪除多餘的選項
}