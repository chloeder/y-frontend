export type ThreadDto = {
  content: string;
  image?: string;
};

export type ThreadProps = {
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
  onClick?: () => void;
};
