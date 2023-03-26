var dateToCountDown2 = '2023-04-2 23:55:00';//Thời điểm đếm ngược đến
var timer = setInterval(function(){
    var tmp = new Date(dateToCountDown2).getTime() - new Date().getTime();

    var day = Math.floor(tmp/(1000*60*60*24));
    var hour = Math.floor((tmp%(1000*60*60*24))/(1000*60*60));
    var min = Math.floor((tmp%(1000*60*60))/(1000*60));
    var sec = Math.floor((tmp%(1000*60))/1000);
    if(sec <= -1){ //hết thời gian đếm ngược
        clearInterval(timer);//Không đếm nữa
        //Làm gì đó

        document.getElementById("countdown2").innerHTML = "hết thời gian!"

    }
    else{
        if (min < 10){    

                document.getElementById("countdown2").innerHTML=day+" ngày "+hour+":0"+min+":"+sec;  
    
                
        }
        else{

            document.getElementById("countdown2").innerHTML =day+" ngày "+hour+":"+min+":"+sec;

        }
 
    }
},1000)