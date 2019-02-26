(function(window){
	var lQuery = function(selector){
		return new lQuery.fn.init(selector)
	}
	lQuery.fn = lQuery.prototype = {
		constructor:lQuery,
		init : function(selector){
			//1.布尔值是false
			if(!selector){
				return this
			}
			//2.函数
			else if(lQuery.isFunction(selector)){
				//console.log('function...')
				window.addEventListener('DOMContentLoaded',selector)
				//return {0:document,length:1}
				this[0] = document;
				this.length = 1
			}
			//3.字符串
			else if(lQuery.isString(selector)){
				//3.1html代码
				if(lQuery.isHtml(selector)){
					var tempDom = document.createElement('div');
					tempDom.innerHTML = selector;
					for(var i = 0;i<tempDom.children.length;i++){
						this[i] = tempDom.children[i];
					}
					this.length = tempDom.children.length
				}
				//3.2 选择器
				else{
					var doms = document.querySelectorAll(selector);
					for(var i = 0;i<doms.length;i++){
						this[i] = doms[i];
					}
					this.length = doms.length
				}
			}
			
			//4.数组
			else if(lQuery.isArray(selector)){
				for(var i = 0;i<selector.length;i++){
					this[i] = selector[i]
				}
				this.length = selector.length;
			}
			//5.对象
			else{
				this[0] = selector;
				this.length = 1;
			}
		},
		get : function(num){
			if(num){
				if(lQuery.isNumber(num)){
					if(num >= 0){
						return this[num]
					}
					else{
						return this[this.length+num]
					}
				}
			}
			else{
				var arr = [];
				for(var i = 0;i<this.length;i++){
					arr.push(this[i])
				}
				return arr
			}
		}
	}

	lQuery.fn.extend = lQuery.extend = function(options){
		console.log(this)
		for(key in options){
			this[key] = options[key]
		}
	}
	lQuery.extend({
		isFunction : function(fun){
			return typeof fun == 'function'
		},
		isString : function(str){
			return typeof str == 'string'
		},
		isHtml : function(str){
			return /<[^<>]+>/.test(str)
		},
		isArray : function(arr){
			return typeof arr== 'object' && length in arr;
		},
		isNumber : function(num){
			return typeof num == 'number'
		},		
	})




	lQuery.fn.init.prototype = lQuery.fn
	window.lQuery = window.$ = lQuery
})(window);