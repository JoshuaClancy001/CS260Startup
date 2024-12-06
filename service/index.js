const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');
const { serverWebsocket } = require('./serverWebsocket.js');

const authCookieName = 'token';

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

app.set('trust proxy', true);

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {

  if (req.body.name.trim() === '' || req.body.password.trim() === ''){
    res.status(400).send({ msg: 'Missing Username or Password' });
  }
  if (await DB.getUser(req.body.name)){
    res.status(409).send({ msg: 'Existing user' });
  }
  else{
    const user = await DB.createUser(req.body.name, req.body.password);
    setAuthCookie(res, user.token);
    res.send({ id: user._id });
  }
5});

apiRouter.post('/auth/login', async (req, res) => {

  const user = await DB.getUser(req.body.name);
  if(user){
    if(await bcrypt.compare(req.body.password, user.password)){
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', (req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});
secureApiRouter.get('/streaks', async (_req, res) => {
  const streaks = await DB.getStreaks();
  res.send(streaks);
});

secureApiRouter.post('/streak', async(req, res) => {
  const streak = {...req.body, ip: req.ip};
  await DB.addStreak(streak);
  const streaks = await DB.getStreaks();
  res.send(streaks);
});

app.use((_req, res, next) => {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

function setAuthCookie(res, token){
  res.cookie(authCookieName, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

serverWebsocket(httpService);


// function updateStreaks(newStreak, streaks){
//   let currentUserStreak = streaks.find((s) => s.name === newStreak.name);
//   if (!currentUserStreak){
//     currentUserStreak = { 
//       name: newStreak.name, 
//       streak: 0,
//       practiceTimes: Array(7).fill("0"), 
//     };
//     streaks.push(currentUserStreak);
//     return streaks;
//   }
//   currentUserStreak.streak = newStreak.streak;
//   currentUserStreak.practiceTimes = newStreak.practiceTimes;
//   return streaks;
// }