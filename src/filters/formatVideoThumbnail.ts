var formatVideoThumbnail = function(url: string) {
  const urlArray = url.split('/');
  return "https://i1.ytimg.com/vi/" + urlArray[urlArray.length - 1 ] + "/mqdefault.jpg";
};

export default formatVideoThumbnail;
