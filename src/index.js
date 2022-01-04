module.exports = function reverse (n) {
  const str = `${n}`
  let newStr ='';
  let min;
  (n >= 0) ? min=0: min=1;
    for (let i = str.length - 1; i >= min; i-- ) {
     newStr = newStr + str[i];
  }
 
  return (n >= 0) ? Number(newStr) : Number(newStr);
}
