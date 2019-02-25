(function(){
	lquery = function(selector){
		return new lquery.fn.init(selector)
	}
	lquery.fn = lquery.prototype = {
		constructor:lquery,
		init:function(selector){
			if(!selector){
				return this
			}
			else if(selector == 'function'){
				window.addEventListener = ('')
				this[0] = document;
				return this
			}
		}
	}
	lquery.fn.init.prototype = lquery.fn
	window.$ = window.lquery = lquery
})(window);