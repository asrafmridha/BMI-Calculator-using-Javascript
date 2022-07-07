 function bmicalculate(){

    var _height=document.getElementById("height").value;
    var _weight=document.getElementById("weight").value;
   
    var _bmi= _weight/(_height/100 * _height/100);
    var _total =_bmi.toFixed(3);

    document.getElementById("toshow").innerHTML= "your Bmi is " + _total;
    if(_total<18.5 ){

        document.getElementById("message").innerHTML="Thinness";
    }
    else if(_total=>18.5 || _total <= 25){

        document.getElementById("message").innerHTML="Normal";
    }
    else{

        document.getElementById("message").innerHTML=" ";

    }
 }
 

 