const crypto = require('crypto');

// Compare two strings in constant time, so response timing can't leak how much matched
const safeEqual = (a, b) => {
  const hashA = crypto.createHash('sha256').update(a).digest();
  const hashB = crypto.createHash('sha256').update(b).digest();
  return crypto.timingSafeEqual(hashA, hashB);
};

const unauthorized = (res, message) => {
  res.set('WWW-Authenticate', 'Basic realm="User Management API"');
  return res.status(401).json({ message });
};

const basicAuth = (req, res, next) => {
  const expectedUser = process.env.BASIC_AUTH_USERNAME;
  const expectedPass = process.env.BASIC_AUTH_PASSWORD;

  // Fail closed: if the credentials aren't configured, never let requests through
  if (!expectedUser || !expectedPass) {
    console.error('Basic Auth credentials are missing from the .env file');
    return res.status(500).json({ message: 'Internal server error' });
  }

  const header = req.headers.authorization || '';
  const [scheme, encoded] = header.split(' ');

  if (!scheme || scheme.toLowerCase() !== 'basic' || !encoded) {
    return unauthorized(res, 'Authentication required');
  }

  const decoded = Buffer.from(encoded, 'base64').toString('utf8');
  const separator = decoded.indexOf(':');

  if (separator === -1) {
    return unauthorized(res, 'Invalid authentication format');
  }

  // Split on the FIRST colon only, because passwords may contain colons
  const username = decoded.slice(0, separator);
  const password = decoded.slice(separator + 1);

  const usernameMatches = safeEqual(username, expectedUser);
  const passwordMatches = safeEqual(password, expectedPass);

  if (!(usernameMatches && passwordMatches)) {
    return unauthorized(res, 'Invalid credentials');
  }

  next();
};

module.exports = basicAuth;