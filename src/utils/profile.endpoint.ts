export function getProfileEndPoint(
  profileType: string,
  id: string | undefined
) {
  switch (profileType) {
    case "posts":
      return `/threads/user/${id}`;
    case "likes":
      return `/threads/user/likes/${id}`;
    case "replies":
      return `/threads/user/replies/${id}`;
    default:
      return "";
  }
}
