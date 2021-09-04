export const getTimeAgo = (time) => {
  var now = new Date().getTime();
  var seconds = Math.floor((now - time) / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var months = Math.floor(days / 30);
  var years = Math.floor(months / 12);
  if (seconds < 60) {
    return "Just now";
  } else if (minutes < 60) {
    return minutes + " minutes ago";
  } else if (hours < 24) {
    return hours + " hours ago";
  } else if (days < 31) {
    return days + " days ago";
  } else if (months < 12) {
    return months + " months ago";
  } else {
    return years + " years ago";
  }
};

export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  if (minutes < 60) {
    return minutes + " Minutes";
  } else if (hours < 24) {
    return hours + " Hours";
  } else {
    return "More than 24 Hours";
  }
};

export const elementInViewport = (el) => {
  var top = el?.offsetTop;
  var left = el?.offsetLeft;
  var width = el?.offsetWidth;
  var height = el?.offsetHeight;

  while (el?.offsetParent) {
    el = el?.offsetParent;
    top += el?.offsetTop;
    left += el?.offsetLeft;
  }

  return (
    el &&
    top &&
    left &&
    top < window.pageYOffset + window.innerHeight &&
    left < window.pageXOffset + window.innerWidth &&
    top + height > window.pageYOffset &&
    left + width > window.pageXOffset
  );
};
