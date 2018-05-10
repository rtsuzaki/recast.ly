var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      key: options.key,
      embeddable: true
    },
    success: function(data) {
      //videoCollection.set(data.items);
      callback(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;
