export function getFollowEndPoint(followType: string) {
  switch (followType) {
    case "following":
      return "/users/followings";
    case "follower":
      return "/users/followers";
    default:
      return "";
  }
}
