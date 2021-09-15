import Link from 'next/link';
function home(){
  return(
    <>
     <h1>Welcome to homePage</h1>
     <Link href = '/posts'>
       Go to Posts
     </Link>
    </>
  )
}

export default home;