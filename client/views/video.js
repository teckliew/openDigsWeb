Meteor.startup(function () {
  Meteor.call('videoList', function(error, data) {
    Session.set('videoUrl', data[0]['video']['youtube_url']);
  });
});

Template.video.helpers({
  videoId: function() {
    console.log(Session.get('videoUrl'));
    var ytLink = Session.get('videoUrl');
    var ytId = ytLink.split('v=')[1];
    return ytId;
  }
})
