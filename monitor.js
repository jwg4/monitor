var webPage = require('webpage');
var page = webPage.create();

page.viewportSize = { width: 1920, height: 1080 };
page.open("monitor.html", function start(status) {
  page.render('monitor.jpeg', {format: 'jpeg', quality: '100'});
  phantom.exit();
});

