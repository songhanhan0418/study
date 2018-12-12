	function animate(obj,attr,target,isLinear,fn){
		if(isLinear == undefined){
			isLinear = true;
		}
		var iSpeed = 0;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var isStop = false;
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current = Math.round(current *100);
			}
			if (isLinear) {
				if(current > target){
					iSpeed = -10;
				}else{
					iSpeed = 10;
				}
				if(Math.abs(target-current) < Math.abs(iSpeed)){
					if(attr == 'opacity'){
						obj.style[attr] =target/100;
					}else{
						obj.style[attr] =target +'px';
					}
					isStop = true;
				}
			}else{
				iSpeed = (target - current)/10;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(!iSpeed){
					isStop = true;
				}
			}
			if(isStop){
				clearInterval(obj.timer);
				if(typeof fn == 'function'){
					fn();
				}
			}else{
				if(attr == 'opacity'){
					obj.style[attr] = (current + iSpeed)/100;
				}else{
					obj.style[attr] = current + iSpeed + 'px';
				}
			}
		},30);
	}



	function getScrollTop(){
		return  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;	
	}