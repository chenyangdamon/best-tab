/*!
 * JavaScript Components best-Tab
 * @author : chenyangdamon
 * @email  : 645230634@qq.com
 * @github : https://github.com/chenyangdamon
 * @Date   : 2017-02-28 22:08:02
 */
;
(function(root, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD模式
		define(["jquery"], factory);
	} else {
		// 全局模式
		factory.call(root, root.$);
	}
}(typeof window !== "undefined" ? window : this, function($) {
	/**
	 * [Tab description]
	 */
	var Tab = function() {
		/**
		 * [defaultOption description]
		 * @type {Object}
		 */
		this.defaultOption = {
			// 容器
			container: ".best-tab",
			tabHd: ".best-tab-hd",
			tabBd: ".best-tab-bd",
			hdCon: ".best-hd-con",
			bdCon: ".best-bd-con",
			// 当前项的class
			activeClass: "current",
			// 默认显示第几个
			defaultIndex: 0,
			// 事件触发类型，有click、mouseover,默认click
			type: "click",
			// 运动模式，default、slide、fade,如果tab-bd的内容高度不一致，slide无效
			mode: "default",
			direction: "horizontal", //horizontal、vertical
			// 自动播放
			autoplay: false,
			// 运动时长，默认400，单位ms
			duration: 400,
			// 间隔时长，默认3000，单位ms
			interval: 3000,
			// 回调
			handler: null
		};

		this.init.apply(this, arguments);
	};

	Tab.prototype = {
		constructor: "Tab",
		/**
		 * 初始化
		 * @param options
		 */
		init: function(userOption) {
			var _this = this;
			_this.option = $.extend({}, _this.defaultOption, userOption);

			if (!$(_this.option.container) instanceof jQuery) return;

			_this._tab = $(_this.option.container);

			_this._tabHd = $(_this.option.container).find(_this.option.tabHd);
			_this._tabHdCon = $(_this.option.container).find(_this.option.hdCon);
			_this._tabHdItem = _this._tabHdCon.children();

			_this._tabBd = $(_this.option.container).find(_this.option.tabBd);
			_this._tabBdCon = $(_this.option.container).find(_this.option.bdCon);
			_this._tabBdItem = _this._tabBdCon.children();

			_this._length = _this._tabBdItem.length;

			_this._activeClass = _this.option.activeClass;
			_this._handler = _this.option.handler;
			_this._type = _this.option.type;
			_this._mode = _this.option.mode;
			_this._curIndex = _this.option.defaultIndex;
			console.log(_this._mode,_this._tabBdCon.css("position"))
			// 如果tab-con的高度不一致，则不能使用slide模式，不做任何处理
			if (_this._mode === "slide" && _this._tabBdCon.css("position") !== "absolute"){
				_this._tabBdCon.css("position","absolute");
			}

			_this._doTransform();
			// 自动播放
			if (_this.option.autoplay) {
				_this._timer = null;
				_this._doAutoPlay();
			}
			_this.bindEvent();
		},
		/**
		 * 注册事件
		 */
		bindEvent: function() {
			var _this = this;

			_this._tabHdItem.on(_this._type, function() {
				var _index = $(this).index();
				// 如果重复点击某个页签，则只处理一次
				if (_this._curIndex === _index) return;

				_this._curIndex = _index;
				_this._doTransform();
			});
			// 鼠标移入有定时器时才停止自动播放
			_this._tabHdItem.mouseover(function() {
				if (_this._timer) {
					clearInterval(_this._timer);
				}
			}).mouseout(function() {
				// 鼠标移开且是自动播放时才继续播放
				if (_this.option.autoplay) {
					_this._timer = null;
					_this._doAutoPlay();
				}
			});;

		},
		/**
		 * 自动播放
		 * [_doAutoPlay description]
		 * @return {[type]} [description]
		 */
		_doAutoPlay: function() {
			var _this = this,
				_dir = "l";

			_this._timer = setInterval(function() {

				// 向左滑动
				if (_dir === "l") {
					if (_this._curIndex < _this._length - 1) {
						_this._curIndex++;
					} else if (_this._curIndex === _this._length - 1) {
						_dir = "r";
					}
				}
				// 向右滑动
				if (_dir === "r") {
					if (_this._curIndex > 0) {
						_this._curIndex--;
					} else if (_this._curIndex === 0) {
						_dir = "l";
					}
				}
				_this._doTransform();
			}, _this.option.interval);

		},
		/**
		 * 模式切换
		 * [_doTransform description]
		 * @return {[type]} [description]
		 */
		_doTransform: function() {
			var _this = this;
			_this["_toggle" + _this._mode.charAt(0).toUpperCase() + "" + _this._mode.substr(1)]();
		},
		/**
		 * 普通模式
		 * [_toggleDefault description]
		 * @param  {[type]} elements [description]
		 * @param  {[type]} index    [description]
		 * @return {[type]}          [description]
		 */
		_toggleDefault: function(elements, index) {
			var _this = this;

			_this._tabHdItem.eq(_this._curIndex).addClass(_this._activeClass).siblings().removeClass(_this._activeClass);
			_this._tabBdItem.eq(_this._curIndex).show().siblings().hide();
			_this._callHandler();

		},
		/**
		 * 滑动模式
		 * [_toggleSlide description]
		 * @return {[type]} [description]
		 */
		_toggleSlide: function() {
			var _this = this,
				_opt = {},
				_cellWidth = _this._tab.outerWidth(),
				_cellHeight = _this._tab.outerHeight();

			_this._tabHdItem.eq(_this._curIndex).addClass(_this._activeClass).siblings().removeClass(_this._activeClass);

			_this._tab.addClass("slide");
			_this._tabBdItem.width(_cellWidth);
			_this._tabBdItem.height(_cellHeight);
			// 运动方向选择
			switch (_this.option.direction) {
				// 水平方向滑动
				case "horizontal":
					_opt = {
						left: -_cellWidth * _this._curIndex
					};
					_this._tabBdCon.width(_cellWidth * _this._length)
					break;
					// 垂直方向滑动
				case "vertical":
					_opt = {
						top: -_cellHeight * _this._curIndex
					};
					_this._tabBdCon.height(_cellHeight * _this._length)
					break;
			}
			// 动画
			_this._tabBdCon.stop().animate(_opt,
				_this.option.duration,
				function() {
					_this._callHandler();
				});
		},
		/**
		 * 渐变模式
		 * [_toggleFade description]
		 * @return {[type]} [description]
		 */
		_toggleFade: function() {
			var _this = this;
			_this._tabHdItem.eq(_this._curIndex).addClass(_this._activeClass).siblings().removeClass(_this._activeClass);
			_this._tabBdItem.eq(_this._curIndex).fadeIn().siblings().hide(0);
			_this._callHandler();
		},
		/**
		 * [_callHandler description]
		 * @return {[type]} [description]
		 */
		_callHandler: function() {
			var _this = this;
			typeof _this._handler === 'function' && _this._handler(_this._curIndex);
		}
	};
	/**
	 * [Tab description]
	 * @type {[type]}
	 */
	if (typeof define === "function" && define.amd) {
		// AMD模式
		return Tab;
	} else {
		// 全局模式
		this.Tab = Tab;
	}
}));