function power (a,b){
document.write(a+b)
}
power(2,3)





function leap(){
    var EnterYear =+prompt("Enter year");
    var leapYear =["2012","2016","2020"];
    for (i=0;i<leapYear.length;i++){
        if (EnterYear == leapYear[i]){
            alert(" leap year");
            break;
        }else{
            alert(" not leapYear")
            break;
        }
    }
    }

  
leap()


var a = +prompt("Enter the value of triangle (A) ");
var b = +prompt("Enter the value of triangle (B) ");
var c = +prompt("Enter the value of triangle (C) ");
var s = (a+b+c)/2
function area(){
   var a = s-a*s-b*s-c
    var b =s*a;
    document.write(b)
}
area()




    var firstsub = +prompt("enter your marks in first subject out of 100");
    var secondsub = +prompt ("enter your marks in second subject out of 100");
    var thirdsub = +prompt ("enter your marks in third subject out of 100");


function average(){
    if ( firstsub>=80 && firstsub<=100){
        document.write( "first subject" + "Grade is A+" + "<br>") 
    }
    else if (firstsub>=70 && firstsub<=80){
        document.write( "first subject" + " Grade is A" + "<br>")
    }
    else if (firstsub>= 60 &&firstsub<=70){
        document.write( "first subject" + "Grade is B" + "<br>")
    }
    else if (firstsub>= 50 && firstsub<=60){
        document.write( "first subject" + "  Grade is C" + "<br>")
    }
    else if (firstsub>= 40 && firstsub<=50){
        document.write( "first subject" + "  Grade is D" + "<br>")
    }
    else {
        document.write ("your first subject marks is to much below" + "<br>")
}

if ( secondsub>=80 && secondsub<=100){
    document.write( "second subject" + "Grade is A+" + "<br>") 
}
else if (secondsub>=70 && secondsub<=80){
    document.write( "second subject" + " Grade is A" + "<br>")
}
else if (secondsub>= 60 &&secondsub<=70){
    document.write( "second subject" + "Grade is B" + "<br>")
}
else if (secondsub>= 50 && secondsub<=60){
    document.write( "second subject" + "  Grade is C" + "<br>")
}
else if (secondsub>= 40 && secondsub<=50){
    document.write( "second subject" + "  Grade is D" + "<br>")
}
else {
    document.write ("your second subject marks is to much below" + "<br>")
}
if ( thirdsub>=80 && thirdsub<=100){
    document.write( "third  subject" + "Grade is A+" + "<br>") 
}
else if (thirdsub>=70 && thirdsub<=80){ 
}
else if (thirdsub>= 60 &&thirdsub<=70){
    document.write( "third  subject" + "Grade is B" + "<br>")
}
else if (thirdsub>= 50 && thirdsub<=60){
    document.write( "third  subject" + "  Grade is C" + "<br>")
}
else if (thirdsub>= 40 && thirdsub<=50){
    document.write( "third  subject" + "  Grade is D" + "<br>")
}
else {
    document.write ("your third subject marks is to much below" + "<br>")
}




}


function percentage (){
    var a = firstsub+secondsub+thirdsub;
    var per = (a/300*100).toFixed(2);
      document.write(per +"%")
    if ( per>=80 && per<=100){
        document.write( "Your Grade is A+") 
    }
    else if (per>=70 && per<=80){
        document.write("Your Grade is A")
    }
    else if (per>= 60 && per<=70){
        document.write("Your Grade is B")
    }
    else if (per>= 50 && per<=60){
        document.write(" Your Grade is C")
    }
    else if (per>= 40 && per<=50){
        document.write(" Your Grade is D")
    }
    else {
        document.write ("your percentage is to much below")
    }
    
}
function main(){
    
    average();
    percentage();
}
main();


 function indexoff(){
    var names= prompt("Enter your name ");
    var findindex = prompt("enter a word what word you find");
    for (var i=0;i<names.length;i++){
      if (names[i]==findindex){
          document.write(i)
      }
    }
 }
 indexoff()



var string =prompt("Enter your");
var vowel = ["a", "e", "i", "o", "u"];

 function names() {
 
    for ( i = 0; i < vowel.length; i++) {
        for ( j = 0; j < string.length; j++) {
            if (vowel[i] == string.charAt(j)) {
               document.write(string.slice(0, j).concat(string.slice(j + 1, string.length))) 
            }
            
        }
       
    }
}
names()






var bb = prompt("Enter same text");
function ma(aa){
    var a = 'aeiouAEIOU';
    var inc=0;
    for (i=0;i<aa.length;i++){
        if (a.indexOf(aa[i]) !== -1){
            inc+=1;
        }
    }
    document.write(inc)
}
ma(bb)



var distance = +prompt("Enter a distance ","33");

function meter(a){
var mtr = a*1000;
document.write(mtr + "meter" +"<br>")
}
meter(distance);
function ft(a){
    var ft = a*3280;
    document.write(ft + "foot" +"<br>")
    }
    ft (distance);

    function inch(a){
        var inch = a*39370.1;
        document.write(inch + "inch" +"<br>")
        }
        inch (distance);