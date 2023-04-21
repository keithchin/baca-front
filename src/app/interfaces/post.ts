export type IPost = {
  authorId: string;
  title: string;
  content: string;
  subforumId: string;
  upvotedBy: Array<string>,
  downvotedBy: Array<string>,
  voteScore: Number,
  createdAt: Date,
  updatedAt: Date,
};

export type IPostItem = {
    post: IPost,
}