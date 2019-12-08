let obj = [	"1," 	, 	2	,	3	];
console.log(obj.toString()); //”1,,2,3”		<<내용만 스트링으로 바꿔줍니다.
console.log(JSON.stringify(obj)); // ‘[“1,”,2,3]’	<<바로 json 객체로 변환하여 사용할수 있습니다.로컬스토리지에서는 stringify 를 써야겠죠. javascript 문법 그대로 스트링형태로 저장됩니다.

let obj2 = {a: 'a' , '1':1};
console.log(obj2.toString());//”[object Object]”
console.log(JSON.stringify(obj2));  // ‘{"1":1,"a":"a"}’
