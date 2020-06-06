
//當做全域參數使用
let bootstrapMaterialDatePickerOption = { time: false, nowButton: true, clearButton: true, lang: 'zh-tw', format: 'YYYY/MM/DD' };
$(function () {
	$('#inputcalendar').bootstrapMaterialDatePicker(bootstrapMaterialDatePickerOption);
	$('#inputcalendar_1').bootstrapMaterialDatePicker(bootstrapMaterialDatePickerOption);
});
