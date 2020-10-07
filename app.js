console.log('JAI SIYARAM 🙏🙏🙏');

// //QUES 1
// let d = new Date;
// let day = d.getDay();
// let options = { weekday: 'long' }
// let dName = d.toLocaleDateString('en-US', options)
// console.log(dName)

// h = d.getHours();

// m = d.getMinutes();
// s = d.getSeconds();

// if (h > 12) {
//     h = h - 12;
// }
// else if (h == 0) {
//     h = 12;
// }
// else {
//     h = h;
// }
// if (m < 10) {
//     m = '0' + m;
// } else {
//     m = m
// }
// if (s < 10) {
//     s = '0' + s;
// } else {
//     s = s
// }

// let am = 'AM';
// if (h > 12) {
//     am = 'PM'
// }
// else {
//     am = 'AM'
// }
// console.log(h)
// console.log(m)
// console.log(s)
// console.log(`TODAY IS: ${dName} time is ${h}-${m}-${s} ${am}`);

// // QUES 2

// let w = window;
// console.log(window.print());
// window.print();

// // QUES 3
// let d= new Date;
// day  = d.getDate();
// m = d.getMonth()
// y = d.getFullYear();
// console.log( `${day}-${m}-${y}` )

// // QUES 4
// let [a,b,c] = [5,6,7];//USED HERONS FORMULA
// p = (a+b+c)/2
// d= p*(p-a)*(p-b)*(p-c)
// ar = Math.sqrt(d)
// console.log(ar)

// //  QUES 5
// function animate_string(id) 
// {
//     var element = document.getElementById(id);
//     var textNode = element.childNodes[0]; // assuming no other children
//     var text = textNode.data;

// setInterval(function () 
// {
//  text = text[text.length - 1] + text.substring(0, text.length - 1);
//   textNode.data = text;
// }, 100);
// }

// // QUES 6
// function leapyear(y) {
//     return (y%100 === 0)?(y%4 === 0):(y%400 === 0)
// }
// console.log(leapyear(2001))

// // QUES 7
// for (let year = 2014; year <= 2050; year++) {
//     d = new Date(year,0,1);
//     if(d.getDay()=== 0){
//         console.log(`1st january is sunday ${year}`)
//     }

// }

//// QUES 8
// p = pompt('input a no bt 0-10');
// rn = Math.round(10*Math.random());
// // co
// if (p == rn) {
//     console.log('GOOD WORK')
// }
//  else{
//     console.log('BAD WORK')
// }
// // console.log(r)

// QUES 9
// let d = new Date;
// let c = new Date(d.getFullYear(),11,25);
// if ((d.getMonth() === 11)&& (d.getDate()===25)) {
//     c.setFullYear(d.getFullYear()+1)
// }
// let day1 = 1000*60*60*24;
// let tl = Math.ceil((c.getTime() - d.getTime())/day1)
// console.log(d.getTime())
// console.log(tl + 'day left'); 

//10
// function calc(a,b,s) {
//     if (s == '*') {
//         d = a*b;
//         console.log(d)
//     } else if(s == '/') {
//         d = a/b;
//         console.log(d)
//     }
// }
// calc(8,4,'/')

// // 11 ==> CELSIUS CALC
// function ctemp(a){
//     let c, f;
//     console.log(((a/5)+(32/9))*9)
// }
// ctemp(12);

// // 12
// console.log(window.location.href);
// // OR 
// console.log(document.URL);

// JAVASCRIPT FUNC
//// 1
// function rev(a) {
//     a = a+'';//NUM TO STRING
//     d = a.split('').reverse().join('');//STRING INTO ARRAY AND THEN ARRAY METHODS
//     console.log(d)
// }
// rev(122)

// // 2
// function check(a) {
//     let d = a.split('').reverse().join('');
//     if (a === d) {
//         console.log('GREAT')
//     }
//     else{
//         console.log('ooh!')
//     }
// }

// check('op')

// // 3
// // Write a JavaScript function that generates all combinations of a string.
// function substrings(str1)
// {
// var array1 = [];
//   for (var x = 0, y=1; x < str1.length; x++,y++) 
//   {
//    array1[x]=str1.substring(x, y);
//     }

// var combi = [];
// var temp= "";
// var slent = Math.pow(2, array1.length);

// for (var i = 0; i < slent ; i++)
// {
//     temp= "";
//     for (var j=0;j<array1.length;j++) {
//         if ((i & Math.pow(2,j))){ 
//             temp += array1[j];
//         }
//     }
//     if (temp !== "")
//     {
//         combi.push(temp);
//     }
// }
//   console.log(combi.join("\n"));
// }

// substrings("dogo");

// function combinator (s) {
//     list_of_strings = new Array();
//     for(i=0;i<s.length;i++) {
//         for(j=i+1;j<s.length+1;j++) {
//             list_of_strings.push(s.slice(i, j));
//         }
//     }
//     return list_of_strings;
//  }

//  document.write(combinator("dogo"));

// // 4
// function sorter (s) {
//     let arr = s.split('').sort().join();
//     arr= arr.replace(/,/g,'')//REMOVING ALL COMA
//     console.log(arr)
// }
// sorter('WEBMASTER');

// // 5
// function capital(s) {
//     s = s.toLowerCase();
//     arr = s.split(' ');
//     newArr = [];
//     // for (let e of arr) {
//     //     e = e[0].toUpperCase()
//     //     arr.push(e)
//     // }
//     for (let e of arr) {
//         let d = e.charAt(0).toUpperCase();
//         f = e.slice(1);
//         newArr.push(d+f)
//         console.log(newArr)
//     }
//     // console.log(arr)
//     g =   newArr.join(' ');
//     console.log(g);
// }
// capital('nice shirt arpit   ')

// // 6
// function ds(s) {
//     let arr = s.split(' ');
//     let result = arr[0];

//     arr.forEach(element => {
//         if (result.length < element.length) {
//             result = element;
//         }
//     });
//     console.log(result)
// }

// ds('JAI SIYARAM');

// // 7
// function vChecker(str) {
//     let v = 'aeiouAEIOU';
//     let vcount = 0;
// //  for (let x = 0; x < str.length; x++) {
// //      const element = str[x];
// //      if(v.indexOf(element) !== -1)
// //      {
// //          vcount += 1;   
// //      }
// //  }
// for (let e of str) {
//     console.log(e)
//     if (v.includes(e)) {
//         vcount += 1;
//     } 
// }
//     console.log(vcount) ;

// }   
// vChecker('JAI SIYARAM');

// // 8
//     function pChecker(n) {
//         if(n === 1){
//             return true
//         }
//      else{
//         for (let x = 2; x < n; x++) {
//             if (n%x===0) {
//                 return false
//             }            
//         }
//         return true
//      }
//     }
//     console.log(pChecker(37));

// // 9
// function cs(n) {
//     s = typeof(n);
//     console.log(s)
// }
// cs(['lyr','dfd'])

// // 10
// function m(n) {
//     let r;
//     let c;
//     for ( r = 0; r < n; r++) {
//         for ( c = 0; c < n; c++) {
//             if (r === c) {
//                 console.log('1')
//             }       
//             else{
//                 console.log('0')
//             }     

//         }        
//         console.log('-------')
//     }
// }
// m(6)

// // 11
// function minmax(n) {
//     n.sort(function (x,y) {
//         return x-y
//     })
//     console.log(n)
//     // n.sort();
//     var uniq = [n[0]];
//     console.log(uniq)
//     var result = [];
//     for (let j = 1; j < n.length; j++) {
//         // const element = n[j];
//         if (n[j-1] !== n[j]) {
//             uniq.push(n[j])
//             console.log(uniq)
//         }
//     }
//     result.push(uniq[1],uniq[uniq.length-2])
//     console.log(result.join(','))
// }   

// minmax([1,2,4,5]);

// 12

// function pnc() {
// let temp = 0;
// for (var i=1; i<=n/2;i++) {

//     if (n%i === 0) {
//         temp += i;
//         // console.log(temp);
//     }

// }
// if (temp === n && temp !==0) {
//     console.log('Its a perfect no.')
// }
// else{
//     console.log('not a perfect no.')
// }
// }
// pnc(7);

// // 13
// function fc(n){
//     let fa= [];
//     console.log(fa)
//     for (let i = 1; i <= n; i++) {
//         if (n%i === 0) {
//             s = fa.push(i)
//             console.log(s)
//         }        
//     }
//     sfa = fa.join(',')
//     console.log(sfa);   
// }
// fc(12);

// // 14
// function amt(a,c) {
//         if (a === 0)
//          {
//             return [];
//         }
//         else
//         {
//             if (a >= c[0]) 
//             {
//                 l = (a - c[0]);
//                 return [c[0]].concat(amt(l,c));
//             }
//             else{
//                 c.shift();
//                 return amt(a,c);
//             }
//             // console.log(s)
//         }
// }
// console.log(amt(46,[25, 10, 5, 2,1]))

// function amountTocoins(amount, coins) 
// {
//  if (amount === 0) 
//   {
//      return [];
//    } 
//  else
//    {
//      if (amount >= coins[0]) 
//        {
//         left = (amount - coins[0]);
//         return [coins[0]].concat( amountTocoins(left, coins) );
//         } 
//       else
//         {
//          coins.shift();
//          return amountTocoins(amount, coins);
//         }
//     }
// } +
// console.log(amountTocoins(46, [25, 10, 5, 2,1]));

// // 15
// function exp(b,n) {
//     r = Math.pow(b,n)
//     console.log(r)
// }
// exp(2,3)

// // 16
// function un(s) {
//     let u = '' ;
//     for (let i = 0; i < s.length; i++) {
//         const element = s[i];

//         // if (u.indexOf(s.charAt(i))=== -1) {
//         //     u+= element;
//         // }
//         if (u.includes(element) === false) {
//             u += element
//         }
//     }
//     console.log(u)
// }
// un('Hello Arpit')

// 17
// function count(string) {
//     return string.split("").reduce(
//       (acc, el) => {
//         if(acc.hasOwnProperty(el))
//           acc[el]++;
//         else
//           acc[el] = 1;
//         return acc;
//       },[]
//     )
//    }
// function count(str) {
//     let arr = str.split('').sort().join('');
//     let c = 1
//     for (let i = 0; i < str.length; i++) {
//         // const element = str[i];
//         if (str[1] == str[i+1]) {
//             c++
//           }
//           else{
//               console.log(str+ ' ' +c)
//               c=1
//           }

//     }
// }
// function count(string) {
//     let string1 = string.split("").sort().join("");
//     let counter = 1;
//     for (let i = 0; i < string.length; i++) {
//       if (string1[i] == string1[i + 1]) {
//         counter++;
//       } else {
//         console.log(string1[i] + " " + counter);
//         counter = 1;
//       }
//     }
//   }
// //   count("thequickbrownfoxjumpsoverthelazydog")
//   var data = count("thequickbrownfoxjumpsoverthelazydog");
//   console.log(data);

// // 18
// // BINARY SEARCH
// function bs(arr,el) {
//     mpos = Math.floor(arr.length/2);
//     if (arr[mpos]===el) {
//         return mpos;
//     }
//     else if(arr.length ===0){
//         return null
//     }
//     else if (arr[mpos]<el) {
//         let sArr = arr.slice(arr[mpos] + 1);
//         let res = bs(sArr,el);
//         // if (res === null) {
//         //     return null;
//         // }
//         // else{
//         // }
//         return mpos + 1 + res;
//     }
//     else{
//         let sArr2 = arr.slice(0,mpos)
//         return bs(sArr2,el)
//     }
// }
// let myArr = [1,2,3,4,5,54];
// console.log(bs(myArr,2))

// // 19    
//FILTERING DATA
// function Big(val) {
//     return (e)=>{
//         return (e>val)
//     }
// }
// let res = [232,23,5,43].filter(Big(4));
// console.log(res)

// // 20
// //RANDOM STRING ID
// function r(l) {
//     let id = '';
//     let chList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSUVWXYZ0123456789';
//     for (let i = 0; i < l; i++) {
//         id += chList.charAt(Math.floor(Math.random()*chList.length))         
//     }
//     console.log(id);
// }
// r(9)

// // 21 
// // SUBSET 
// function subset(arra, arra_size)
//  {
//     var result_set = [], 
//     var result;


// for(var x = 0; x < Math.pow(2, arra.length); x++)
//   {
//     result = [];
//     i = arra.length - 1; 
//      do
//       {
//       if( (x & (1 << i)) !== 0)
//           {
//              result.push(arra[i]);
//            }
//         }  while(i--);

//     if( result.length >= arra_size)
//        {
//           result_set.push(result);
//         }
//     }

//     return result_set; 
// }

// console.log(subset([1, 2, 3], 2));

// // 22
// function ch(str,a) {
//    let c = 0;
//    for (let i = 0; i < str.length; i++) {
//        const element = str[i];
//        if (a === element) {
//            c = c+1
//         // console.log(c)
//     }
//    }
//    console.log(c)

// }

// ch('w3resource.com','m')

// 23
// function firstNonRepeatedCharacter(string) {
//     for (var i = 0; i < string.length; i++) {
//       var c = string.charAt(i);
//       if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
//         return c;
//       }
//     }
//     return null;
//   }

//   var someString = 'aabcbd';
//   console.log(firstNonRepeatedCharacter(someString));

// 24
// BUBBLE SORT 
// var a = [33, 103, 3, 726, 200, 984, 198, 764, 9];

// function bubbleSort(a) {
//     var swapped;//TRIGGER FOR DO-WHILE LOOP
//     do {
//         swapped = false;
//         for (var i=0; i < a.length-1; i++) {
//             if (a[i] > a[i+1]) {
//                 var temp = a[i];//to store value for [i]
//                 a[i] = a[i+1];//switching value
//                 a[i+1] = temp;//switching value
//                 swapped = true; 
//             }
//         }
//     } while (swapped);
// }

// bubbleSort(a);
// console.log(a);

// // 25
// REDUCE  FUNCTION 
// function cn(arr) {
//     return arr.reduce(function (acc, countary) {
//         return acc.length > countary.length ? acc : countary;
//     }
//     ,'');
// }

// console.log( cn(['America', 'Germany', 'India', 'Hindustan']) )
// function Longest_Country_Name(country_name) {
//     return country_name.reduce(function (lname, country) {
//         return lname.length > country.length ? lname : country;
//     },
//         "");
// }
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

// // 26
// function longest_substring_without_repeating_characters(input) {
//     var chars = input.split('');
//     var curr_char;
//     var str = "";
//     var longest_string = "";
//     var hash = {};
//     for (var i = 0; i < chars.length; i++) {
//     curr_char = chars[i];
//     if (!hash[chars[i]]) 
//     { 
//     str += curr_char; 
//     hash[chars[i]] = {index:i};
//     }
//     else 
//     {
//     if(longest_string.length <= str.length)
//     {
//     longest_string = str;
//     }
//     var prev_dupeIndex = hash[curr_char].index;
//     var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
//     str = str_FromPrevDupe + curr_char;
//     hash = {};
//     for (var j = prev_dupeIndex + 1; j <= i; j++) {
//     hash[input.charAt(j)] = {index:j};
//     }
//     }
//     }
//     return longest_string.length > str.length ? longest_string : str;
//     }
//     console.log(longest_substring_without_repeating_characters("google.com")); 

//     console.log(longest_substring_without_repeating_characters("example.com")); 

// // 27
// // PALINDROME
// function pc(s) {
//     var arr = s.split('').reverse().join('');
//     return s == arr;

// }

// function lp(s) {
//     console.log(s)
//     var maxLength = 0,
//         maxp = '';
//     for (var i = 0; i < s.length; i++) {
//         // const element = s[i];
//         var sub = s.substr(i, s.length);
//         // console.log(sub)
//         for (var j = sub.length; j >= 0; j--) {
//             // const element = sub[j];
//             var subSubStr = sub.substr(0, j);
//             // console.log(subSubStr);
//             if (subSubStr.length <= 1) {
//                 continue;
//             }
//             if (pc(subSubStr)) {
//                 if (subSubStr.length > maxLength) {
//                     maxLength = subSubStr.length;
//                     maxp = subSubStr
//                     // console.log(subSubStr)
//                 }
//             }
//         }
//     }
//     // console.log(maxp)
//     return maxp;
// }
// // console.log(maxp)

// // console.log(lp('banana'));

// console.log(lp("abracadabra"));

// function is_Palindrome(str1) {
//     var rev = str1.split("").reverse().join("");
//     return str1 == rev;
// }

// function longest_palindrome(str1) {
//     console.log(str1)
//     var max_length = 0,
//         maxp = '';

//     for (var i = 0; i < str1.length; i++) {
//         var subs = str1.substr(i, str1.length);
//         // console.log(subs)
//         for (var j = subs.length; j >= 0; j--) {
//             var sub_subs_str = subs.substr(0, j);
//             console.log(sub_subs_str)
//             if (sub_subs_str.length <= 1)
//                 continue;

//             if (is_Palindrome(sub_subs_str)) {
//                 if (sub_subs_str.length > max_length) {
//                     max_length = sub_subs_str.length;
//                     maxp = sub_subs_str;
//                     // console.log(sub_subs_str);
//                 }
//             }
//         }
//     }

//     return maxp;
// }
// console.log(longest_palindrome("abracadabra"));

// // console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));

// // 28
// function usedAsParameter(){
//     return `I'm a Parameter`
// }
// function doer(func) {
//     console.log(func)
// }
// doer(usedAsParameter());

// // 29
// // DISPLAY Function NAME
// function abc() {
//     console.log(arguments.callee.name)
// }
// abc()

// RECURSION    COPIED = [ 1,]
// 1
// function fact(n) {
//     let res;
//     if (n == 0) {
//         res = 1
//     }
//     else {
//         return res = n * fact(n - 1)
//     }
//     console.log(('hiih'));
//     console.log(res);
//     return res;
// }

// console.log(fact(10));

// // 2
// let gcd = function (n1, n2) {
//     if (!n2){
//         return n1  //YE line likhe bina code maximum stack cover kar rha h
//     }
//     return gcd(n2, n1 % n2)
// }

// console.log(gcd(12, 4)); 

// // 3
// function range(x, y) {
//     if (y - x === 2) {
//         // res.push(x + 1)  
//         return [x + 1];
//     }
//     else {
//         res = range(x + 1, y)
//         res.unshift(x + 1); // ye ek tarike se loop mein h jab y - x = 2 tab 
//         return res
//     }
//     // return res   
// }
// console.log(range(2, 9));

// // 4
// function sum (arr) {
//     return arr.reduce((x,y)=>{
//         return x+y
//     })
// }
// console.log(sum([12,1,30]));

// 4 - recursion
// sum =  function (arr) {
//     if (arr.length === 1) {
//         return arr[0];
//     }
//     else{
//         // console.log(arr.pop())
//         return arr.pop() + sum(arr)
//     }
// }

// var array_sum = function(my_array) {
//     if (my_array.length === 1) {
//       return my_array[0];
//     }
//     else {
//       return my_array.pop() + array_sum(my_array);
//     }
//   };

//   console.log(array_sum([1,2,3,4,5,6]));

// console.log(sum([1,2,4]));

// 5
// function exp(n,b) {
//     res = 1;
//     if (b == 0) {
//         return n
//     }
//     else{
//         return n * exp(n,b-1)
//     }
// }
// console.log(exp(3,2));

// function e(a,n) {
//     res = 1;
//     for (let i = 0; i < n; i++) {
//         res = a * res
//     }
//     console.log(res);
// }
// e(
//     2,3
// )

// // 6
// function fib(n) {
//     res = []
//     if (n === 1) {
//         return [0,1]
//     }
//     else{
//         s = fib(n-1)
//         s.push(s[s.length - 1] + s[s.length -2])
//         return s
//     }
// }

// console.log(fib(5));

// // 7
// function oe(n) {
//     if(n%2 == 0){
//         console.log('even');
//     }
//     else{
//         console.log('odd');
//     }
// }

// oe(10)

// recursion
// // 8 => BINARY (arr, n)SAERCH ARRAY MUST BE IN ORDER
// function bs {
//     mid = Math.floor(arr.length / 2);
//     // console.log(mid);
//     // if (arr.length <= 1) {
//     //     return null;
//     // }
//     if (n === arr[mid]) {
//         return mid
//     }
//     else if (arr.length === 1) {
//         return null
//     }
//     else if (n > arr[mid]) {
//         nArr1 = arr.slice(mid + 1);
//         res = bs(nArr1, n)
//         if (res === null) {
//             return null
//         }
//         else{
//             return mid + 1+ res;    
//         }
//     }
//     else {
//         nArr = arr.slice(0, mid);
//         return bs(nArr, n)
//     }
// }
// l = [1,3,23,122,233,544,5555]
// console.log(bs(l, 122));

// 9
// //DIGITAL OCEAN 
// const mergeSort = arr => {
//     if (arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length / 2),
//         left = mergeSort(arr.slice(0, mid)),
//         right = mergeSort(arr.slice(mid));
//     const merge = (arr1, arr2) => {
//         let sorted = [];

//         while (arr1.length && arr2.length) {
//             if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
//             else sorted.push(arr2.shift());
//         };

//         return sorted.concat(arr1.slice().concat(arr2.slice()));
//     };

//     console.log(merge([2, 5, 10, 57], [9, 12, 13]));
//     return merge(left, right);
// };

// console.log(mergeSort(a));

// CONDITIONAL AND FOR LOOP
// 1
// function com(a, b) {
//     return a > b ? a : b;
// }
// console.log(com(12,15));

// 2
// function a(a, b, c) {
//     return a * b * c < 0 ? alert(`sign is '-'`) : alert(`sign is '+'`)
// }

// a(12, -1, 32)

// 3 // AGAR A,B,C MEIN SPACE ' ' NA HO TO NUMBERS ARE CONVERTED TO STRING
// function sort(a, b, c) {
//     if (a > b && a > c) {
//         if (b > c) {
//             return a + ' ' + b + ' ' + c;
//         }
//         else {
//             return a + ' ' + c + ' ' + b;
//         }
//     }
//     else if (b > c && b > a) {
//         if (a > c) {
//             return b + ' ' + a + ' ' + c
//         }
//         else {
//             return b + c + a
//         }
//     }
//     else {
//         if (a > b) {
//             return c + ' '  + a  + ' ' + b
//         }
//         else {
//             return c + ' ' + b + ' ' + a
//         }
//     }
// }

// console.log(sort(4,3,5));

// // 4
// a=-5;
// b=-2;
// c=-6;
// d= 0;
// f=-1;
// if (a>b && a>c && a>d && a>f)
// {
//     console.log(a);
// }
// else if (b>a && b>c && b>d && b>f)
// {
//     console.log(b);
// }
// else if (c>a && c>b && c>d && c>f)
// {
//     console.log(c);
// }
// else if (d>a && d>c && d>b && d>f)
// {
//     console.log(d);
// }
// else
// {
//     console.log(f);
// }

// 5
// function oe() {
//     for (let i = 0; i < 15; i++) {
//         if (i%2 === 0) {
//             console.log(i +'is EVEN');
//         }        
//         else{
//             console.log(i +'is ODD');
//         }
//     }
// }

// oe()

// 6
// function grade() {
//     var stud = [['David',90],['Arpit',65],['Kavita',75],['Rahul',65],['Manju',75]];
//     let avg = 0;
//     for (let i = 0; i < stud.length; i++) {
//         const element = stud[i];
//         avg += stud[i][1];
//         avgMark = (avg/stud.length)
//     }
//     if (avgMark < 60) {
//         console.log('Grade F');
//     }
//     else if (avgMark < 70) {
//         console.log('Grade D');   
//     }
//     else if (avgMark < 80) {
//         console.log('Grade C');
//     }
//     else if (avgMark < 90) {
//         console.log('Grade A')
//     }
// }
// grade()

// 7
// function jsr() {
//     for (let i = 0; i < 100; i++) {
//         if (i%3 === 0) {
//             console.log('fizz');
//         }    
//         if (i%5 === 0) {
//             console.log('buzz');
//         }    
//         if (i%3 === 0 && i%5 === 0) {
//             console.log('fizzbuzz');
//         }
//     }
// }
// jsr();

// // 8
// function happy_number(num) {
//     var m, n;
//     var c = [];

//     while (num != 1 && c[num] !== true) {
//         c[num] = true;
//         m = 0;
//         while (num > 0) {
//             n = num % 10;
//             m += n * n;
//             num = (num - n) / 10;
//         }
//        num = m;
//     }
//     return (num == 1);
// }

// var cnt = 5;
// var num = 1;
// var f5 = '';
// while (cnt-- > 0) {
//     while (!happy_number(num))
//         num++;
//     f5 = f5 + (num + ", ");

//     num++;
// }
// console.log('First 5 happy numbers are : ' + f5);

// 9    //FOR SUM OF ELEMENTS OF ARRAY REDUCE FUNCTION IS RECOMMENDED
// function arm(n) {
//     arr = n.toString().split('');
//     console.log(arr);
//     res = '';
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         cub = []
//         cub.push(Math.pow(element,3));
//         for (let j = 0; j < cub.length; j++) {
//             const element = cub[j];
//             res += Number(element) 
//         }
//     }
//     if (res == n) {
//         console.log('I am strong');
//     }
//     else{
//         console.log('ebkar');
//     }
// }

// arm(357)

// 9
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         for (let k = 0; k < 10; k++) {
//             let pow = (Math.pow(i,3)+Math.pow(j,3)+Math.pow(k,3))
//             let n = i*100 + j*10 + k;
//             if (pow === n) {
//                 console.log(n);
//             }
//         }
//     }
// }

// // 10

// var x,y,chr;
// for(x=1; x <=6; x++)
// // console.log(chr);
// {
//    for (y=1; y < x; y++)
//      {
//     chr=chr+("*");        
//     // console.log(chr);
//       }
//  console.log(chr);
//  chr='';    
// }

// 11
// function gcd(a,b) {
//     if (b == 0) {
//         return a
//     }
//     else{
//         return gcd(b,a%b)
//     }
// }

// console.log(gcd(12,7));
// 11
// var a = 2340;
// var b = 430
// var gcd;
// while (a!=b) {
//     if (a > b) {
//         a = a-b
//     }
//     else{
//         b= b-a
//     }
// }
// gcd = a;
// console.log(gcd);

// // // 12
// sum = 0
// for (let i = 0; i < 1000; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//         sum += i
//     }
// }
// console.log(sum);

// // ARRAY [ 6,7]
// 1  
// //toString.call
// function is_Array(d) {
//     return toString.call(d) == '[object Array]' ? console.log('Array') : console.log('not');
// }

// is_Array([1,2,3]);
// is_Array('jaishEmohd')

// console.log(typeof([1]));

// Array ISARRAY
// console.log(Array.isArray([12,32]));

// 2
// // clone
// function c(arr) {
//     return arr.slice(0)
// }

// console.log(c([1,2,3]));

// // 3
// function e1(arr) {
//     console.log(arr[0]);
// }
// e1([1,,2,42])

// // 4
// function el(a) {
//     console.log(a[a.length - 1]);
// }
// el([,1,23,[]])

// // 5
// function jo(a) {
//     console.log(a.join(' '));
// }
// jo(['JAI','SIYARAM'])

// // 6
// let i = prompt('ENTER THE NUMBER')
// str = i.toString('');
// res = [str[0]]
// for (let i = 1; i < str.length; i++) {
//     const element = str[i];
//     if ((str[i-1]%2 == 0) && (element % 2 == 0)) {
//         res.push('-',element)
//     }
//     else{
//         res.push(element)
//     }
// }

// console.log(res.join(''));

// const num=window.prompt();
// const str = num.toString();
// const result = [];

// for(let x=0; x<str.length; x++)
//   {
//     if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
//      {
//       result.push('-', str[x]);
//      }
//     else
//      {
//       result.push(str[x]);
//      }       
//   }
// console.log(result.join(''));

// 6 - COPIED
// function ms(a) {
//     if (a.length <= 1) {
//         return a
//     }
//     let mid = parseInt(a.length/2),
//     left = ms(a.slice(0,mid)),
//     right = ms(a.slice(mid));
//     let merge = function (l,r) {
//         let sort= []
//         while (l.length && r.length) {
//             if (l[0] < r[0]) {
//                 sort.push(l.shift())
//             }
//             else{
//                 sort.push(r.shift())
//             }
//         }
//         return sort.concat(l.slice().concat(r.slice()))
//     }
//     return merge(left,right)
// }

// a = [-4,4,2,-1,0]
// console.log(ms(a));

// // 7 COPIED
// function mfc(str) {

//     var arr1 = str.split(''); //array
//     var mf = 1; //default maximum frequency
//     var m = 0;  //counter
//     var item;  //to store item with maximum frequency
//     for (var i = 0; i < arr1.length; i++)    //select element (current element)
//     {
//         for (var j = i; j < arr1.length; j++)   //loop through next elements in array to compare calculate frequency of current element
//         {
//             if (arr1[i] == arr1[j])    //see if element occurs again in the array
//                 m++;   //increment counter if it does
//             if (mf < m)   //compare current items frequency with maximum frequency
//             {
//                 mf = m;      //if m>mf store m in mf for upcoming elements
//                 item = arr1[i];   // store the current element.
//             }
//         }
//         m = 0;   // make counter 0 for next element.
//     }
//     return item + ' ' + mf
// }

// console.log(mfc('ssasadfe'));

// 9
// function jsr(s) {
//     arr  = s.split(' ');
//     res = []
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];

//         uc = element.toUpperCase();
//         str = uc[0].toLowerCase().concat(uc.slice(1));
//         res.push(str)
//         //  arr[i][0].toLowerCase()
//         console.log(str);
//     }
//     return res.join(' ')
// }

// console.log(jsr('The Quick Brown Fox'));

// 10
// var input = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10,
//     26, 7]];

// function jsr(a) {
//     for (let i = 0; i < a.length; i++) {
//         const element = a[i];    
//         console.log('row' + i);
//         for (let j = 0; j < element.length; j++) {
//             const e = element[j];
//             console.log(e);
//         }
//     }
// }
// jsr(input   )

// // 11  v- COPIED
// function sumsq(arr) {
//     sum = 0;
//     i = arr.length;
//     while (i--) {
//         sum += Math.pow(arr[i],2)
//     }
//     console.log(sum);
// }

// sumsq([0,12,23,42,34]);

// 12 - copied //SALE 0 * NUM = 0
// function ps(a) {
//     p = 1;
//     s = 0;
//     i = a.length;
//     while (i--) {
//         p *= a[i];
//         s += a[i]
//     }
//     console.log(p + ' ' + s);
// }

// ps([12,323,434])

// 13
// var x = 0;
// var array = [];
// var i = document.getElementById('text1');
// console.log(i.value);
// var a = document.getElementById('button1')
// var d = document.getElementById('button2')

// a.addEventListener('click',()=>{
//     array.push(i.value);
//     console.log(array);
// })
// d.addEventListener('click',()=>{
//     document.write(array)
// })
// {
//  array[x] = document.getElementById("text1").value;
//  alert("Element: " + array[x] + " Added at index " + x);
//  x++;
//  document.getElementById("text1").value = "";
// }

// function display_array()
// {
//    var e = "<hr/>";   

//    for (var y=0; y<array.length; y++)
//    {
//      e += "Element " + y + " = " + array[y] + "<br/>";
//    }
//    document.getElementById("Result").innerHTML = e;
// }

// 14
// // var array = [];
// // let i = '';
// function addItem(i) {
//     // array.push(i)
//     array = i.split(' ');
//     // array.push(i)
//     console.log(array);
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         for (let j = i; j < array.length; j++) {
//             const element = array[j];
//             if (array[i] == array[j]) {
//                 array.splice(i,1)
//                 console.log(array);
//             }
//         }
//     }
//     console.log(array);
// }

// addItem('Hii luvv Hii jisluvv')
// NOTE: object cannot have same property name so storing data element as obj prop

// const obj={};
// function removeDuplicates(num) {
//     let x;
//     const len=num.length;
//     const out=[];

//     for (x=0; x<len; x++) {
//       obj[num[x]]=0;
//       console.log(obj[num]);
//     }
//     for (x in obj) {
//       console.log(obj);
//       out.push(x);
//     }
//     return out;
//   }
//   const Mynum = 'hii cx hii';
// //   console.log(obj.Mynum[0]);
//   result = removeDuplicates(Mynum);
//   console.log(Mynum);
//   console.log(result);

// // 15
// // ordinal number = 1st,2nd  
// THIS PROG IS SPECIFIC TO THIS PROB ONLY 
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th", "st", "nd", "rd"]
// on = '';
// for (let i = 0; i < color.length; i++) {
//     const element = color[i];
//     if (i == 0) {
//         on = 1 + o[1]
//     }
//     else if (i == 1) {
//         on = 2 + o[2]
//     }
//     else if (i == 2) {
//         on = 3 + o[3]
//     }
//     else {
//         on = i + 1 + o[0]
//     }
//     console.log(on + ' choice is ' + element);
// }

// var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

// function Ordinal(n) {
//     var o = ["th", "st", "nd", "rd"],
//         x = n % 100;
//     //  console.log(o[o[39]]);
//     return x + (o[(x - 20) % 10] || o[x] || o[0]);
// }

// for (n = 0; n < color.length; n++) {
//     var ordinal = n + 1;

//     var output = (Ordinal(ordinal) + " choice is " + color[n] + ".");

//     console.log(output);
// // }
// // GLOBAL APPLICABILITY
// function ordinal_suffix_of(i) {
//     var j = i % 10,
//         k = i % 100;
//     if (j == 1 && k != 11) {
//         return i + "st";
//     }
//     if (j == 2 && k != 12) {
//         return i + "nd";
//     }
//     if (j == 3 && k != 13) {
//         return i + "rd";
//     }
//     return i + "th";
// }
// a = ordinal_suffix_of(113)
// console.log(a);
// console.log(113%10);
// console.log(113%100);

// 16
//a year is a leap year if div by 4 but not by 100
// or div by 100 and 400
// function ly(a) {
//     // for (let j = 0; j < a.length; j++) {
//     //     const el = a[j];
//     //     console.log(el);
//     // }
//     a.forEach(el => {
//         if ((el % 4 === 0 && el % 100 !== 0 ) || (el%100 === 0 && el%400 ===0)) {
//             console.log( 'leap year' ); 
//         }
//         else {
//             console.log('no leap year');
//         } 
//     });
// }
// a = [2020, 2021, 2022, 2023, 2024]
// // console.log(a[2]);
// console.log(ly(a));

// 17
// function shuffle(arr) {
//     let temp ;
//     len = arr.length
//     // while (len > 0) {
//     //     let idx = Math.floor(Math.random() * len) ;
//     //     len--;
//     //     temp = arr[len];
//     //     arr[len] = arr[idx];;
//     //     arr[idx] = temp
//     // }
//     for (let i = 0; i < arr.length ; i++) {
//         const element = arr[i];
//         let idx = Math.floor(Math.random() * i) ;
//         // len--
//         console.log(i);
//         console.log(element);
//         temp = arr[i];
//         console.log(temp);
//         arr[i] = arr[idx];;
//         arr[idx] = temp  
//     }

//     return arr
// }

// console.log(shuffle([1,2,23,2,44344,32,2]));

// function shuffle(arra1) {
//     var ctr = arra1.length, temp, index;

// // While there are elements in the array
//     while (ctr > 0) {
// // Pick a random index
//         index = Math.floor(Math.random() * ctr);
// // Decrease ctr by 1
//         ctr--;
// // And swap the last element with it
//         temp = arra1[ctr];
//         arra1[ctr] = arra1[index];
//         arra1[index] = temp;
//     }
//     return arra1;
// }
// var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(shuffle(myArray));

// 18
// function bs(a,n) {
//     mid = parseInt(a.length / 2);
//     if (a[mid]  ==  n) {
//         return mid
//     }
//     else if (a.length <=  1) {
//         return null
//     }
//     else if (n > a[mid]) {
//         let na = a.slice(mid)
//         res = bs(na,n)
//         if (res == null) {
//             return null
//         }
//         else{
//             console.log(mid);
//             console.log(res);
//             return mid+ 1 + res
//         }
//     }
//     else{
//         let nas = a.slice(0,mid);
//         return bs(nas,n)
//     }
// }

// console.log(bs([1,2,3,4,5,6],6));

// 19\
// function Arrays_sum(array1, array2) 
// {
//   var result = [];
//   var ctr = 0;
//   var x=0;

//   if (array1.length === 0) 
//    return "array1 is empty";
//   if (array2.length === 0) 
//    return "array2 is empty";   

//  while (ctr < array1.length && ctr < array2.length) 
//   {
//     result.push(array1[ctr] + array2[ctr]);
//     ctr++;
//   }

//  if (ctr === array1.length) 
//  {
//     for (x = ctr; x < array2.length; x++)   {
//       result.push(array2[x]);
//     }
//   } 
//   else
//   {
//   for (x = ctr; x < array1.length; x++) 
//     {
//       result.push(array1[x]);
//     }
//   }
//   return result;
// }

// console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));

// function s(a,b) {
//     res = [];
//     for (let i = 0; i < a.length; i++) {
//         const element = a[i];
//         res.push(a[i] + b[i])
//     }
//     return res
// }

// console.log(s([1,2,3],[12,34,43])); 

// // 20
// function dup(a) {
//     res = [];
//     obj = {};
//     a.forEach(function (e) {
//         if (!obj[e]) {
//             obj[e] = 0;
//         }
//         obj[e] += 1;
//     });
//     console.log(obj);
//     for (var x in obj) {
//         if (obj[x] >= 2) {
//             res.push(x)
//         }
//     }
//     return res
// }

// console.log(dup([12, 13, 33, 12, 13, 31, 1, 13, 12]));

// function find_duplicate_in_array(arra1) {
//     var object = {};
//     var result = [];

//     arra1.forEach(function (item) {
//         if (!object[item])
//             object[item] = 0;
//         object[item] += 1;
//     })
//     console.log(object);
//     for (var prop in object) {
//         if (object[prop] >= 2) {
//             result.push(prop);
//         }
//     }

//     return result;

// }

// console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

// // 21 -- copied
// var flatten = function (a, shallow, r) {
//     if (!r) { r = [] }

//     if (shallow) {
//         return r.concat.apply(r, a);//
//         // return r.push(a)
//     }

//     for (var i = 0; i < a.length; i++) {
//         if (a[i].constructor == Array) {
//             flatten(a[i], shallow, r);
//         } else {
//             r.push(a[i]);
//         }
//     }
//     return r;
// }

// console.log(flatten([1, [2], [3, [[4]]], [5, 6]]));


//FLATEN ALL ARRAY
// function flatten(arr){
//     let newArray = [];
//     for(let i=0; i< arr.length; i++){
//         if(Array.isArray(arr[i])){
//             newArray =  newArray.concat(flatten(arr[i]))
//         }else{
//             newArray.push(arr[i])
//         }
//     }
//     return newArray; 
// }
// console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true));

// 21
// UNION
// function union(a, b) {
//     r = [];
//     let res = []
//     for (let i = 0; i < a.length; i++) {
//         const element = a[i];
//         r.push(a[i])
//     }
//     for (let j = 0; j < b.length; j++) {
//         const e = b[j];
//         r.push(e)
//     }
//     // r.forEach(element => {
//     //     if (!r.includes(element)) {
//     //         res.push(element)
//     //     }   
//     // });

//     for (const x of r) {
//         if (res.indexOf(x) === -1) {
//             res.push(x)
//         }
//     }
//     return res
// }

// console.log(union([1, 2, 3, 67, 65], [3, 2, 1, 4, 5]));

// function union(arra1, arra2) {

//     if ((arra1 == null) || (arra2==null)) 
//       return void 0;

//     var obj = {};

//     for (var i = arra1.length-1; i >= 0; -- i)
//        obj[arra1[i]] = arra1[i];

//     for (var i = arra2.length-1; i >= 0; -- i)
//        obj[arra2[i]] = arra2[i];

//     var res = [];

//     for (var n in obj)
//     {

//       if (obj.hasOwnProperty(n)) 
//         res.push(obj[n]);
//     }

//     return res;
//   }
//   console.log(union([1, 2, 3], [100, 2, 1, 10]));


// 22
// STACK OVERFLOW 
// function diff(a,b) {
//     a = flatten(a);
//     b = flatten(b);
//     r = []; res = [];
//     for (let i = 0; i < a.length; i++) {
//         const e = a[i];
//         res[e] = true;
//         console.log(res);
//         // res.push(e)//Add elements
//     }
//     for (let j = 0; j < b.length; j++) {
//         const el = b[j];
//         if (res[el]) {
//             delete res[el]
//         }
//         else{
//             res[el] = true
//             // res.push(el)
//         }
//     }
//     for (const x in res) {
//         r.push(x)
//     }
//     return r
// }

// function diff(array1, array2) {
//     var temp = [];
//     array1 = array1.toString().split(',').map(Number);
//     array2 = array2.toString().split(',').map(Number);

//     for (var i in array1) {
//         if (array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
//     }
//     for (i in array2) {
//         if (array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
//     }
//     return temp.sort((a, b) => a - b);
// }

// console.log(diff([1, 2, 3], [100, 2, 1, 10]));
// console.log(diff([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));


// console.log(diff([1,[2],3,34],[12,1,32,2]));
// // res = [];
// // console.log(res);


// function flatten(a) {
//     fa = [];
//     a.forEach(el => {
//         if (Array.isArray(el)) {
//            fa =  fa.concat(flatten(el))
//         }
//         else{
//             fa.push(el)
//         }
//     });
//     return fa
// }

// 23 -- ye sabhi values false hoti h
// function rgv(a) {
//     // a.forEach(el => {
//     //     if (el == NaN || el == null || el == undefined || el == 0 || el == false || el == '"' ){
//     //         a.splice(a.indexOf(el),1)
//     //     }
//     // });
//     r = []
//     a.forEach(el => {
//         if (el) {
//             r.push(el)
//         }
//     });
//     return r
// }

// console.log(rgv([1,0,undefined]));

// // 24
// var library = [
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//     ];

// function compareTitle(a,b) {
//     if (a.title < b.title) {
//         return -1;
//     }
//     if (a.title > b.title) {
//         return 1
//     }
//     else{
//         return 0
//     }
// }

// library.sort(compareTitle)
// console.log(library);

// 26
// function sumIndices(a, t) {
//     idx = 'nofinding'
//     for (let i = 0; i < a.length; i++) {
//         const el = a[i];
//         secn = t - el;
//         if (a.includes(secn)) {
//             idx = i + ',' + a.indexOf(secn)
//             console.log(el, secn);
//             break;
//             // return idx
//         }
//     }
//     return idx
// }

// console.log(sumIndices([10, 20, 30, 50, 60], 60));

// 27
// function filterNonValues(a) {
//     res = []
//     for (let i = 0; i < a.length; i++) {
//         const e = a[i];
//         if (e) {
//             res.push(e)
//         }
//     }
//     return res
// }

// console.log(filterNonValues( [NaN, 0, 15, false, -22, '',undefined, 47, null]));

// // 28
// function sub(s1,s2) {
//     sa1 = s1.split('');
//     sa2 = s2.split('');
//     res = []
//     for (let i = 0; i < sa1.length; i++) {
//         const e = sa1[i];
//         if (sa2.includes(e)) {
//            res.push(e) 
//         }
//     }
//     return res.join('')
// }
// console.log(sub('substr','substring'));

// 29
// // NUM STRING RANGE 
// function num_string_range(start, end, step) {
//     const range = [];
//     if ((step === 0) || (typeof start == "undefined" || typeof end == "undefined") || (typeof start != typeof end))
//         return false;

//     if (end < start) {
//         step = -step;
//     }

//     if (typeof start == "number") {

//         while (step > 0 ? end >= start : end <= start) {
//             range.push(start);
//             start += step;
//         }
//     }
//     else if (typeof start == "string") {

//         if (start.length != 1 || end.length != 1) {
//             throw TypeError("Strings with one character are supported.");
//         }

//         start = start.charCodeAt(0);
//         end = end.charCodeAt(0);

//         while (step > 0 ? end >= start : end <= start) {
//             range.push(String.fromCharCode(start));
//             start += step;
//         }

//     }

//     else {
//         throw TypeError("Only string and number are supported");
//     }

//     return range;

// }

// console.log(num_string_range('a', "z", 2));
// console.log(num_string_range("Z", "A", 2));
// console.log(num_string_range(0, -5, 1));
// console.log(num_string_range(0, 25, 5));
// console.log(num_string_range(20, 5, 5));

// function nsr(start, end, step) {
//     res = [];
//     if ((step === 0) || (typeof start == undefined) || (typeof end == undefined) || (typeof start != typeof end)) {
//         return false
//     }
//     if (start > end) {
//         step = -step
//     }
//     if (typeof start ===  'Numeber') {
//         while (step > 0 ? end >= start : start >= end) {
//             res.push(start)
//             start += step;
//         }
//     }
//     else if (typeof end === 'string') {
//         if (start.length != 1 || end.length !=1) {
//             throw TypeError('CHECK DATA YOU ENTERED');
//         }
//         start = start.charCodeAt(0);
//         end = end.charCodeAt(0);

//         while (step > 0 ? end >= start : end <= start) {
//             res.push(String.fromCharCode(start));
//             start += step;
//         }
//     }
//     else{
//         throw TypeError('Only Number And String are supported')
//     }
//     return res
// }

// console.log(nsr('a','z',2)); 
// console.log(nsr('z','a',2));

// 30
// function rd(a,b) {
//     res = [];
//     result = []
//     for (let i = 0; i < a.length; i++) {
//         const e = a[i];
//         res[e] = true
//     }
//     for (let j = 0; j < b.length; j++) {
//         const el = b[j];
//         if (res[el]) {
//             delete res[el]
//         }
//         else{
//             res[el] = true
//         }
//     }
//     for (const c in res) {
//         result.push(c)
//     }
//     return result
// }


// function diff(a,b) {
//         // a = flatten(a);
//         // b = flatten(b);
//         r = []; res = [];
//         for (let i = 0; i < a.length; i++) {
//             const e = a[i];
//             res[e] = true;
//             console.log(res);
//             // res.push(e)//Add elements
//         }
//         for (let j = 0; j < b.length; j++) {
//             const el = b[j];
//             if (res[el]) {
//                 delete res[el]
//             }
//             else{
//                 res[el] = true
//                 // res.push(el)
//             }
//         }
//         for (const x in res) {
//             r.push(x)
//         }
//         return r
//     }

// function rd(a, b) {
//     temp = []
//     a = a.toString().split(',').map(Number)
//     b = b.toString().split(',').map(Number)
//     for (var i in a) {
//         if (b.indexOf(a[i]) === -1) temp.push(a[i]);
//     }
//     for (i in b) {
//         if (a.indexOf(b[i]) === -1) temp.push(b[i]);
//     }
//     return temp.sort((a, b) => {
//         a - b
//     })
// }
// console.log(rd([1, 2, 3], [2, 3, 4]));

// // function diff(array1, array2) {
// //     var temp = [];
// //     array1 = array1.toString().split(',').map(Number);
// //     array2 = array2.toString().split(',').map(Number);

// //     for (var i in array1) {
// //         if (array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
// //     }
// //     for (i in array2) {
// //         if (array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
// //     }
// //     return temp.sort((a, b) => a - b);
// // }
// console.log(rd([1, 2, 3], [2, 3, 4, 5]));

// 31
// function rt(a,t) {
//     for (let i = 0; i < a.length; i++) {
//         const element = a[i];
//         if (element === t) {
//             a.splice(i,1)
//             na = a
//         }
//     }
//     return na
// }

// console.log(rt([1,2,34,4],34));

// 32
// function ec(a, e) {//     return (a.includes(e))
// }

// console.log(ec([1,2,4],3));

// // 33
// let s = [1,2,23,34,344]
// console.log(s);
// s.length = 0;
// console.log(s);

// 34
// function nthLargest(a, n) {
//     a = a.sort(descendingOrder)
//     console.log(a.length);
//     console.log(a);
//     if (a[n] === undefined) {
//         return 'plz check'
//     }
//     else {
//         return a[n-1]
//     }
// }

// console.log(nthLargest([100, 500, 122, 3443, 5354, 2, 32],4));

// function descendingOrder(a, b) {
//     return a > b ? -1 : b > a ? 1 : 0;
//   }

// // 35
// function randomItemFromArray(a) {
//     ri = Math.floor(Math.random() * a.length)
//     console.log(a);
//     console.log(a[ri]);
// }

// randomItemFromArray([1, 23, 231, 334, 24, 34, 32323, 224])

// 36
// function fillingArray(n,e) {
//     let arr = [];
//     arr.length = n;
//     for (let i = 0; i < arr.length; i++) {
//         let element = arr[i];
//         arr.splice(i,1,e)
//     }
//     // for (let i = 0; i <  n; i++) {
//     //     arr.push(e)
//     // }
//     console.log(arr);
// }

// fillingArray(4,11)

// // 37
// function fillingArray(n,e) {
//     let arr = [];
//     arr.length = n;
//     // for (let i = 0; i < arr.length; i++) {
//     //     let element = arr[i];
//     //     arr.splice(i,1,e)
//     // }
//     for (let i = 0; i <  n; i++) {
//         arr.push(e)
//     }
//     console.log(arr);
// }

// fillingArray(4,'str')

// // 38 -- >IMP BUT COPIED
// function move(arr, old_index, new_index) {
//     while (old_index < 0) {
//         old_index += arr.length;
//     }
//     while (new_index < 0) {
//         new_index += arr.length;
//     }
//     if (new_index >= arr.length) {
//         var k = new_index - arr.length;
//         while ((k--) + 1) {
//             arr.push(undefined);
//         }
//     }
//      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
//    return arr;
// }

// console.log(move([10, 20, 30, 40, 50], 0, 2));

// console.log(move([10, 20, 30, 40, 50], -1, 9));

// function em(a,p,i) {
//     while (p < 0) {
//         p += a.length; 
//         console.log(p + 'p');
//     }
//     while (i < 0) {
//         i += a.length
//         console.log(i + 'i');
//     }
//     if (i >= a.length) {
//         k = i - a.length
//         console.log(k+ 'k out from while');
//         while ((k--) + 1) {
//             console.log(k+ 'k');
//             a.push(undefined)
//         }
//     }
//     a.splice(i,0,a.splice(p,1)[0]);//[0] is index of moved element returned by splice in Array form
//     return a
// }
// console.log(em([10, 20, 30, 40, 50], 0, 2));

// console.log(em([10, 20, 30, 40, 50], -1, 9));

// 40
// function range(start, steps) {
//     a = [];
//     i = 0
//     while (i++ < steps) {
//         a.push(start)
//         start = start + 1;
//     }
//     console.log(a);
// }

// range(-4, 4)

// // 41
// function r(s,e) {
//     a = [];
//     while (s <= e) {
//         a.push(s);
//         s = s+1
//     }
//     console.log(a);
// }
// r(-4,8)
// 42
// diff
// // N(key) IN FOR IN LOOP IS INDEX
// function diff(a1,a2) {
//     temp = []
//     a1 = a1.toString().split(',').map(Number)
//     a2 = a2.toString().split(',').map(Number)
//     for (const n in a1) {
//         console.log(n);
//      temp.push(a1[n])
//     }
//     for (const n in a2) {
//         if(a1.indexOf(a2[n]) === -1) temp.push(a2[n])
//     }
//     console.log(temp);
// }

// diff([1, 2, 3], [100, 2, 1, 10])

// DATE [1,3,6,10,12,20,24,29,38,39,44]
// 1
// function isDate(d) {
//     // date = new Date(d)
//     if (Object.prototype.toString.call(d) === '[object Date]') {
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(isDate([1, 2, 4, 0]));

// console.log(Date([1, 2, 4, 0]));

// // 2
// d = new Date;
// date = d.getDate();
// m = d.getMonth() +  1;
// y = d.getFullYear();
// console.log(date + '-' + m + '-' + y) ;

// 3 == 0 is last day in prev month
// var getDaysInMonth = function(month,year) {
// Here January is 1 based
//Day 0 is the last day in the previous month
//    return new Date(year, month, 0).getDate();
// Here January is 0 based
//   return new Date(year, month+1, 0).getDate();
//   };
//   console.log(getDaysInMonth(1, 2012));// 1 means feb and 0 is last day of prev month 
// so displays days of jan
//   console.log(getDaysInMonth(2, 2012));
//   console.log(getDaysInMonth(9, 2012));
//   console.log(getDaysInMonth(12, 2012));

// 4
// function mn(i) {
//   d = new  Date(i);
//   mon = ['Jan','Feb','March','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
//   console.log(mon[d.getMonth()]);   
// }

// mn('10/11/2009');

// 5
// function cd(d1,d2) {
//     dt1 = new Date(d1);
//     dt2 = new Date(d2);
//     if (dt1 > dt2) {
//         return 'Date1 > Date2'
//     }
//     if (dt1 < dt2) {
//         return 'Date1 < Date2'
//     }
//     else{
//         return 'Date1 = Date2'
//     }
// }
// console.log(cd('11/14/2013 00:00','12/14/2013 00:00' ));

// 6
// function sm(d,m) {
//     dt = new Date(d);
//      dt.setMinutes(m)
//     console.log(dt);
// }

// sm(('2014,10,2'), 30)

// 7
// function we(d) {
//     dt = new Date(d);
//     day = dt.getDay();
//     if (day == 6 || day == 0) {
//         console.log('weekend');
//     }
//     else{
//         console.log('weekday');
//     }
// }

// we('Nov 15, 2014')

// 8
// function diff(dt1,dt2) {
//     d1 = new Date(dt1)
//     d2 = new Date(dt2)
//     d = d2 - d1;
//     console.log(d/(60000*60*24));
// }

// diff('04/02/2014', '11/04/2014')

// // 9
// function lastDayOfMonth(y ,m) {
//     d = new Date(y,m,0);
//     console.log(d.getDate());
// }
// lastDayOfMonth('2014','1')

// // 10
// var yesterday =  function(date1){
//     var dt = new Date(date1);
//   return new Date((dt.setDate(dt.getDate()-1))).toString();
// }
// console.log(yesterday('Nov 15, 2014'));
// console.log(yesterday('Nov 16, 2015'));
// console.log(yesterday('Nov 17, 2016'));

// 11 - NOT A RIGHT APPROACH DO IT LIKE 12
// let max  = function (a) {
//     res = []
//     // res = a[0]
//     for (let i = 0; i < a.length; i++) {
//         const e = a[i];
//         d = new Date(e)
//         dt  = d.getDate();
//         m = d.getMonth() + 1;
//         y = d.getFullYear()
//         d2 = new Date(a[i + 1])
//         if (d > d2) {

//             res.splice(0,1,dt,'-',m,'-',y)
//         }
//     }
//     return res.join('')
// }
// console.log(max(['2015/02/01', '2015/02/02', '2015/01/03']));

// 12
// function min_date(all_dates) {
//     var min_dt = all_dates[0],
//      min_dtObj = new Date(all_dates[0]);
//     all_dates.forEach(function(dt, index)
//      {
//      if ( new Date( dt ) < min_dtObj)
//      {
//      min_dt = dt;
//      min_dtObj = new Date(dt);
//      }
//      });
//     return min_dt;
//      }
//    console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));

// // 13
// function mth(m) {
//     console.log(Math.round(m / 60) + ' hours ' + m % 60 + ' minutes');
// }

// mth(200)

// 14
// function ly(y) {
//     if ((y % 4 == 0 && y % 100 !== 0) || (y % 100 == 0 && y % 400 == 0)) {
//         console.log('366 days');
//     }
//     else{
//         console.log('365 days');
//     }
// }

// ly(2021)

// 15
// function q(i) {
//     // console.log(i);
//     d = new Date(i)
//     // console.log(d);
//     mon = d.getMonth();
//     console.log(mon);
//     if (mon <= 2) {
//         console.log(1);
//     }
//     else if (mon <= 5) {
//         console.log(2);
//     }
//     else if(mon <= 8) {
//         console.log(3);
//     }
//     else{
//         console.log(4);
//     }
// }
// q('2015,10,18')

// // 16
// function dp(i) {
//     d1 =  new Date(i);
//     d = new Date(d1.getFullYear(),0,1)
//     console.log(d);
//     console.log(d1);
//     console.log((d1 - d)/(60000*60*24) + 'days passed');
// }

// dp('2015,2,21')

// 17  -- UNIX TIMESTAMP IS IN SEC SO MUTIPLY 1000
// function Unix_timestamp(t)
// {
// var dt = new Date(t*1000);
// var hr = dt.getHours();
// var m = "0" + dt.getMinutes();
// var s = "0" + dt.getSeconds();
// return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
// }

// console.log(Unix_timestamp(1412743274));

// // 18
// function ageCalc(i) {
//     d = new Date(i);
//     by= d.getFullYear()
//     cd = new Date;
//     cy = cd.getFullYear();
//     console.log((cy - by) + ' years old');
// }
// ageCalc('1982, 11, 4')

// // 19
// function zero_suffix_date(i) {
//     d = new Date(i);
//     date = d.getDate();
//     if (date <= 10) {
//         date = '0' + date
//     }
//     return date
// }

// console.log(zero_suffix_date('2015, 10, 1'));

// // 20 -- day name method
// function display_day_name(d,locale) {
//     dt = new  Date(d);
//     day = dt.toLocaleDateString(locale,{weekday: 'long'});
//     console.log(day);
// }

// display_day_name('2015, 10, 1','hi-IN')
// function ISO_numeric_date(dt)
// {
//   return (dt.getDay() === 0 ? 7 : dt.getDay()); 
// }

// dt = new Date();
// console.log(ISO_numeric_date(dt));

// dt = new Date(2015, 10, 1);
// console.log(ISO_numeric_date(dt));

// 23
// d = new Date('2015, 10, 1');
// i = d.getDate()

// function ord(i) {
//     j = i%10;
//     k = i%100;
//     if (j === 1 && k!=11) {
//         return i +'st'
//     }
//     if (j === 2 && k!=12) {
//         return i +'nd'
//     }
//     if (j === 3 && k!=13) {
//         return i +'rd'
//     }
//     else{
//         return i +'th'
//     }
// }
// console.log(ord(i));

// // 24 SAMAJ NHI AYA
// //  copied
// function ISO8601_week_no(dt) {
//     var tdt = new Date(dt);
//     console.log(tdt);
//     var dayn = (dt.getDay() + 6) % 7;
//     console.log(dayn);
//     tdt.setDate(tdt.getDate() - dayn + 3);
//     console.log(tdt);
//     var firstThursday = tdt.valueOf();
//     console.log(firstThursday);
//     tdt.setMonth(0, 1);
//     if (tdt.getDay() !== 4) {
//         tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
//     }
//     return 1 + Math.ceil((firstThursday - tdt) / 604800000);
// }

// dt = new Date();
// console.log(ISO8601_week_no(dt));

// dt = new Date(2015, 10, 1);
// console.log(ISO8601_week_no(dt));

// function weekno(dt) {
//     d = new Date(dt);
//     dayN = (d.getDay() + 6) % 7;//
//     d.setDate(d.getDate() - dayN + 3)
//     var firstThursday = d.valueOf();
//     d.setMonth(0,1);
//     if (d.getDay() !== 4) {
//         d.setMonth(0, 1 + ((4 - d.getDay()) + 7) % 7);
//     }
//     return 1 + Math.ceil((firstThursday - d) / 604800000);
// }
// dt = new Date(2015, 10, 1)
// console.log(weekno(dt));

// 25
// function mn (d,l) {
//     d  =  new Date(d);
//     m = d.toLocaleString(l,{month:"long"})
//     console.log(m);
// }

// mn(('2015, 10, 1'),'hi-IN');

// 26
// function mn(d) {
//     dt = new Date(d);
//     m = dt.getMonth()+1;
//     if (m < 10) {
//         m = '0' + m
//     }
//     console.log(m);
// }
// mn('2015, 10, 1')

// 27
// function mn(d) {
//     dt = new Date(d);
//     m = dt.toLocaleString('en-IN',{month:'short'})
//     console.log(m);
// }

//     console.log();
// mn('2015, 10, 1')

// // 29
// function y2(i) {
//     d = new Date(i);
//     return ('' + d.getFullYear()).substr(2);
// }
// console.log(y2('2015, 10, 1'));

// 30
// dt = new Date;
// m = dt.getHours() > 12 ? 'pm' : 'am';
// console.log(m);

// // 31
// let d = new Date;
// res = Math.floor((((d.getUTCHours() + 1) % 24) + d.getUTCMinutes() / 60 + d.getUTCSeconds() / 3600) * 1000 / 24)
// console.log(res);

// 32

// d = new Date;
// h = d.getHours();
// if (h < 12) {
//     h = '0' + h + 'am'
// }
// else if (h > 12) {
//     h = h - 12;
//     h = h + 'pm'
// }
// else if (h == 12) {
//     h = 0
// }
// console.log(h);

// 33
// d = new Date;
// h = d.getHours()
// console.log(h);

// // 36
// d = new Date;
// m = d.getMinutes();
// if (m < 10) {
//     m = '0' + m
// }
// console.log(m);

// 37
// function seconds_with_leading_zeros(dt) 
// { 
//   return /\((.*)\)/.exec(new Date().toString())[1]; // MATCHES ANY CHARACTER IN () 
// }

// dt = new Date(); 
// console.log(seconds_with_leading_zeros(dt)); 

// dt = new Date(1989, 10, 1); 
// console.log(seconds_with_leading_zeros(dt));

// 38
// // function daylights_savings(dt) {
// //     var dst = null;
// //     for (var i = 0; i < 12; ++i) {
// //         var d = new Date(dt.getFullYear(), i, 1);//har mahine ki 1  tarikh
// //         var offset = dt.getTimezoneOffset();

// //         if (dst === null)
// //             dst = offset;
// //         else if (offset < dst) {
// //             dst = offset;
// //             break;
// //         }
// //         else if (offset > dst)
// //             break;
// //     }
// //     return (dt.getTimezoneOffset() == dst) | 0;
// // }

// dt = new Date();
// console.log(daylights_savings(dt));

// dt = new Date(1989, 10, 1);
// console.log(daylights_savings(dt));

// 39
// function gmtd() {
//     d = new Date
//     return (-d.getTimezoneOffset()<0? '-' : '+')  + (Math.abs(d.getTimezoneOffset()/60)<10?'0':'')
//     + (Math.abs(d.getTimezoneOffset()/60) + '00')
// }
// console.log(gmtd());

// 40
// function ois() {
//     dt = new Date
//     o =  dt.getTimezoneOffset()
//     console.log(-(o*60));
// }

// ois()

// // 41
// function nw(d,add) {
//     dt = new Date(d);
//     // // console.log(dt);
//     // y = dt.getFullYear();
//     // // console.log(y);
//     // newY = '' +(y + add)
//     // // console.log(newY);

//     // newDate = new Date(newY)
//     // console.log(newDate);
//     console.log(new Date(dt.setFullYear(dt.getFullYear() + add)));
// }

// nw('2014,10,2',10)

// // 42
// function addWeek(d,n) {
//     dt = new Date(d)
//     return new Date(dt.setDate(dt.getDate() + (n*7)))
// }
// console.log(addWeek('2014,10,2',2));

// 43
// function am(d,n) {

//     d = '\'' +  d + '\''
//     dt = new Date(2014,10,2);
//     console.log(new Date(dt.setMonth(dt.getMonth() + n)));
// }
// am(('2014,10,2'),(10))

// // 44
// function dim(d1,d2) {
//     dt1 = new Date(d1);
//     dt2 = new Date(d2);
//     console.log((dt2 - dt1)/(1000*60));
// }

// dim('October 13, 2014 11:11:00','October 13, 2014 11:13:00')

// 45
// function dih(d1, d2) {
//     dt1 = new Date(d1);
//     dt2 = new Date(d2);
//     console.log(Math.round((dt2 - dt1) / (1000 * 60*60)));
// }

// dih('October 13, 2014 08:11:00','October 13, 2014 11:13:00')

// 46
// function did(d1, d2) {
//     dt1 = new Date(d1);
//     dt2 = new Date(d2);
//     console.log(Math.round((dt2 - dt1) / (1000 * 60 * 60 * 24)));
// }
// did('October 13, 2014 08:11:00','October 18, 2014 08:11:00')

// 47  -- weeks mein 4 se multiply  nhi hoga
// 48
// 49
// function did(d1, d2) {
//     dt1 = new Date(d1);
//     dt2 = new Date(d2);
//     console.log(Math.abs(Math.round((dt2 - dt1) / (1000 * 60 * 60 * 24 * 7 * 52))));
// }
// did('June 13, 2014 08:11:00', 'October 19, 2015 08:11:00')

// 50
// function startOfWeek(date) {
//     var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);

//     return new Date(date.setDate(diff));

// }

// dt = new Date();

// console.log(startOfWeek(dt).toString());


// function startOfWeek(date) {
//     var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);//-6 means prev sunday 
//     console.log(date.getDate());
//     console.log(date.getDay());

//     console.log(diff);
//     return new Date(date.setDate(diff));

// }

// dt = new Date();

// console.log(startOfWeek(dt));


//STACK OVERFLOW
// // return an array of date objects for start (monday)
// // and end (sunday) of week based on supplied 
// // date object or current date
// function startAndEndOfWeek(date) {

//     // If no date object supplied, use current date
//     // Copy date so don't modify supplied date
//     var now = date ? new Date(date) : new Date();

//     // set time to some convenient value
//     now.setHours(0, 0, 0, 0);
//     // Get the previous Monday
//     var monday = new Date(now);
//     monday.setDate(monday.getDate() - monday.getDay() + 1); //for sunday base remove + 1

//     // Get next Sunday
//     var sunday = new Date(now);
//     sunday.setDate(sunday.getDate() - sunday.getDay() + 7);//for sunday base replace 7 with 6

//     // Return array of date objects
//     return [monday, sunday];
// }

// // Mon Nov 12 2012 00:00:00
// // Sun Nov 18 2012 00:00:00
// console.log(startAndEndOfWeek());

// 51&52
// function weekSandE(i) {
//     d = i ? new Date(i) : new Date()
//     d.setHours(0,0,0.0);
//     monday = new Date(d);
//     monday.setDate(monday.getDate() - monday.getDay() + 1)
//     sunday = new Date(d);
//     sunday.setDate(sunday.getDate() - sunday.getDay()  + 7)
//     console.log('Starting Date = ' + monday);
//     console.log('Ending Date = ' + sunday);
// }

// weekSandE()

// STRING
// 6    
// function em(e) {
//     let split= e.split('@');
//     let split1  = split[0];
//     // console.log(split1[1]);
//     let avg = split1.length / 2;
//     split1 = split1.substring(0,(split1.length - avg))
//     let split2 = split[1]
//     console.log(split1 + '...@' + split2);
// }
// // em("luvvaggarwal@gmail.com")

// 7
// function par(s) {
//     return s.toLowerCase().replace(/\s/g,'-')
// }
// console.log(par('Robin Singh From USA'));

// 9
// function el(s) {
//     return s.replace(/\w\S*/g,function (txt) {
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
//     })
// }
// console.log(el('the quick brown fox'));

// 10
// function ul(s) {
//     return s.replace(/([a-z]+)|([A-Z]+)/g, function (match, ch) {//REGEX MEIN SPACE SE ANTAR  PADH RHA H
//         return ch ? match.toUpperCase() : match.toLowerCase()
//     })
// }

// console.log(ul("PyThon"));

// // 11
// function cc(s) {
//     return s.replace(/\W+(.)/g,function (m,c) {
//         return c.toUpperCase()
//     })
// }
// console.log(cc('JavaScript Exercise'));

// 12
// function uncaml(st,separator) {
//     if (separator == undefined) {
//        separator = ' '; 
//     }
//     var str = st.replace(/[A-Z]/g,function (letter) {
//         return separator + letter.toLowerCase()
//     }) 
//     console.log(str.replace(`/^${separator}/`,''))
// }

// uncaml("helloWorld")

// 13
// function re(s,n) {
//     return s.repeat(n)
// }

// console.log(re('Ha',3));    

// // 14
// function insert(s,w,i) {
//     if (typeof i === undefined) {
//         i = 0
//     }
//     if (typeof w == undefined) {
//         w = ''
//     }
//     return s.slice(0,i) + w + s.slice(i)
// }

// console.log(insert('we are doing some exercise','JavaScript',2));

// 15
// text_truncate = function(str, length, ending) {
//     if (length == null) {
//       length = 100;
//     }
//     if (ending == null) {
//       ending = '...';
//     }
//     if (str.length > length) {
//       return str.substring(0, length - ending.length) + ending;
//     } else {
//       return str;
//     }
//   };
// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.',19))
// console.log(text_truncate('We are doing JS string exercises.',15,'!!'))

// 16
// string_chop =  function(str, size){
//     if (str == null) return [];
//     // str = String(str);
//     // size = ~~size;
// return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
// }
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));

// 17
// function c(s,w) {
//     arr  = s.split(' ');
//     console.log(arr);
//     cnt = 0
//     arr.forEach(e => {
//         if (e == w) {
//             cnt
//         }
//     });
//     return cnt
// }

// 17
// function count(main_str, sub_str) 
//     {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) 
//     {
//         return main_str.length + 1;
//     }

//        subStr = sub_str.replace(/[.*+?^${}()|[\]\\[]/g, '\\$&');// $& means the whole matched string
//        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
//     }

// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));

// console.log(count('the quick brown fox','the'));

// // 17
// function cnt(ms,ss) {
//     sstr = ss.replace(/[.*+?^${}()|[\]\\[]]/g,'\\$&');
//     return (ms.match(new RegExp(sstr,'gi')) || []).length;
// }
// console.log(cnt('the quick brown fox jumps over the lazy dogg','the'));

// 18  
// function escape_HTML(html_str) {
//     'use strict';

//     return html_str.replace(/[&<>"]/g, function (tag) {
// 		var chars_to_replace = {
//             '&': '&',
//             '<': '<',
//             '>': '>',
//             '"': '"'
//         };

// 		return chars_to_replace[tag] || tag;
// 	});
// }

// console.log(escape_HTML('&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;'));

// 20
// function formatted_string(pad, user_str, pad_pos)
// {
//   if (pad_pos == 'l') {
//       return (pad + user_str).slice(-pad.length)
//   }
//   else{
//       return (user_str + pad).substring(0,pad.length)
//   }
// }
// console.log(formatted_string('0000',123,'l'));
// console.log(formatted_string('00000000',123,''));

// 22
// function jsr(s,p,b) {
//     if (b == 'a') {
//         return s.substring(0,s.indexOf(p))
//     }
//     else{
//         return s.substring(s.indexOf(p))
//     }
// }

// console.log(jsr('w3resource: JavaScript Exercise', ':' , 'a'));

// 23
// function t(s) {
//     console.log(s.trim());
// }

// t(' w3resource ')

// // 24
// function re(s,l){
//     return s.split(' ').splice(0,l).join(' ')
// }
// console.log(re('the quick brown fox jump over river',4));

// // 25
// function so(s) {
//     return s.replace(/\s/,'').split('').sort().join('')
// }
// console.log(so('United States'));

// 26
// function str(s,w) {
//     arr = s.split(' ');
//     console.log(arr);
//     if (arr.indexOf(w) != -1) {
//         arr.splice(arr.indexOf(w),1)
//         console.log('s');
//     }
//     return arr.join(' ')
// }

// console.log(str('The quick brown fox jump over the river','the'));

// function remove_first_occurrence(str, searchstr)       {
// 	var index = str.indexOf(searchstr);
// 	if (index === -1) {
// 		return str;
// 	}
// 	return str.slice(0, index) + str.slice(index + searchstr.length);
// }

// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));

// 27
// function ascii_to_hexa(str)
//   {
// 	var arr1 = [];
// 	for (var n = 0, l = str.length; n < l; n ++) 
//      {
// 		var hex = Number(str.charCodeAt(n)).toString(16);
// 		arr1.push(hex);
// 	 }
// 	return arr1.join('');
//    }

// console.log(ascii_to_hexa('12'));
// console.log(ascii_to_hexa('100'));

// function hex(s) {
//     arr =[];
//     for (let i = 0; i < s.length; i++) {
//         const e = s.charCodeAt(i);
//         var hex = Number(e).toString(16)
//         arr.push(hex)
//     }
//     return arr.join('')
// }

// console.log(hex('12'));
// // 28
// function hex_to_ascii(str1)
//  {
// 	var hex  = str1.toString();
// 	var str = '';
// 	for (var n = 0; n < hex.length; n += 2) {
// 		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
// 	}
// 	return str;
//  }
// console.log(hex_to_ascii('3132'));
// console.log(hex_to_ascii('313030'));

// function ascii(s) {
//     hex = s.toString();
//     str = '';
//     for (let i = 0; i < hex.length; i+= 2) {
//         const element = hex[i];
//         str +=String.fromCharCode(parseInt(hex.substr(i,2),16))
//     }
//     return str
// }

// console.log(ascii('3131'));

// 30
// function endsWith(s,e) {
//     re = new RegExp(e)
//     return s.endsWith(e)
// }
// console.log(endsWith('JAVA PHP PYTHON','PYTHON'));

// 31
// function ecHTML(s) {
//     var map = {
//         '&': '&amp;',
//         '<': '&lt;',
//         '>': '&gt;',
//         '"': '&quot;',
//         "'": '&#039;'
//     }
//     return s.replace(/[&<>'"]/g,function(m) {
//         return map[m] 
//     })
// }

// console.log(ecHTML('PHP & MySQL'));
// console.log(ecHTML('3 > 2'));

// 32
// function removeNonPrintable(s) {
//     return  s.replace(/[^\x20-\x7E]/g, '');//says something like: all characters that are not (^) in the range \x20-\x7E (hex 0x20 to 0x7E).
// }
// console.log(removeNonPrintable('äÄçÇéÉêPHP-MySQLöÖÐþúÚ'));

// 33
// function nonW(s) {
//     return s.replace(/[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g,'')
// }

// console.log(nonW('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><., MySQL'));

// 34
// function cc(s) {
//     return s.replace(/\w\S*/g,function (txt) {
//         return txt[0].toUpperCase() + txt.substring(1)
//     })
// }

// console.log(cc('the james bond'));

// 35
// function e(s) {
//     return s.replace(/(<([^>]+)>)/gi,'')//^> not greater than
// }

// console.log(e('<html>hello</html>'));

// 36
// function jsr(s,n,sg) {
//     z = ''
//     for (let i = 0; i < n; i++) {
//         z+= '0'        
//     }
//     if (sg == '+') {
//         return z.substr(0,n-s.length) + s
//     }
//     else{
//         return s + z.substr(s.length) 
//     }
// }
// console.log(jsr('120',4,'+'));

// 37 & 38 aate h

// REGEXP 
// 1
// function up(s) {
//    reg = /^[A-Z]/;
//    if (reg.exec(s)) {
//        console.log(true);
//    } 
//    else{
//        console.log(false);
//    }
// }

// up('Jai siyaram')   

// 2
// function is_creditCard(str)
// {// ?: means not capture                                                                    /*4 or 7*/                                        
//  regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

//         if (regexp.test(str))
//           {
//             return true;
//           }
//         else
//           {
//             return false;
//           }
// }

// console.log(is_creditCard("378282246310006"));

// console.log(is_creditCard("37828224630006"));

// 3
// function email(s) {
//     regex = /^([a-zA-Z0-9]+([\.=-]?))@([a-z]+)\.[a-z]{3,4}/
//     if (regex.test(s)) {
//         console.log(true);
//     }
//     else{
//         console.log(false); 
//     }
// }

// email('luvvaggarwal@gmail.com')
// function valid_email(str)
// {
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
// if(mailformat.test(str))
// {  
// console.log("Valid email address!");  
// }  
// else  
// {  
// console.log("You have entered an invalid email address!");  
// }
// }

// valid_email('me-info@example.com');

// 4
// function is_dateString(str)
// {// format mm-dd-yyyy
//  regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;

//         if (regexp.test(str))
//           {
//             return true;
//           }
//         else
//           {
//             return false;
//           }
// }

// console.log(is_dateString("01/01/2015"));

// console.log(is_dateString("01/22/2015"));

// console.log(is_dateString("32/01/2015"));

// 5
// function jsr(s) {
//     return s.replace(/^\s+|\s+$/g,'')
// }
// console.log(jsr(' jai siyaram '));

// 6
// function wc(s) {
//     s = s.replace(/^\s+|\s+$/,'');
//     s = s.replace(/[ ]{2,}/gi,' ');
//     s = s.replace(/\n/,'\n')
//     str = s.split(' ')
//     console.log('string: ' + s + ' words: ' + str.length);
// }

// wc('the old   man drinks      too    much')

// 7
// function is_IP(str)
// {
//  regexp =  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
// //  regexp = /^([0-9]{3}\.)([0-9]{3}|[0-9]{2}\.)([0-9]{2}|[0-9]\.)([0-9])/
//  if (regex.test(str))
//           {
//             return true;
//           }
//         else
//           {
//             return false;
//           }
// }

// console.log(is_IP('198.156.23.5'));

// console.log(is_IP("172.16.0.1"));

// // 8
// function vovel(s) {
//     regex = /[aeiou]/gi;
//     return s.match(regex).length
// }

// console.log(vovel('luvv is great'));

// 9
// function url(s) {
//     reg = /^(https\/\/)?(w{3})\.(\w+)\.[a-z]+/
//     if (reg.test(s)) {
//         console.log('valid');
//     }
//     else{
//         console.log('not valid');
//     }
// }
// url('https//.luv.com') 
// url('www.luv.com') 
// function is_url(str)
// {
//   regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
//         if (regexp.test(str))
//         {
//           return true;
//         }
//         else
//         {
//           return false;
//         }
// }

// console.log(is_url("http://www.example.com"));
// console.log(is_url("https://www.example.com"));

// console.log(url("www.example.com")); 
// console.log(is_url("www.example.com")); 

// // 10
// function alphaNumric(s) {
//     if (/^[a-z0-9]/gi.test(s)) {
//         console.log('its a match');
//     }
//     else{
//         console.log('better luck next time');
//     }
// }

// alphaNumric('1223happy')

// 11
// function jsr(s){
//     reg = /^(2[0-3]|[0-1][0-9]){1,2}:([0-5]?[0-9]):([0-5]?[0-9])$/
//     if (reg.test(s)) {
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }

// jsr('12:44:45');
// jsr('24:44:45');

// // 12
// function is_ukPostCode(str)
// {
//  regexp = /^[A-Z]{1,2}[0-9RCHNQ][0-9A-Z]?\s?[0-9][ABD-HJLNP-UW-Z]{2}$|^[A-Z]{2}-?[0-9]{4}$/;

//         if (regexp.test(str))
//           {
//             return true;
//           }
//         else
//           {
//             return false;
//           }
// }

// console.log(is_ukPostCode("B294HJ"));

// console.log(is_ukPostCode("7892"));

// // 14
// function is_socialSecurity_Number(str)
// {
//  regexp = /^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/;

//         if (regexp.test(str))
//           {
//             return true;
//           }
//         else
//           {
//             return false;
//           }
// }

// console.log(is_socialSecurity_Number("019-90-5680"));

// console.log(is_socialSecurity_Number("K8V-3Y1"));

// 15
// function is_hex(s) {
//     r = /^[0-9a-f]+$/i
//     if (r.test(s)) {
//         console.log('bhut bhadiya');
//     }
//     else{
//         console.log('chal bsdk');
//     }
// }
// is_hex('ff030')
// is_hex('fz030')

// // 21
// function coma(s) {
//     arr = s.split('.')
//     arr[0] = arr[0].replace(/\B(?=(\d{3})+(?!\d))/g,',')//without ?!\d it will select all digits after thousands
//     return arr.join('.')
// }
// console.log(coma('12000.05'));

// Object
// 1
// obj = {
//     'name':'Luvv',
//     'age' : '18'
// }

// console.log(Object.keys(obj));

// 2
// var student =  { 
//     name : "David Rayy", 
//     sclass : "VI", 
//     rollno : 12  };
//     delete student.rollno;
//     console.log(student);

// 3
// var object =  { 
//     name : "David Rayy", 
//     sclass : "VI", 
//     rollno : 12  };

//     l = 0;
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             const element = object[key];
//             l++
//         }
//     }
//     console.log(l);

// 4
// var library = [
//     {
//     author: 'Bill Gates',
//     title: 'The Road Ahead',
//     readingStatus: true
//     },
//     {
//     author: 'Steve Jobs',
//     title: 'Walter Isaacson',
//     readingStatus: true
//     },
//     {
//     author: 'Suzanne Collins',
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     readingStatus: false
//     }];

//     for (let i = 0; i < library.length; i++) {
//         const e = library[i];
//         console.log(e['readingStatus']);
//     }

// 5
// class Cylnider{
//     constructor (d,h){
//         this.height = h;
//         this.diameter = d;
//     }
//     vol(){
//         return (Math.PI * Math.pow(this.diameter/2,2) * this.height).toFixed(4)
//     }
// }
// c = new Cylnider(12,3)
// console.log(c.vol());

// function Cylinder(cyl_height, cyl_diameter) {
//     this.cyl_height = cyl_height;
//     this.cyl_diameter = cyl_diameter;
//   }

//   Cylinder.prototype.Volume = function () {
//     var radius = this.cyl_diameter / 2;
//     return this.cyl_height * Math.PI * radius * radius;
//   };
// //  Cylinder.prototype.constructer = Cylinder 

//   var cyl = new Cylinder(7, 4);
//   // Volume of the cylinder with four decimal places.
//   console.log('volume =', cyl.Volume().toFixed(4));

// 6
// problem of assinging to e is bcoz e = x[i] & array are referenced based so e = x[i+1]
// function bs(a) {
//     let temp;
//     let swap;
//     idx =  a.length - 1
//     x = a
//     do {
//         swap = false
//         for (let i = 0; i < idx; i++) {
//             let e = x[i];
//             if (e > x[i+1]) {
//                 temp = e;
//                 x[i] = x[i+1];
//                 // e = x[i+1]
//                 x[i+1] = temp
//                 swap =true
//             }
//         }
//     //    idx--
//     } while (swap);
//     return x
// }

// function bubble_Sort(a)
// {
//     var swapp;
//     var n = a.length-1;
//     var x=a;
//     do {
//         swapp = false;
//         for (var i=0; i < n; i++)
//         {let e = x[i]
//             if (x[i] > x[i+1])
//             {
//                var temp = x[i];
//                x[i] = x[i+1];
//                x[i+1] = temp;
//                swapp = true;
//             }
//         }
//         n--;
//     } while (swapp);
//  return x; 
// }

// console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

// console.log(bs([12,11,24,33,434,435,4394]));

// a = [1,2,43,2]
// a2 = a[1];
// 7
// String.prototype.subStringArray = function () {
//     let subset = [];
//     for (let m = 0; m < this.length; m++) {
//         const e = this[m];
//         for (let n = m+1; n < this.length + 1; n++) {
//             const el = this[n];
//             subset.push(this.slice(m, n))
//         }

//     };
//     return subset;
// }
//     console.log('dog'.subStringArray())\

// 8
// function Clock(params) {
//     this.d = new Date;
//     this.h = this.d.getHours()
//     this.m = this.d.getMinutes()
//     this.s = this.d.getSeconds()

// }
// Clock.prototype.run = function () {
//     setInterval(this.update.bind(this),1000)
// }

// Clock.prototype.update = function () {
//     this.updateTime(1);
//     console.log(this.h + ':' + this.m + ':' + this.s);
// }
// Clock.prototype.updateTime = function (secs) {
//     this.s += secs
//     if (this.s >= 60) {
//         this.m++;
//         this.s = 0
//     }
//     if (this.m >= 60) {
//         this.h++;
//         this.m = 0
//     }
//     if (this.h >= 24) {
//         this.h = 0
//     }
// }

// c = new Clock;
// c.run()

// 9
// class Circle {
//     constructor(d) {
//         this.radius = d / 2
//         this.area = function () {
//             return (Math.PI * Math.pow(this.radius, 2)).toFixed(2)
//         }
//         this.perimeter = function () {
//             return (Math.PI * this.radius * 2).toFixed(2)
//         }
//     }
// }

// 10
// var library = [
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         libraryID: 6254
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         libraryID: 4264
//     },
//     {
//         title: 'Games Of Thrones',
//         author: 'R.R Martin',
//         libraryID: 5264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }];

// function sorting(field, reverse, initial) {
//     let key = initial ?
//         function (x) {
//             return initial(x[field])
//         }
//         :
//         function (x) {
//             return x[field]
//         }

//     reverse = reverse ? -1 : 1

//     return function (x,y) { //  pehala wala y & second wala x
//         console.log(key(x) + ' ' + key(y)+  " & " + ((key(x) > key(y)) - (key(y) > key(x))));
//         return x = key(x), y = key(y), reverse * ((x > y) - (y > x));

//     }
// }

// console.log(library.sort(sorting('libraryID',true,parseInt)));
// //     library.sort((a,b)=>{return b['libraryID']-a['libraryID']})
// //     console.log(library);

// 11
// function methods(obj) {
//     return Object.getOwnPropertyNames(obj).filter(function(property){
//         return typeof obj[property] == 'function'
//     })
// }

// console.log(methods(Array));

// function allPropandMethods(obj) {
//     return Object.getOwnPropertyNames(obj)
// }

// console.log(allPropandMethods(Math));

// 12
// function parse_URL(url) {
//     var a = document.createElement('a');
//     a.href = url;
//     return {
//         source: url,
//         protocol: a.protocol.replace(':', ''),
//         host: a.hostname,
//         port: a.port,
//         query: a.search,
//         params: (function () {
//             var ret = {},
//                 seg = a.search.replace(/^\?/, '').split('&'),
//                 len = seg.length,
//                 i = 0,
//                 s;
//             for (; i < len; i++) {
//                 if (!seg[i]) {
//                     continue;
//                 }
//                 s = seg[i].split('=');
//                 ret[s[0]] = s[1];
//             }
//             return ret;
//         })(),
//         file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
//         hash: a.hash.replace('#', ''),
//         path: a.pathname.replace(/^([^\/])/, '/$1'),
//         relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
//         segments: a.pathname.replace(/^\//, '').split('/')
//     };
// }

// console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));

// function parseUrl(url) {
//     let a = document.createElement('a');
//     a.href = url;
//     return {
//         source: url,
//         protocol: a.protocol.replace(':', ''),
//         host: a.hostname,
//         port: a.port,
//         query: a.search,
//         params: (function () {
//             let ret = {},
//                 seg = a.search.replace(/^\?/, '').split('&'),
//                 // len = seg.length;
//                 s;
//             for (let i = 0; i < seg.length; i++) {
//                 const element = seg[i];
//                 if (!seg[i]) {// if seg mein i index undefined(nhi h) 
//                     continue;
//                 }
//                 s = seg[i].split('=');
//                 console.log(s);
//                 ret[s[0]] = s[1];
//             }
//             return ret
//         })(),
//         file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
//         hash: a.hash.replace('#', ''),
//         path: a.pathname.replace(/^([^\/])/i, '/$1'),//read MDN $1 The legacy RegExp $1, $2, $3, $4, $5, $6, $7, $8, $9 properties are static and read-only properties of regular expressions that contain parenthesized substring matches.
//         relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
//         segments: a.pathname.replace(/^\//).split('/'),
//         pathname : a.pathname
//     };
// }
// jsr = parseUrl('https://www.youtube.com/results?search_query=jai+shree+ram+katha')
// console.log(jsr)    

// for (const key in jsr) {
//     if (jsr.hasOwnProperty(key)) {
//         const e = jsr[key];
//         console.log(key + ': ' + e );
//     }
// }

// url = 'https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname?q=value'
// Logs "/en-US/docs/Web/API/URL/pathname"