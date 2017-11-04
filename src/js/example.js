/*
 * @Author: chenyang_pc
 * @Date:   2017-10-28 22:08:02
 * @Last Modified by:   chenyang_pc
 * @Last Modified time: 2017-11-04 15:51:05
 */

$(function() {

	// 实例化Tab组件
	var tab1 = new Tab({
		container: ".tab1",
		mode: "default",
		handler: function(index) {
			console.log("当前页签current:", index)
		}
	});
	// 实例化Tab组件
	var tab11 = new Tab({
		container: ".tab11",
		type:"mouseover",
		mode: "default",
		handler: function(index) {
			console.log("当前页签current:", index)
		}
	});
	// 实例化Tab组件
	var tab2 = new Tab({
		container: ".tab2",
		mode: "slide",
		handler: function(index) {
			console.log("当前页签current:", index)
		}
	});
	// 实例化Tab组件
	var tab21 = new Tab({
		container: ".tab21",
		type:"mouseover",
		mode: "slide",
		handler: function(index) {
			console.log("当前页签current:", index)
		}
	});
	// 实例化Tab组件
	var tab3 = new Tab({
		container: ".tab3",
		mode: "fade",
		handler: function(index) {
			console.log("当前页签current:", index)
		}
	});
	// 实例化Tab组件
	var tab31 = new Tab({
		container: ".tab31",
		type:"mouseover",
		mode: "fade",
		handler: function(index) {
			console.log("当前页签current:", index)
		}
	});
	// 实例化Tab组件
	var tab4 = new Tab({
		container: ".tab4",
		mode:"default",
		autoplay:true,
		handler: function(index) {
			console.log("当前页签current:", index)
		}
	});
	// 实例化Tab组件
	var tab41 = new Tab({
		container: ".tab41",
		type:"mouseover",
		mode:"default",
		autoplay:true,
		handler: function(index) {
			console.log("当前页签current:", index)
		}
	});
	// 实例化Tab组件
	var tab5 = new Tab({
		container: ".tab5",
		mode:"slide",
		autoplay:true,
		handler: function(index) {
			console.log("当前页签current:", index)
		}
	});
	// 实例化Tab组件
	var tab51 = new Tab({
		container: ".tab51",
		type:"mouseover",
		mode:"slide",
		autoplay:true,
		handler: function(index) {
			console.log("当前页签current:", index)
		}
	});
	// 实例化Tab组件
	var tab6 = new Tab({
		container: ".tab6",
		mode:"fade",
		autoplay:true,
		handler: function(index) {
			console.log("当前页签current:", index)
		}
	});
	// 实例化Tab组件
	var tab61 = new Tab({
		container: ".tab61",
		type:"mouseover",
		mode:"fade",
		autoplay:true,
		handler: function(index) {
			console.log("当前页签current:", index)
		}
	});



});