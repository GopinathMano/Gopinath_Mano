
Task4   22/07/2021


1)How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

Ans)
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
var A = JSON.stringify(obj1)==JSON.stringify(obj2);
console.log(A); //output: false



2)Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console

var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          // console.log(data)
          foo(data);
          
        };
        xhr.send();
      function foo(A){
        for(key of A){
          console.log(key.flag);
        }
         
       }
       
3)Use the same rest countries and print all countries name, region, sub region and population?
var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://restcountries.eu/rest/v2/all");
        xhr.onload = function () {
          var data = JSON.parse(this.response);
          // console.log(data)
          foo(data);
          
        };
        xhr.send();
      function foo(A){
        for(key of A){
          console.log(key.name);
          console.log(key.region);
          console.log(key.subregion);
         console.log(key.population); }  }
       
       
       4)https://medium.com/@reach2arunprakash/www-guvi-io-zen-d395deec1373
       
       Sub-Task1:
       1)Declare four variables without assigning values and print them in console?
      
      Ans)var person1; //output:undefined
       var person2; //output:undefined
       var person3; //output:undefined
       var person4; //output:undefined
       
       2)How to get value of the variable myvar as output
  
    Ans)var myvar= 1;
    console.log(myvar);
    
    3) Declare variables to store your first name, last name, marital status, country and age in multiple lines
    
    Ans) var firstName;
         var lastName;
         var maritalStatus;
         var country;
         var age;
      4)Declare variables to store your first name, last name, marital status, country and age in a single line 

    Ans) var firstName; var lastName;  var maritalStatus; var country; var age;
    
    5)  Declare variables and assign string, boolean, undefined and null data types
    
    Ans) var str = "I am string"; //string
         var num = 100; // Number
         var booln = true; //Booolean
         var undef ; //undefiend
         var empty = null; //null
         
      6) 6. Convert the string to integer
       let str = "123"
      * parseInt(str)
      * Number(str)
      *(+str)
      
      7. Write 6 statement which provide truthy & falsey values.
      
     truthy statement 
     * 1<2 ; 1 == "1" ; 1 == [1]; '1' == [1]; true ;
     falsey staement 
     * 1 === '1'; 1 === [1]; '1' === [1]; false ;
        
         
         
       
