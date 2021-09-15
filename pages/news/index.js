//methods used for cliend side prerendering and data fetching using getServerProps()
function newsArticleList({newsList}) {
    return(
        <>
            {
                newsList.map(news => {
                    return(
                        <div key = {news.id}>       
                        <p>{news.title} | {news.description} | {news.cateogry}</p>                          
                        </div>
                    )
                })
            }
        </>
    )
}

export default newsArticleList

export async function getServerSideProps() {
    // http://localhost:4000/news is locally hosted news database
    const response = await fetch('http://localhost:4000/news');
    const data = await response.json();
   
    //getServerProps should return an object an object must contain props which is also a object
    return {
        props: {
            newsList: data
        }
    }
}