let a = false;
let b = a.valueOf();
console.log( b );

console.log("Boolean(a) :"+Boolean(a));
console.log("Boolean(b) :"+Boolean(b));

if(Boolean(b)){
  console.log("it's true");
}