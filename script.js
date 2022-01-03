console.log(commenters);

var inactiveArray = [];
var followersArray = [];
var commenterArray = [];
var followingArray = [];

commenters.forEach(function (commenter) {
  commenterArray.push(commenter.username);
});

followings.forEach(function (follower) {
  followingArray.push(follower.username);
});

followers.forEach(function (follower) {
  if (
    $.inArray(follower.username, commenterArray) == -1 &&
    $.inArray(follower.username, followingArray) == -1
  ) {
    inactiveArray.push(follower.username);
  }
});

inactiveArray = inactiveArray.sort();

inactiveArray.forEach(function (follower) {
  console.log(follower);
  document.body.appendChild(document.createTextNode(follower));
  document.body.appendChild(document.createElement("br"));
});
