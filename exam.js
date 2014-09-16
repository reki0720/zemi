onload = function(){
	draw();
};

function draw(){

	var rnd = sessionStorage.getItem("dir");
	var n_lv = sessionStorage.getItem("lv");
	var canvas = document.getElementById('draw');

	if( !canvas || !canvas.getContext){
		return false;
	}
	var ctx = canvas.getContext('2d');
	ctx.lineWidth = 10;
	ctx.beginPath();

	if( rnd == 0){
		ctx.arc(200, 150, 90/n_lv, 60 * Math.PI / 180, 120 * Math.PI / 180, true);
	}else if (rnd == 1){
		ctx.arc(200, 150, 90/n_lv, 150 * Math.PI / 180, 210 * Math.PI / 180, true);
	}else if (rnd == 2){
		ctx.arc(200, 150, 90/n_lv, 240 * Math.PI / 180, 300 * Math.PI / 180, true);
	}else if (rnd == 3){
		ctx.arc(200, 150, 90/n_lv, 330 * Math.PI / 180, 390 * Math.PI / 180, true);
	}

	ctx.stroke();
};