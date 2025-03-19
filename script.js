   function translatePigLatin(str) {
   const vowels =  ['a', 'e', 'i', 'o', 'u'];

    const firstChar = str[0];
    if (vowels.includes(firstChar)){
      return str + 'way';
  }

    let consonantCluster = '';
    for (const c of str){
      if (vowels.includes (c)){
        hasNoVowels = false;
        break;
        }
      }
      if (hasNoVowels){
        return str + 'ay';
      }

     let ConsonantCluster = '';
     let firstVowelIndex = 0;
     for (let i = 0; i< str.length; i++){
       const c = str[i];
       if (vowels.includes(c)){
         firstVowelIndex = i;
         break;
     }
       ConsonantCluster += c;
      }
      return str.substring(firstVowelIndex) + consonantCluster +'ay';
  }
      console.log(translatePigLatin('consonant'));function translatePigLatin(str) {
   const vowels = str ['a', 'e', 'i', 'o', 'u'];

    const firstChar = str[0];
    if (vowels.includes(firstChar)){
      return str + 'way';
  }

    let consonantCluster = '';
    for (const c of str){
      if (vowels.includes (c)){
        hasNoVowels = false;
        break;
        }
      }
      if (hasNoVowels){
        return str + 'ay';
      }

     let ConsonantCluster = '';
     let firstVowelIndex = 0;
     for (let i = 0; i< str.length; i++){
       const c = str[i];
       if (vowels.includes(c)){
         firstVowelIndex = i;
         break;
     }
       ConsonantCluster += c;
      }
      return str.substring(firstVowelIndex) + 'ay';
  }
      console.log(translatePigLatin('consonant'));
console.log(translatePigLatin('pig'));
console.log(translatePigLatin('apple'));   

translatePigLatin();