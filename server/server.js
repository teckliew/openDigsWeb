Meteor.methods({
  videoList: function () {
    this.unblock();
    try {
      var result = HTTP.call("GET", "https://zipcode-retsly.herokuapp.com/video");
      return result.data;
    } catch (e) {
      // Got a network error, time-out or HTTP error in the 400 or 500 range.
      return false;
    }
  }
});
