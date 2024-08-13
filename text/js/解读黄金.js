//三分法 今日的最高价today_high  今日的最低价today_low
// 获取输入框元素
var todayHighValue;
var todayLowValue;
var buy_profit;
var buy;
var buy_loss;
var sell_profit;
var sell;
var sell_loss;
// 输出输入框中的值
function showme() {
	// 获取最低价输入框的值
	var todayLowElement = document.querySelector('.mui-input-row input');
	todayLowValue = todayLowElement.value || todayLowElement.placeholder;

	// 获取最高价输入框的值
	var todayHighElement = document.querySelectorAll('.mui-input-row input')[1];
	todayHighValue = todayHighElement.value || todayHighElement.placeholder;

	// 输出最高价和最低价
	console.log('今日最低价:', todayLowValue);
	console.log('今日最高价:', todayHighValue);

	//三分法计算
	three_cal(+todayLowValue, +todayHighValue);
	//输出上下做单价格
	document.getElementById("buy_profit").textContent = "buy_profit= " + buy_profit;
	document.getElementById("buy").textContent = "buy= " + buy;
	document.getElementById("buy_loss").textContent = "buy_loss= " + buy_loss;
	document.getElementById("sell_profit").textContent = "sell_profit= " + sell_profit;
	document.getElementById("sell").textContent = "sell= " + sell;
	document.getElementById("sell_loss").textContent = "sell_loss= " + sell_loss;
}


function three_cal(low, high) {
	let d_val = high - low;
	let d_val_3 = +(d_val / 3).toFixed(2);
	buy_profit = low + d_val_3;
	sell_profit = high - d_val_3;
	buy_loss = low;
	sell_loss = high;
	buy = +((buy_profit + buy_loss) / 2).toFixed(2);
	sell = +((sell_profit + sell_loss) / 2).toFixed(2);
}


document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM 完全加载和解析完成");
    showme();
});