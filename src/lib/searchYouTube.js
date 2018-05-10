var searchYouTube = (options, callback) => {
  // TODO
  //console.log('hi');
  if(!options.query.length){
    options.query = 'react';
  }
  var a = _.debounce(function() {
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
        callback(data.items);
      }
    });
  }, 500);
  a();
};

window.searchYouTube = searchYouTube;
