var formatVideoUrl = function(url: string) {
  const urlArray = url.split('/');
  return "https://www.youtube.com/embed/" + urlArray[urlArray.length - 1 ];
};

export default formatVideoUrl;
