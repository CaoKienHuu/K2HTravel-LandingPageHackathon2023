var dateToCountDown1 = '2023-03-30 23:55:00';//Thời điểm đếm ngược đến
var timer = setInterval(function(){
    var tmp = new Date(dateToCountDown1).getTime() - new Date().getTime();

    var day = Math.floor(tmp/(1000*60*60*24));
    var hour = Math.floor((tmp%(1000*60*60*24))/(1000*60*60));
    var min = Math.floor((tmp%(1000*60*60))/(1000*60));
    var sec = Math.floor((tmp%(1000*60))/1000);
    if(sec <= -1){ //hết thời gian đếm ngược
        clearInterval(timer);//Không đếm nữa
        //Làm gì đó

        document.getElementById("countdown1").innerHTML = "hết thời gian!"

    }
    else{
        if (min < 10){    

                document.getElementById("countdown1").innerHTML=day+" ngày "+hour+":0"+min+":"+sec;  
    
                
        }
        else{

            document.getElementById("countdown1").innerHTML =day+" ngày "+hour+":"+min+":"+sec;

        }
 
    }
},1000)