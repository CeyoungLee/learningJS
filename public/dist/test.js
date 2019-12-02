'use strict';

//es6 function: declaration of block scope variable

var sentences = [{ subject: 'Ceyoung', verb: 'is', object: 'great' }, { subject: 'Sol', verb: 'are', object: 'large' }];

//es6 func : destroy objects
function say(_ref) {
    var subject = _ref.subject,
        verb = _ref.verb,
        object = _ref.object;

    //es6 fx : template 문자열
    //backtick
    console.log(subject + ' ' + verb + ' ' + object);
}

//es6 func : for .. of
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var s = _step.value;

        say(s);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}