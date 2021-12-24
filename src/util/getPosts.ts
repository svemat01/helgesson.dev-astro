import { postType } from '../types/Post';

export const getPosts = async (allPosts: postType[] = []): Promise<postType[]> => {
    console.log('getPosts', allPosts.length);

    allPosts = allPosts.filter(post => post.draft !== true);

    allPosts = allPosts.sort(
        (a, b) =>
            new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf()
    );
    console.log('getPosts', allPosts.length);
    
    return allPosts;
};