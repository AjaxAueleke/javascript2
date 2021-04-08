// // var multi = [[]];
// // var arr = [
// //   [0, 1, 2, 3],
// //   [1, 0, 1, 2],
// //   [2, 1, 0, 1],
// // ];
// // document.write(arr);
// // for (let i = 0; i < 10; i++) {
// //     document.write(i+"<br>");
// // }
// // var table = parseInt(prompt("Enter the number to show its multiplication number : "));
// // for (let i = 0; i < 10; i++)
// // {
// //     document.write(table + " x " + i + " = " + table *i +"<br>" );
// // }

// //Question 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++)
// {
//   document.write("Element at index " + i + " is " + fruits[i] + " <br>");

// }

// //end of question 5

// //Question 6
// for (let i = 1; i<=15; i++)
//   document.write(i + " ");
// document.write("<br>");
// for (let i = 10; i > 0; i--)
//   document.write(i+" ");

// for (let i = 0; i<=20; i=i+2)
//   document.write(i + " ");
// document.write("<br>");
// for (let i = 1; i < 20; i = i +2)
//   document.write(i+" ");
// document.write("<br>");
//   for (let i = 2; i <=20; i=i+2)
// {
//   document.write(i+"K ");
// }
// var A = ["cake", "apple pie","cookie", "chips","patties"];
// var search = prompt("Enter the string you want to search");

// for (let i = 0; i < A.length; ++i)
// {
//   if (A[i] === search)
//   {
//     document.write(search + "is <b>available</b> at" + i + "in our bakery");
//     break;
//     flag = true;
//   }
// }
// if (i >= A.length)
// {
//   document.write("Not found");
// }
// var A = [24, 53, 78, 91, 12];
// A.sort((a,b) => {console.log(a,b);
// return a - b});
// console.log(A);
// console.log(A[A.length - 1]);
// console.log("Smallest number in an array : " + A[0]):
// for (let i = 0; i < 500; i=i+5)
// {
//   console.log(i);
// }
// var fam = prompt("Enter your first name : ");
//  var lam = prompt("ENter your last name : ");
//  console.log(fam + " " + lam);

// var pro = prompt("Enter your mobile phone model : ");
// console.log(pro.length);

// console.log("Pakistani".indexOf("n"));
// console.log("Hello World".lastIndexOf("l"));
// console.log("Pakistani");
// console.log("index " + "pakistani".charat(2));
// console.log("Hello".concat(" World"));
// console.log("City is islamabad".replace("islamabad", "hyderabad"));
// var message =
//   "Ali and Sam are best friends. They play cricket and football together.";
// while (message.indexOf("and") !== -1) {
//   message = message.replace(/and/,"&");
//   console.log("H");
// }
// console.log(message);
// var num = parseInt("472");
// var input = prompt("Enter a word");
// document.write(`<h1>${input.toUpperCase()}</h1>`);
// var javascript = "javascript";
// var upperjava = javascript[0].toUpperCase() + (javascript.slice(1, javascript.length )).toLowerCase();
// document.write(upperjava);
// var prom = prompt("ENter your username :");
// if(prom.indexOf("@") === -1 && prom.indexOf(".") === -1 && prom.indexOf("!") === -1 && prom.indexOf(","))
// {
//  alert("Valid Username "); 
// }
// else {
//   alert("Please enter a valid username.");
// }
// var A = ["cake","apple pie", "cookie", "chips","patties"];
// var search = prompt("Enter your search : ").toLocaleLowerCase();
// var b = false;

// for (let i = 0; i < A.length;i++) {
//   if (A[i] === search)
//   {
//     b = true;
//     alert("The product is availble");
//   }
// }
// if (!b)
// {
//   alert("ERROR 404 : NOT FOUND");
// }
// var pass = prompt("Enter your password : ");
// if(pass.search(/[a-z]/g) === -1 || pass.search(/[A-Z]/) === -1 || pass.length < 6 === -1|| pass.search(/[0-9]/g))
// {
//     if (pass[0].search(/[0-9]/) === -1)
//     {
//         alert("Valid");
//     }   
//     else 
//     {
//         alert("Invalid");
//     }
// }
// else {
//     alert("Invalid");
// }
// var uni = "University of Karachi";
// var uniarr = [];
// for (let i = 0; i < uni.length; i++)
// {
//     uniarr.push(uni[i]);
//     console.log(uniarr[i])
// } 
// var input = prompt("Enter your input " )
// document.write("The last letter that you wrote is : " + input[input.length -1]);
