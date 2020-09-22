/** 
 * 
 *  LPG Error extends the normal JS error so we can easily
 *  add a status when we make an instance of it.
 *
 */

class LPGError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

module.exports = LPGError;
