var div_result;

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = function(event) {
  var old_lv= SessionStorage.getItem("lv");
  var old_mis= SessionStorage.getItem("mis");
  if(result.isFinal){
    var last_spoken = result[0].transcript.trim();
    if(rnd==0){
        if(last_spoken.toLowerCase() == '上'){
        	recognition.stop();
        	if(rand==1){
        		old_lv=+1;
        		SessionStorage.setItem("lv","old_lv");
        	}else{
        		old_mis=+1;
        		SessionStorage.setItem("mis","old_mis");
        	}
        	location.reload();
        }
    }else if(rnd==1){
        if(last_spoken.toLowerCase() == '右'){
        	recognition.stop();
        	if(rand==1){
        		old_lv=+1;
        		SessionStorage.setItem("lv","old_lv");
        	}else{
        		old_mis=+1;
        		SessionStorage.setItem("mis","old_mis");
        	}
        	location.reload();
        }
    }else if(rnd==2){
        if(last_spoken.toLowerCase() == '下'){
        	recognition.stop();
        	if(rand==1){
        		old_lv=+1;
        		SessionStorage.setItem("lv","old_lv");
        	}else{
        		old_mis=+1;
        		SessionStorage.setItem("mis","old_mis");
        	}
        	location.reload();
        }
    }else if(rnd==3){
        if(last_spoken.toLowerCase() == '左'){
        	recognition.stop();
        	if(rand==1){
        		old_lv=+1;
        		SessionStorage.setItem("lv","old_lv");
        	}else{
        		old_mis=+1;
        		SessionStorage.setItem("mis","old_mis");
        	}
    		location.reload();
        }
    }
    }
};

recognition.lang = 'ja';
recognition.start();
