
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */
 //
 // function DIGIT_VALUES (n) {
 //   switch (n){
 //   case "I": 1,
 //   case "V": 5,
 //   case "X": 10,
 //   case "L": 50,
 //   case "C": 100,
 //   case "D": 500,
 //   case "M": 1000
 //    }
 // };

 function translateRomanNumeral(romanNumeral) {
 // TODO: Implement me!
 /* START SOLUTION */
   /* END SOLUTION */
   var result = 0;
   var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
   for (var i = 0;i<=decimal.length;i++) {
     while (romanNumeral.indexOf(roman[i]) === 0){
       result += decimal[i];
       romanNumeral = romanNumeral.replace(roman[i],'');
     }
   }
   return result;
   }
