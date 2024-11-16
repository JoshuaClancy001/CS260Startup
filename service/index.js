const express = require('express');
const uuid = require('uuid');

const app = express();

let users = {};
let streaks = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.name];
  if (user){
    res.status(409).send({ msg: 'Existing user' });
  }
  else{
    const user = {name: req.body.name, password: req.body.password,token: uuid.v4() };
    users[user.name] = user;
    res.send({ token: user.token });
  }
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.name];
  if(user){
    if(req.body.password === user.password){
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).send();
});

apiRouter.get('/scores', (_req, res) => {
  res.send(streaks);
});

apiRouter.post('/score', (req, res) => {
  streaks = updateStreaks(req.body, streaks);
  res.send(streaks);
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function updateStreaks(newStreak, streaks){
  let found = false;
  for(const [i,preStreak] of streaks.entries()){
    if(newStreak.streak > preStreak.streak){
      streaks.splice(i,0,newStreak);
      found = true;
      break;
    }
  }
  if(!found){
    streaks.push(newStreak);
  }
  if(streaks.length > 10){
    streaks.length = 10;
  }
  return streaks;
}