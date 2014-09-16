var div_result = document.getElementById('div_result');
var div_status = document.getElementById('div_status');

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = function(event) {
  console.log("onresult");
  var result = event.results[event.results.length - 1];
  var old_lv= localStorage.getItem("lv");
  var old_mis= localStorage.getItem("mis");
  if(result.isFinal){
    var last_spoken = result[0].transcript.trim();
    console.log("last_spoken=" + last_spoken);
    div_result.innerText = last_spoken;
    if(rnd==0){
        if(last_spoken.toLowerCase() == '上'){
        	recognition.stop();
        	if(rand==1){
        		old_lv=+1;
        		localStorage.setItem("lv",old_lv);
        	}else{
        		old_mis=+1;
        		localStorage.setItem("mis",old_mis);
        	}
        	location.reload();
        }
    }else if(rnd==1){
        if(last_spoken.toLowerCase() == '右'){
        	recognition.stop();
        	if(rand==1){
        		old_lv=+1;
        		localStorage.setItem("lv",old_lv);
        	}else{
        		old_mis=+1;
        		localStorage.setItem("mis",old_mis);
        	}
        	location.reload();
        }
    }else if(rnd==2){
        if(last_spoken.toLowerCase() == '下'){
        	recognition.stop();
        	if(rand==1){
        		old_lv=+1;
        		localStorage.setItem("lv",old_lv);
        	}else{
        		old_mis=+1;
        		localStorage.setItem("mis",old_mis);
        	}
        	location.reload();
        }
    }else if(rnd==3){
        if(last_spoken.toLowerCase() == '左'){
        	recognition.stop();
        	if(rand==1){
        		old_lv=+1;
        		localStorage.setItem("lv",old_lv);
        	}else{
        		old_mis=+1;
        		localStorage.setItem("mis",old_mis);
        	}
    		location.reload();
        }
    }
    }
};

recognition.onstart = function() {
  console.log("onstart");
  div_status.innerText = 'Listening...';
};

recognition.onerror = function(event) {
  console.log("event.error=" + event.error);
  div_status.innerText = event.error;
};

recognition.onend = function() {
  console.log("onend");
  div_status.innerText = 'Stopped to listen!';
};

recognition.lang = 'ja';
recognition.start();