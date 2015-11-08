Meteor.startup(
  function() {
    Session.set('messageCount', 0);
  }
);
var msgMaxLength = 140;
function getMsgcount() {
  return Session.get('messageCount') || 0;
}
function isMsgTooLong() {
  return getMsgcount() > msgMaxLength;
}

Template.newMessage.helpers({
  isValidMessage: function() {
    return getMsgcount() > 0 && !isMsgTooLong();
  },
  msgTooLong: isMsgTooLong(),
  msgCount: function() {
    return msgMaxLength - getMsgcount();
  }
});

Template.newMessage.events({
  "keyup input[name=message]": function(e) {
    Session.set('messageCount', e.target.value.length);
  },
  "submit form": function(e) {
    e.preventDefault();
    Messages.insert({
      message: e.target.message.value,
      time: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
    e.target.message.value = '';
    Session.set('messageCount', 0);
    $('.chatroom').scrollTop( $('.chatroom').prop("scrollHeight"));
    return false;
  }
});
