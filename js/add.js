(function(){

    var oli=document.querySelectorAll("#indexoneL_nav li");
        for(var i=0;i<oli.length;i++){
            oli[i].index=i;
            oli[i].onmouseover=function(){
              var ochild=oli[this.index].childNodes;
              for(var j=0;j<ochild.length;j++){
                if(ochild[j].nodeName=="DIV"){
                    ochild[j].style.display="block";
                    break;
                }
              }
            }
            oli[i].onmouseout=function(){
                var ochild=oli[this.index].childNodes;
              for(var j=0;j<ochild.length;j++){
                if(ochild[j].nodeName=="DIV"){
                    ochild[j].style.display="none";
                    break;
                }
              }
            }
        }

})();
(function(){
  var num=10;
var oem=document.querySelector(".tips em");
var oi=document.querySelector(".tips span");
oi.addEventListener("click",function(){
    document.body.removeChild(oem.parentNode.parentNode); 
},false)
var timer=setInterval(function(){

    num--;
    if(num==0){  
    clearInterval(timer);
       document.body.removeChild(oem.parentNode.parentNode)
    }else{
        oem.innerHTML=agg(num);  
    }
    
},1000)
 

function agg(num){
        switch (num) {
    case 10:
        return  "十";
        break;
    case 9:
        return  "九";
         break;
    case 8:
        return   "八";
         break;
    case 7:
        return  "七";
         break;
    case 6:
        return  "六";
         break;
    case 5:
        return  "五";
         break;
    case 4:
        return  "四";
         break;
    case 3:
        return  "三";
         break;
    case 2:
        return  "二";
         break;

    case 1:
    return  "一";
         break;
 case 0:return "零" ;
        break;

    }
  }
})();

// 图片轮播;
;(function(){
  var index_cirle=document.querySelectorAll("#bannerCenter ul.index_btn li");
  var index_img=document.querySelectorAll("#bannerCenter ul.index_img li");
  var index_conainer=document.querySelector("#bannerCenter");
  for(var i=0;i<index_cirle.length;i++){
    index_cirle[i].onmouseover=(function(j){      
        return function(){
          if (this.className=="cur") {
            return;
          }
           var newIndex=j,oldIndex;
        for(var k=0;k<index_cirle.length;k++){
          if(index_cirle[k].className=="cur"){
            oldIndex=k;
          }       
        } 
        index_cirle[newIndex].className="cur";
        index_cirle[oldIndex].className="";
        Mopacity(0,oldIndex,newIndex);
        }
    })(i)
  }
  function Mopacity(num,oldIndex,newIndex){
  if(num==0){
    index_img[newIndex].className="index_o_mIcur";
    index_img[oldIndex].className="";
  }
    num+=10;
    if(num<=100){
      index_img[newIndex].style.opacity=num/100;
      index_img[oldIndex].style.opacity=1-num/100;
      index_img[newIndex].style.filter="alpha(opacity="+num+")";
      index_img[newIndex].style.filter="alpha(opacity="+(100-num)+")";
    }
    return setTimeout(function(){
      Mopacity(num,oldIndex,newIndex)
    },20);
  }
  function autosetinerval(){
    var newIndex,oldIndex;
    var last=index_img.length-1;
    for(var i=0;i<index_img.length;i++){
      if(index_img[i].className=="index_o_mIcur"){
        oldIndex=i;
      }
    }
    if(oldIndex!=last){
      newIndex=oldIndex+1;
    }else{
      newIndex=0;
    }
    Mopacity(0,oldIndex,newIndex);
    index_cirle[newIndex].className="cur";
    index_cirle[oldIndex].className="";
  }
  var timer=setInterval(autosetinerval,2000);
    index_conainer.onmouseover=function(){
       clearInterval(timer);
    }
    index_conainer.onmouseout=function(){
      clearInterval(timer);
       timer=setInterval(autosetinerval,2000);
    }
})();
  
// (function(){
// var obtn=document.querySelectorAll(".banner-tab li");
// var divTab=document.querySelectorAll(".banner-tab-container");
//     for(let i=0;i<obtn.length;i++){
//       obtn[i].onclick=function(){
//         for(let j=0;j<obtn.length;j++){
//           obtn[j].className="";
//           divTab[j].style.display="none";
//         }
//         this.className="banner-tab-check";
//         divTab[i].style.display="block";
//       }
//     }
// })()
// 第二种方法写；
(function(){
   var obtn=document.querySelectorAll(".banner-tab li");
   var divTab=document.querySelectorAll(".banner-tab-container"); 
   for(var i=0;i<obtn.length;i++){
    obtn[i].onmouseover=(function(j){
        return function(){
        if(obtn[j].className=="banner-tab-check"){
          return ;
        }
          var newIndex=j,oldIndex;
          for(var k=0;k<obtn.length;k++){
            if(obtn[k].className=="banner-tab-check"){
              oldIndex=k;
            }
          }
          obtn[newIndex].className="banner-tab-check";
          obtn[oldIndex].className="";
          divTab[oldIndex].style.display="none";
          divTab[newIndex].style.display="block";
        }
    })(i)
   }
})()
//search
;(function(){
  var input=document.querySelector(".search-form input");
  var defaultValue=input.value;
    input.onfocus=function(){
    this.value="";
    }
    input.onblur=function(){
      if(this.value==""){
        this.value=defaultValue;
      }else{
        this.value=this.value;
      }
    };
    var input_1=document.querySelector(".fixed input");
  var defaultValue=input_1.value;
    input_1.onfocus=function(){
      if(this.value==defaultValue){
        this.value="";
      }
    }
    input_1.onblur=function(){
      if(this.value==""){
        this.value=defaultValue;
      }
    };

})()
;(function(){
  var oli=document.querySelectorAll(".product_aside_list1_list li");
  var oul=document.querySelectorAll('.product_aside_list1_list');

  function liTop(num){
    num+=2;
    if(num<=70){
      oli[0].style.marginTop=-num+"px";
      return setTimeout(function(){liTop(num)},20);
    }else{
      oul[0].appendChild(oli[0]);
      // oli[0].style.marginTop="0"
     oli=document.querySelectorAll(".product_aside_list1_list li");
      oli[(oli.length-1)].style.marginTop="0px";
    }
  }
  var timer=setInterval(function(){liTop(0)},1000);
  oul[0].addEventListener("mouseover",function(){
    clearInterval(timer);
  },false);
  oul[0].addEventListener("mouseout",function(){
    timer=setInterval(function(){liTop(0)},1000);
  },false)
})();
// 二级菜单的设置
(function(){
  function method(className1,className2){
      var node=document.querySelectorAll(className1+" "+"dd");
      var node2=document.querySelectorAll(className1+" "+className2);
      for(let i=0;i<node2.length;i++){
        node[i].onmouseover=function(){
          for(let j=0;j<node2.length;j++){
            node[j].className="";
            node2[j].style.display="none";
          }
          this.className="cur";
          node2[i].style.display="block";        
        }
      }
  }
  method(".product_left_list",".product_left_price");
  method(".product_left_list2",".product_left_price");
  method(".product_left_list3",".product_left_price");

})()
;(function(){
  document.onscroll=function(){
     var osearch=document.querySelector("#search-form");
     var fixed=document.querySelectorAll(".fixed")[0];
  var top=osearch.getBoundingClientRect().top;//获取元素在可视区域顶端的距离;
  var ofixed=document.querySelectorAll(".fixed")[0];
  if (top<0){
    ofixed.style.display="block";
    }else{
    ofixed.style.display="none";
    }
  }
 
})()