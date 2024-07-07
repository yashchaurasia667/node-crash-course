const posts = [
    {id: 1, title: 'Post one'},
    {id: 2, title: 'Post two'},
    {id: 3, title: 'Post three'},
    {id: 4, title: 'Post four'},
]

const getPosts = ()=> posts;

export const getPostLength = ()=> posts.length;

export default getPosts;