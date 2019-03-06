;(function($){

function Change($elem,options){
	this.$elem = $elem;
	this.options = options;
	this.$box = $(document).find('.box');
	this.$btn = $(document).find('.btn');

	this.init();
}
Change.prototype ={
	constructor : Change,
	init:function(){
		this.$btn.on('click',$.proxy(this.show,this))
		this.$box.on('click',$.proxy(this.leftTop,this))
		this.$box.css({
			top:this.options.top,
			left:this.options.left,
			background:this.options.background
		})
	},
	show:function(){
		this.$box.show();
	},
	leftTop:function(){
		if(parseFloat(this.$box.css('top')) !== 0){
			this.$box.css({
				top:0,
				left:0
			})
		}else{
			this.$box.css({
				left:(window.innerWidth-this.$box[0].offsetWidth),
				top:(window.innerHeight-this.$box[0].offsetHeight)
			})
			
		}
	}
}
Change.DEFAULTS = {
	left:0,
	top:0,
	background:'red'
}
$.fn.extend({
	change:function(options){
		return this.each(function(){
			var $elem = $(this);
			options = $.extend({},Change.DEFAULTS,options);

			change = new Change($elem,options);
		})
	}
})


})(jQuery);