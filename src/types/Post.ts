export type postType = {
    title: string;
    description: string;
    publishDate: string;
    author: string;
    url: string;
    image: postImageType;
};

export type postImageType = {
    src: string;
    alt: string;
};