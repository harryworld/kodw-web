var MobileDetect = require('mobile-detect'),
    http = require('http');

http.createServer(function(req, res) {
  md = new MobileDetect(req.headers['user-agent']);
  console.log(md);

  if (md.os() == 'iOS') {
    res.writeHead(301,
      {Location: 'http://kodw-ios.homesmartly.com/'}
    );
  } else if (md.os() == 'AndroidOS') {
    res.writeHead(301,
      {Location: 'http://kodw-android.homesmartly.com/'}
    );
  }
  res.end();
}).listen(8080);