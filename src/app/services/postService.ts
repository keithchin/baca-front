// services/postsService.ts
import axios from 'axios';

export interface Post {
  _id: string;
  title: string;
  content: string;
  authorId: string;
  subforumId: string;
  upvotes: string[];
  downvotes: string[];
  created_at: Date;
  updated_at: Date;
  upvotedBy?: string[];
  downvotedBy?: string[];
  voteScore: number;
}

export async function getAllPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>('http://localhost:5000/api/posts');
  return response.data;
}