function claculate() {

    var a, b, c, d, e;
    var total, percentage;
  
  
    a = document.getElementById("s1").value;
    b = Number(document.getElementById("s2").value);
    c = Number(document.getElementById("s3").value);
    //d = Number(document.getElementById("s4").value);
    //e = Number(document.getElementById("s5").value);
  
    total = a ;
    
    document.getElementById("sum").innerHTML = "Hi!  : " + a;
    document.getElementById("percentage").innerHTML = "Your Hsc Result: " + b;
    document.getElementById("grade").innerHTML = "Your tution fee: " + c + " /-";
    
  
    if (b==5){
        document.getElementById("habibi").innerHTML = " Your will get  100% Scholarship for first 3 semester . Required TGPA to continue waiver: 3.80";
    }
    else if (b<=4.99 && b>=4.80){
        document.getElementById("habibi").innerHTML = "Your will get 60% Scholarship for first 3 semester: 3.70 " ;
    }
    else if(b<=4.79 && b>=4.50){
        document.getElementById("habibi").innerHTML = "Your will get 40% Scholarship for first 3 semester/ Required TGPA to continue waiver: 3.60 ";
    }
    else if(b<=4.49 && b>=4.00){
        document.getElementById("habibi").innerHTML = "Your will get 20% Scholarship for first 3 semester/ Required TGPA to continue waiver: 3.50 ";
    }else {

        document.getElementById("habibi").innerHTML = "Your will not get any Scholarship from your result";
         
    }
    




  }
  


  