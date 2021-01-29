/*
    need to
       npm install pageres
    ref:
       https://github.com/sindresorhus/pageres
*/

const Pageres = require('pageres');

(async () => {
	await new Pageres({delay: 2})
		.src('https://github.com/sindresorhus/pageres', ['480x320', '1024x768', 'iphone 5s'], {crop: true})
		.src('https://sindresorhus.com', ['1280x1024', '1920x1080'])
		.src('data:text/html,<h1>Awesome!</h1>', ['1024x768'])
		.dest(__dirname)
		.run();

	console.log('Finished generating screenshots!');
})();
