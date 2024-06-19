export function getThreadEndPoint(threadType: string) {
  switch (threadType) {
    case "following":
      return "/threads/following";
    case "forYou":
      return "/threads";
    default:
      return "";
  }
}
