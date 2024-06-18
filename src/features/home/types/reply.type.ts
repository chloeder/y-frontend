export type ReplyProps = {
  content: string;
  image?: string;
  users: {
    username: string;
    fullName: string;
    photoProfile: string;
  };
  createdAt: string;
};
