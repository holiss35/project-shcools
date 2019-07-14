window.onload=function(){
    var oli=document.querySelectorAll(".uppcase-city li");
    var oul=document.querySelectorAll(".select-city");
    var olicur=document.querySelector("ul.cur"); 
    var city=document.querySelector(".beijing")
    for(var i=0;i<oli.length;i++){
         oli[i].index=i;
        oli[i].onclick=function(){
        for(var j=0;j<oli.length;j++){
           oli[j].className=" "; 
        oul[j].style.display="none";
        }  
        oul[this.index].style.display="block";
        this.className="active"
        }
    }
    var citys=olicur.children;
    for(var j=0;j<citys.length;j++){
    citys[j].onclick=function(){
      var text=this.innerText;
         city.innerHTML=text;
    }          
    }  
    
}