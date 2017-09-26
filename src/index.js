module.exports = function multiply(first, second) {

  var a = first.split("").reverse();
  var b = second.split("").reverse();
  var result = [];

  for(var i = 0; i < a.length; i++){
    for(var j = 0; j < b.length; j++){
      if(!result[i+j]){
        result[i+j] = 0;
      }
      result[i+j] += a[i]*b[j];
    }
  }
  for(i=0; i < result.length; i++){
    if(result[i] >= 10){
      if(!result[i+1]){
        result[i+1] = 0;
      }
      result[i+1] += Math.floor(result[i]/10);
      result[i] %= 10;
    }
  }
  return result.reverse().join('');

}
