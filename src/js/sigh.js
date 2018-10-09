function rand(min, max) {
	return Math.random() * (max - min + 1) + min;
}


setInterval(function(){ 
	$(".sigh").attr({
		style: "--sighscale:"+rand(2,8),
	});
},9950 );