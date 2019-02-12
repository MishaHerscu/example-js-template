'use strict';

const app = require('../../app.js');
const helpers = require('../../helpers.js');

const success = (data) => {
  if (data) {
    // console.log(data);
  } else {
    // console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const signUpSuccess = function(){
  $('#sign-up-givenname').val()
  $('#sign-up-surname').val()
  $('#sign-up-email').val()
  $('#sign-up-pw').val()
  $('#sign-up-pw-confirm').val()

  $('#sign-in-email').val($('#sign-up-email').val());
  $('#sign-in-pw').val($('#sign-up-pw').val());

  $('#sign-in').submit();
  $('#signUpModal').modal('hide');
};

const signOutSuccess = () => {
  $('#sign-in-email').val()
  $('#sign-in-pw').val()
  $('.signed-in').hide();
  $('.signed-out').show();
};

const deleteAccountSuccess = () => {
  $('#sign-in-email').val()
  $('#sign-in-pw').val()
  $('.signed-in').hide();
  $('.signed-out').show();
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signOutSuccess,
  deleteAccountSuccess,
};
