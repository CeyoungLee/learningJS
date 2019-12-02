'use strict';

//es6 function: declaration of block scope variable
const sentences = [
    {subject: 'JavaScript', verb: 'is', object: 'great'},
    {subject: 'Elephants', verb: 'are', object: 'large'},
];

//es6 func : destroy objects
function say({subject, verb, object}) {
    //es6 fx : template 문자열
    //backtick
    console.log(`${subject} ${verb} ${object}`);
}

//es6 func : for .. of
for (let s of sentences) {
    say(s);
}
