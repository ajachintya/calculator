var btn=document.getElementsByClassName('button');
var display=document.getElementById('disp');
var y=0;
var t;
for(var i=0;i<btn.length;i++)
{
   btn[i].addEventListener('click',function(){
      value=this.getAttribute('value')
      if(value=='=' && y==0){
      var x=eval(display.innerHTML);
       display.innerHTML = "";
       display.innerHTML=x;
      }
      else if(value=="+/-"){
         display.innerHTML=-display.innerHTML;
      }
      else if(value=="A/C"){
         display.innerHTML = "";
      }
      else if(value=="%"){
        y=100;
        t=eval(display.innerHTML);
        display.innerHTML = "";
        display.innerHTML +="%";
     }
     else if(y==100 && value=='='){
         y=0;
       display.innerHTML = "";
       display.innerHTML=t/100;
     }
      else{
         display.innerHTML+=value;
      }
     
   });
}
    document.addEventListener('keydown',function(event){
        console.log(event.keyCode);
    if(event.keyCode==96 || event.keyCode==48){
        display.innerHTML+="0";
    }
    else if(event.keyCode==97 || event.keyCode==49){
        display.innerHTML+="1";
    }
    else if(event.keyCode==98 || event.keyCode==50){
        display.innerHTML+="2";
    }
    else if(event.keyCode==99 || event.keyCode==51){
        display.innerHTML+="3";
    }
    else if(event.keyCode==100 || event.keyCode==52){
        display.innerHTML+="4";
    }
    else if(event.keyCode==101 || event.keyCode==53){
        display.innerHTML+="5";
    }
    else if(event.keyCode==102 || event.keyCode==54){
        display.innerHTML+="6";
    }
    else if(event.keyCode==103 || event.keyCode==55){
        display.innerHTML+="7";
    }
    else if(event.keyCode==104 || event.keyCode==56){
        display.innerHTML+="8";
    }
    else if(event.keyCode==105 || event.keyCode==57){
        display.innerHTML+="9";
    }
    else if(event.keyCode==8){
        display.innerHTML="";
    }
    else if((event.keyCode==187 && event.shiftKey==false)|| event.keyCode==13){
        var x=eval(display.innerHTML);
       display.innerHTML = "";
       display.innerHTML=x;
    }
    else if((event.keyCode==187 && event.shiftKey==true)||event.keyCode==107)
    {
        display.innerHTML+="+";
    }
    else if(event.keyCode==189 ||event.keyCode==109)
    {
        display.innerHTML+="-";
    }
    else if((event.keyCode==56 && event.shiftKey==true)||event.keyCode==106)
    {
        display.innerHTML+="*";
    }
    else if(event.keyCode==191 ||event.keyCode==111)
    {
        display.innerHTML+="/";
    }
    else if(event.keyCode==110)
    {
        display.innerHTML+=".";
    }
 });