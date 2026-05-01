var http = require('http');
var fs = require('fs');
var path = require('path');

var PORT = 5500;
var ROOT = __dirname;

var mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject'
};

function getFilePath(url) {
    // Remove query string and hash
    url = url.split('?')[0].split('#')[0];

    // Clean URL mapping
    var routes = {
        '/': 'index.html',
        '/disclosure': 'disclosure.html',
        '/complaint-board': 'complaint-board.html',
        '/investor-charter': 'investor-charter.html'
    };

    // Check if it's a clean URL
    if (routes[url]) {
        return path.join(ROOT, routes[url]);
    }

    // Handle trailing slash
    if (url.endsWith('/') && routes[url.slice(0, -1)]) {
        return path.join(ROOT, routes[url.slice(0, -1)]);
    }

    // Default: try the URL as-is
    var filePath = path.join(ROOT, url);

    // If no extension, try adding .html
    if (!path.extname(filePath)) {
        if (fs.existsSync(filePath + '.html')) {
            filePath += '.html';
        }
    }

    return filePath;
}

var server = http.createServer(function(req, res) {
    var filePath = getFilePath(req.url);

    fs.readFile(filePath, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - File Not Found</h1><p>Cannot GET ' + req.url + '</p>');
            return;
        }

        var ext = path.extname(filePath);
        var contentType = mimeTypes[ext] || 'application/octet-stream';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

server.listen(PORT, function() {
    console.log('Server running at http://localhost:' + PORT);
    console.log('   Home:          http://localhost:' + PORT + '/');
    console.log('   Disclosure:     http://localhost:' + PORT + '/disclosure');
    console.log('   Complaint Board: http://localhost:' + PORT + '/complaint-board');
    console.log('   Investor Charter: http://localhost:' + PORT + '/investor-charter');
});
