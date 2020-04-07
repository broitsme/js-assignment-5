Object.prototype.hash = function(string) {
 return hashHelp(string, this);
}
function hashHelp(string, object){
  let index = string.indexOf('.');
  if(index === -1){
    return object[string];
  }
  if(!object[string.substring(0,index)]){
  return undefined;}
  return hashHelp(string.substring(index+1),object[string.substring(0,index)]);
}