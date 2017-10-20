/**
 * Created by Nan on 2017/10/13.
 */
var fs = require("fs");
var url = require("url");
var path = require("path");
var gulp = require("gulp");
var webserver = require("gulp-webserver");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
gulp.task("productServer", function () {
    gulp.src("./App/Data")
        .pipe(webserver({
            host: "localhost",
            port: 8999,
            livereload: true,
            directoryListing: {
                path: "./",
                enable: true
            },
            open: true,
            middleware: function (req, res, next) {
                var urlObj = url.parse(req.url);
                console.log(urlObj)
                var mockUrl = path.join(__dirname, "APP/Data/", urlObj.pathname + ".json");
                console.log(mockUrl)
                fs.exists(mockUrl, function (exist) {
                    if (!exist) {
                        res.writeHead(404, {
                            "Content-Type": "text/json;charset=utf8"
                        });
                        res.write("Can not find this File:" + urlObj.query + ".json");
                        res.end();
                    } else {
                        fs.readFile(mockUrl, function (err, data) {
                            if (err) return console.error(err);
                            res.writeHead(200, {
                                "Content-Type": "text/json;charset=utf8",
                                "Access-Control-Allow-Origin": "http://localhost:63342"
                            });
                            res.end(data.toString());
                        });
                    }
                });
            }
        }));
});
