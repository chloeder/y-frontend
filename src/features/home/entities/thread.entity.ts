export interface ThreadEntity {
  id: string;
  content: string;
  image?: string;
  users: {
    id: string;
    username: string;
    fullName: string;
    photoProfile: string;
  };
  createdAt: string;
  likes: number;
  replies: number;
  isLiked: boolean;
}
