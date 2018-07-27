const express = require('express');

const app = express();

app.set('port', process.env.PORT || 8888);
// port 8888 등록 -> cloud 업로드

app.get('/',function(req,res) {
  res.send('express server works!');
});

app.listen(app.get('port'), function(){
  console.log('Express server is running on localhost: ' + app.get('port'));
});