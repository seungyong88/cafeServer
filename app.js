// Server-side: app.js
const express    = require('express');
const app = express();
const port = 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// parse application/json

app.get('/', (req, res) => {
  let test = 'hello world';
  res.send(test);
});

app.post('/signin', function(req, res) {
  const { username, password } = req.body;

  console.log(username, password)
  // 클라이언트로부터 전송된 페이로드를 그대로 response한다.
  let test = 'hello world';
  res.send(test);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))