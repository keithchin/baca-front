export type IPost = {
    _id: string;
    title: string;
    content: string;
    authorId: string;
    subforumId: {
        title: string;
        description: string;
    };
    upvotes: string[];
    downvotes: string[];
    created_at: Date;
    updated_at: Date;
    upvotedBy?: string[];
    downvotedBy?: string[];
    voteScore: number;
};

export type IPostItem = {
    post: IPost,
}

