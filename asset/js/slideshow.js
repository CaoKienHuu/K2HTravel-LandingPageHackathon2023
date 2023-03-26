
var j = 0;
var i=0;
var imgarr = ["asset/img/z4198984585522_90ffe4604687f6c60ab5e3df5b1997db.jpg","asset/img/img0.jpg","asset/img/img1.jpg","asset/img/img2.jpg","asset/img/img3.jpg","asset/img/img4.jpg"]; 
var imgtag = document.getElementById("slideshow");
         function slide_show_auto(){
          imgtag.setAttribute("src",imgarr[i]);
          i++;
          if(i==imgarr.length){
            i =0;
          }
      
         }
         setInterval(slide_show_auto,2500);  
 

        //  