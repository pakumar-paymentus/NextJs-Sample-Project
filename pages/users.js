//try to fetch fake rest api users api is taken from jsonplaceholder

function userList({users}) {
    return (
        <>
            <h1>List of users</h1>
            {users.map((user) => {  
                return(
                    <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>

                    </div>

                )
            })}
        </>
    );
}

export default userList

//methods used for cliend side prerendering
//get data from api and send it to client side 
export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    //getStaticProps should return an object an object must contain props which is also a object
    return {
      props:{
        users: users
      }
    }
  }