const moment = require('moment');

Date.prototype.timeNow = function () { return ((this.getHours() < 10) ? "0" : "") + ((this.getHours() > 12) ? (this.getHours() - 12) : this.getHours()) + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes() + ((this.getHours() > 12) ? (' PM') : ' AM'); };
var newDate = new Date();
var time = newDate.timeNow();
function formatMessage(username, text) {
  return {
    username,
    text,
    time
  };
}

module.exports = formatMessage;
