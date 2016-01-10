     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        //return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
      var a = '';
      for (var i = s.length - 1; i >= 0; i--)
      a += str[i];
      return a;
      }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
            return[Math.min.apply(Math,arr);
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         return array.filter(function (values) {
            return c.indexOf(firstvalue, secondvalue + 1) < 0;
        });
      }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
        for (var i = 1; i <= 100; i++) {
    var expletive = '';
    if (i % 3 === 0) expletive += 'Fizz';
    if (i % 5 === 0) expletive += 'Buzz';
    console.log(expletive || i);
         
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         var indexfruits; 
         for(var i=0; i<fruitsToRemove.length; i++) 
         { 
              indexfruits = fruits.indexOf(fruitsToRemove[i]); 
              if(indexfruits >= 0) 
             { 
                  fruits = fruits.slice(0, indexfruits).concat(fruits.slice(indexfruits+1)); 
              } 
          } 
        return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         if(Array.isArray(toPush)) 
          {  
              for(var i=0; i<toPush.length; i++) 
            {  
               array.push(toPush[i]);  
             }  
         } else 
         {  
              array.push(toPush);  
          }  
       }               
     }
     

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
          if(sourceStr.length === 0) 
         { 
              return []; 
         } 
      return sourceStr.split(','); 
       }               
     }
         
    

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         var sum = 0;  
          for(var i=0; i<arguments.length; i++) 
          {  
              sum += arguments[i];  
         }  
          return sum;  
       }               
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
        var string = /^\s*$/;  
         return string.test(sourceStr);  
       }               
     }
     

     // write an example of a javascript closure

     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     
     var people = [{
                     firstName:"Spandana",
                     lastName:"Kothapeta",
                     city:"Fremont",
                     state:"CA",
                     zip:"94538",
                     phone:{
                         mobile:"12345678",
                         home:"87654321",
                         work:"12233456"
                     }
                 },
               {
            firstName:"SpandanaOne",
                     lastName:"KothapetaOne",
                     city:"Fremont",
                     state:"CA",
                     zip:"94538",
                     phone:{
                         mobile:"12345678",
                         home:"87654321",
                         work:"123456"
                     }
                }
                ]
  }
 )


     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');
     var obj = {
            __columns: [],
             __rows: [],
             addRow: function(A) {
                 this.__rows.push(A);
               console.log("Value is Added to row: " + A);
             },
            addColumn: function(A) {
                this.__columns.push(A);
                 console.log("Value is Added to column: " + A);
             },
             getData: function() {
 
                 var retObj = [];
 
                 for(var i = 0; i< this.__rows.length; i++) {
                     retObj.push({ 'column' : this.__columns[i] , 'row' : this.__rows[i] });
                 }
 
                 return JSON.stringify(retObj);
             }
         };
 
         obj.addRow(10);
         obj.addRow(20);
         obj.addRow(30);
         obj.addRow(40);
 
         obj.addColumn(100);
         obj.addColumn(200);
         obj.addColumn(300);
         obj.addColumn(400);
 
        console.log(obj.getData());

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
      var numbersString = "1,2,3,4";
         var data = numbersString.split(',');
          
         function printOut(){
             console.log("name = "+$("#selectId option:selected").text());
             console.log("value = "+$("#selectId option:selected").value());
             
         }
         var s = $("<select id=\"selectId\" name=\"selectName\" onchange=\"printOut()\"/>");
         for(var val in data) {
             $("<option />", {value: val, text: data[value]}).appendTo(s);
         }
        s.appendTo("#div1");

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
      var tempArray = [];
      for(var i=0;i<=5;i++){
         tempArray.push(i);
      }
          
      
      var tempString = "";
     for(var j=0;j<tempArray.length;j++){
         var temp = "<li>"+tempArray[j]+"</li>";
         tempString = tempString+temp;
      }
         $("#list1").html(tempString);

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)
     var tempArray=[];
      for(var i=0;i<=5;i++){
         tempArray.push("<input type='checkbox'/>");
      }

      $("#foobar").html(tempArray);
 
      function checkAll(){
          $("#foobar input[type=checkbox]").each(function () {
                     $(this).attr("checked", true);
          });
          return false;
      }
      function uncheckAll(){
          $("#foobar input[type=checkbox]").each(function () {
                     $(this).attr("checked", false);
          });
      return false;
      }
      $("#foobar").append("<a href=\"#\" onclick=\"javascript:checkAll();\">CheckAll</a> <br> <a href=\"#\" onclick=\"javascript:uncheckAll();\">uncheckAll</a>");
