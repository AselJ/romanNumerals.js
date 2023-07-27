


function convertToRoman(num) {
  const romans = { 'M':1000, 'D':500, 'C':100, 'L':50, 'X':10, 'V':5, 'I':1 }
  
  let str = '';

  for (let i of Object.keys(romans)) {
    let q = Math.floor(num / romans[i]);
    num -= q * romans[i];
    str += i.repeat(q);
  }

  return str;
}

console.log(convertToRoman(5))
console.log(convertToRoman(267))
console.log(convertToRoman(99))
console.log(convertToRoman(850))