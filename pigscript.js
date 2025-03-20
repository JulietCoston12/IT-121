   function translatePigLatin(str) {
     if(!str) {
       return ""; // handle empty string input.
 }
      
   const vowels =  ['a', 'e', 'i', 'o', 'u'];
   const firstChar = str[0];
    
     if (vowels.includes(firstChar)){
      return str + 'way';
  }

    let consonantCluster = '';
    let firstVowelIndex = -1; // initialize to -1 to indicate  no vowel found yet.
     
    for (let i =0; i< str.length; i++) {
      if (vowels.includes (str[i])){
        firstVowelIndex = i;
        break;
        }else{
        consonantCluster += str[i];
      }
      }
      if (firstVowelIndexVowels === -1) { // no vowel found.
        return str + 'ay';
      }

     return str.substring(firstVowelIndex) + consonantCluster +'ay';
}
      
      console.log(translatePigLatin('consonant')); // Output: "onsonantcay"
console.log(translatePigLatin('pig')); //  "igpay"
console.log(translatePigLatin('apple')); // "appleway"
console.log(translatePigLatin('rhythm')); // "rhthmay" no vowel found.
console.log(translatePigLatin('')); // "" 