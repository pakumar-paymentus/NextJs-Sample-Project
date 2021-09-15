function Post({postById}) {

    return <h1>you are in post by id {postById.title}</h1>

}

export default Post;

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data.length);
    const paths = data.map((post) => {
        return {
            params:{
                postsId: `${post.id}`
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps(context) {
    const { params } = context;
    console.log(params);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`)
    const data = await response.json();
    console.log(data);
    return {
        props: {
            postById: data
        }
    }
}