import ArticleList from "./ui/articleList";
import { article } from "../utils/utility";


export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-EN", { year: "numeric", month: "long" });
  };

function Articles() {
    return (  
        <section className="flex flex-col items-center justify-center py-4 bg-[#F7F7F7] dark:bg-[#1A1A1A] w-full h-fit">
            <div className="w-8/12 my-[50px] mx-[264px]">
                <h1 className="font-pally font-bold text-6xl text-verdigris dark:text-[#56D3A8]">Articles</h1>
                <p className="font-roboto text-sm sm:text-base md:text-base text-wrap text-left my-2 dark:text-[#E4E4E4]">Guides, references, life and tutorials written by me.</p>
                <h2 className="text-xl underline dark:text-white font-bold mb-3">Latest Articles</h2>
                <div className="mt-7">
                {article.slice(0,3).map((article) => (
                    <ArticleList
                        key={article.key}
                        title={article.title}
                        date={formatDate(article.date)}
                        description={article.description}
                        link={article.link}
                    />
                ))}
            </div>
            </div>

           
            
        </section>
    );
}

export default Articles;