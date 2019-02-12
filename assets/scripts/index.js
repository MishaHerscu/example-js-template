'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example.js');

const authEvents = require('./apiActions/authActions/events.js');
const helpersEvents = require('./helpers.js');

$('.signed-in').hide();
$('.signed-out').show();
$('#admin-status-title').hide();

$(() => {
  authEvents.addHandlers();
  helpersEvents.addHandlers();
});
