require("/Users/tysmith/.meteor/packages/twilio-meteor");

function alertThanks (post) {
  alert("Thanks for submitting a post!");
  return post;
}
Telescope.callbacks.add("postSubmitClient", alertThanks);