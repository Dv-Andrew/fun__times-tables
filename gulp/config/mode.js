/**
 * Environtment mode
 */
module.exports = {
  isDevelopment: !process.env.NODE_ENV || process.env.NODE_ENV == 'development'
};