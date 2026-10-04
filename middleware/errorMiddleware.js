// Handles requests to routes that don't exist (404)
const notFound = (req, res, next) => {
  res.status(404).json({ message: `Route not found: ${req.method} ${req.originalUrl}` });
};

// Central error handler: every next(error) in the app ends up here
const errorHandler = (err, req, res, next) => {
  // Mongoose validation failed (missing field, bad email format, short password...)
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ message: 'Validation failed', errors: messages });
  }

  // Duplicate key error from the unique email index
  if (err.code === 11000) {
    return res.status(409).json({ message: 'A user with this email already exists' });
  }

  // Invalid MongoDB ID that reached Mongoose
  if (err.name === 'CastError') {
    return res.status(400).json({ message: 'Invalid user ID format' });
  }

  // Malformed JSON in the request body
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ message: 'Malformed JSON in request body' });
  }

  // Anything unexpected: log the details on the server, send a generic message to the client
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
};

module.exports = { notFound, errorHandler };