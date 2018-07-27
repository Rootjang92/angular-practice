const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.set('port', process.env.PORT || 8888);
// port 8888 등록 -> cloud 업로드
app.set('view engines', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');

app.get('/',function(req,res) {
  // res.send('express server works!');
  res.render('index.html');
});

app.get('/chat', function(req,res) {
  res.render('chat.html');
})

io.on('connection', function(socket){
  console.log('A user connected');

  socket.on("chat message", function(msg){
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", function(){
    console.log("user disconnected");
  });
});

http.listen(app.get('port'), function(){
  console.log('Express server is running on localhost: ' + app.get('port'));
});
