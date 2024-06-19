export function getThreadEndPoint(followType: string, id: string) {
  switch (followType) {
    case "following":
      return "/threads/following";
    case "like":
      return `/threads/likes/${id}`;
    case "replies":
      return `/threads/replies/${id}`;
    default:
      return "/threads";
  }
}
