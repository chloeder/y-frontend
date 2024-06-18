export interface ReplyEntity {
  id: string;
  content: string;
  image?: string;
  users: {
    username: string;
    fullName: string;
    photoProfile: string;
  };
  createdAt: string;
}
