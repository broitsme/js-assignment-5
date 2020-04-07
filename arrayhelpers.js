Array.prototype.square = function (){
let arr = [];
for(let i = 0; i < this.length; i++){
    arr[i] = this[i] * this[i];
  }
  return arr;
}

Array.prototype.cube =function (){
let arr = [];
for(let i = 0; i < this.length; i++){
    let val = this[i];
    arr[i] = val * val * val;
  }
  return arr;
}

Array.prototype.sum =function (){
let sum = 0; 
for(let i = 0; i < this.length; i++){
    sum += this[i];
  }
  return sum;
}
Array.prototype.average =function (){
  return this.sum() / this.length;
}
Array.prototype.even = function (){
  let arr = [];
  for(let i = 0; i < this.length; i++){
    if(this[i] % 2 === 0)
    arr.push(this[i]);
  }
  return arr;
}
Array.prototype.odd = function (){
  let arr = [];
  for(let i = 0; i < this.length; i++){
    if(this[i] % 2 !== 0)
    arr.push(this[i]);
  }
  return arr;
}