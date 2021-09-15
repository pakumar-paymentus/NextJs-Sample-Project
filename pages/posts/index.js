//try to fetch fake rest api users api is taken from jsonplaceholder
//fetching 100 posts and pre redener to the client side

import Link from 'next/link'
function postsList({ posts }) {
    return (
        <>
            <h1>List of posts</h1>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <Link href={`/posts/${post.id}`} passHref>
                            <h2>
                                {post.id}{post.title}
                            </h2>

                        </Link>
                        <hr />
                    </div>


                )
            })}
        </>
    );
}

export default postsList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props: {
            posts: data 
        }
    }
}