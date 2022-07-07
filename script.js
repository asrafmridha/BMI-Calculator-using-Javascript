 function bmicalculate(){

    var _height=document.getElementById("height").value;
    var _weight=document.getElementById("weight").value;
   
    var _bmi= _weight/(_height/100 * _height/100);
    var _total =_bmi.toFixed(3);

    document.getElementById("toshow").innerHTML= "your Bmi is " + _total;
  
 }
 

 