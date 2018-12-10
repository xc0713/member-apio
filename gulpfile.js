var gulp = require('gulp');
var server = require('gulp-webServer');
var fs = require('fs');
var url = require('url');
var path = require('path');
gulp.task('servers', function() {
    gulp.src('./src')
        .pipe(server({
            port: 9090,
            open: true,
            middleWare: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return res.end();
                }
                if (req.url === '/') {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', 'index.html')))
                }
            }
        }))
})