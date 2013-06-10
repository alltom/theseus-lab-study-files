var fs = require('fs');

function du(path, callback) {
	callback(0);
}

du('./test-dir', function (size) {
	console.log('total size', size);
});
