// import { NextApiRequest, NextApiResponse } from 'next';
// import { getAllPosts, Post } from '../services/postService';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'GET') {
//     try {
//       const posts: Post[] = await getAllPosts();
//       res.status(200).json(posts);
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching posts' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// };

// export default handler;