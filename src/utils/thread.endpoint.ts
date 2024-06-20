export function getThreadEndPoint(threadType: string) {
  switch (threadType) {
    case "following":
      return "/threads/user/following";
    case "forYou":
      return "/threads";
    default:
      return "";
  }
}
