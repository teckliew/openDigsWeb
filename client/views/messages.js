var $cont = $('.container');
$cont.scrollTop = $cont.scrollHeight;
Template.messages.onRendered(function () {
  $('.chatroom').scrollTop( $('.chatroom').prop("scrollHeight"));
});

Template.messages.helpers({
  messages: function() {
    return Messages.find({}, { sort: {'time': 1}});
  },
  time: function(time) {
    return moment(time).format("HH:mm:ss");
  },
  isOwner: function(message) {
    return Meteor.userId() === message.owner;
  }
});
