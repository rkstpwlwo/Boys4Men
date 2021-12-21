const jwt = require('jsonwebtoken');

module.exports = {

  authToken: function (req, res, next) {
    const header = req.headers.authorization;

    const accessToken = header.split(' ')[1];

    if (accessToken === 'null') {
      res.status(401).send('Not Authorized');
    } else {
      jwt.verify(accessToken, 'secretKey', (err, username) => {
        if (err) {
          res.status(403).send('Forbidden');
        } else {
          req.username = username;
          next();
        }
      });
    }
  },

  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "15s" });
  },
  
  sendAccessToken: (res, accessToken) => {
    res.json({ data: { accessToken }, message: "ok" });
  },

  resendAccessToken: (res, accessToken, data) => {
    res.json({ data: { accessToken, userInfo: data }, message: "ok" });
  },

  isAuthorized: (req) => {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      return null;
    }
    const token = authorization.split(" ")[1];
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      // return null if invalid token
      return null;
    }
  }

};
