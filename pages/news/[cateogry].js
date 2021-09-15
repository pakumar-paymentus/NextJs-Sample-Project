//dynamic rendering of news article on cateogry bases

function cateogryBasedArticle({ articles, cateogry }) {
    return (
        <>
           {
               articles.map(article => {
                   return(
                       <div key = {article.id}>
                           <h2>showing the news of {cateogry}</h2>
                           <p>{article.title} | {article.cateogry} | {article.description}</p>
                       </div>
                   )
               })
           }
        </>
    )
}

export default cateogryBasedArticle;

export async function getServerSideProps(context) {

    const { params, req, res, query } = context;
    // res.setHeaders('Set-Cookie', ['news'='aaj tak']);        //set cookie
    const { cateogry } = params;
    const response = await fetch(`http://localhost:4000/news?cateogry=${cateogry}`);
    const data = await response.json();
    // console.log(data);
    
    //getServerProps should return an object an object must contain props which is also a object
    return {
        props: {
            articles: data,
            cateogry
        }
    }
}