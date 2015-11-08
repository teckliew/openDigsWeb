Meteor.startup(function () {
  Meteor.call('videoList', function(error, data) {
    var heroVid = {
      title: data[0]['displayName'],
      video: data[0]['video']['youtube_url'].split('v=')[1],
      price: data[0]['originalPrice']
    }

    Session.set('listings', data);
    Session.set('heroVid', heroVid)
  });
});

Template.video.helpers({
  videoId: function() {
    var ytLink = Session.get('heroVid');
    var ytId = ytLink['video'];
    return ytId;
  },
  price: function() {
    var data = Session.get('heroVid');
    return data['price'];
  },
  title: function() {
    var data = Session.get('heroVid');
    return data['title'];
  }
})
