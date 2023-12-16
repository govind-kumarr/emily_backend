const OpenTok = require("opentok");
require("dotenv").config();

const apiKey = process.env.OPENTOK_API_KEY;
const apiSecret = process.env.OPENTOK_SECRET;

const opentok = new OpenTok(apiKey, apiSecret);

opentok.createSession(function (err, session) {
  if (err) return console.log(err);

  const sessionId = session.sessionId;
  console.log({ sessionId });
  const token = opentok.generateToken(sessionId);
  console.log({ token });
});
