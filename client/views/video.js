Meteor.startup(function () {
  Meteor.call('videoList', function(error, data) {
    Session.set('listings', data);
    Session.set('selectedVideo', data[0]['video']['youtube_url']);
  });
});

Template.video.helpers({
  videoId: function() {
    var ytLink = Session.get('selectedVideo');
    var ytId = ytLink.split('v=')[1];
    return ytId;
  }
})
