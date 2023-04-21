import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts, Post } from '../../services/postService';

export const GET = async (req: NextRequest, res: NextResponse) => {
  if (req.method === 'GET') {
    try {
      const posts: Post[] = await getAllPosts();
      return NextResponse.json(posts);
    } catch (error) {
        return new Response('Error fetching posts!', {
            status: 200,
        });    
    }
  } else {
    return new Response('Method not allowed!', {
        status: 405,
    });     
}
};

