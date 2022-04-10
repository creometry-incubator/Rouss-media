import axios from "axios";
import { useEffect, useState } from "react";
import Sign from "./signIn.component";
import { useCookies } from "react-cookie";
import BlogBoxSimple from "./BlogBoxSimple";

export default function List() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("");
  const [cookies] = useCookies(["gloomeyToken"]);

  useEffect(() => {
    axios.get(window.ENV.ARTICLE_SERVICE_URI).then((res) => {
      setArticles(res.data);
    });
  }, []);
  const delArticle = (id, i) => {
    axios.delete(window.ENV.ARTICLE_SERVICE_URI + "/" + id).then((res) => {
      window.alert(res.data);
      setArticles(articles.filter((art, index) => index !== i));
    });
  };
  const search = () => {
    axios
      .get(window.ENV.ARTICLE_SERVICE_URI + "/?filter=" + filter)
      .then((res) => {
        setArticles(res.data);
      });
  };
  return (
    <div>
      <Sign />
      {cookies.gloomeyToken ? (
        <div>
          <div className="container-fluid ">
          <div className="row mb-4">
          <div className="col-lg-2">
          <button className="btn-bordered" onClick={() => (window.location = "/#/editor")}>
            <i class="fa-solid fa-plus mr-3"></i> add article
            </button>
          </div>
        

            <div className="widget col-lg-3">
            <div className="form-inline search-form">
                <div className="form-group">
                <input
                    value={filter}
                    onChange={(e) => {
                    setFilter(e.target.value);
                    }}
                    type="text"
                    className="form-control"
                    placeholder="Search on the site"
                />
                </div>
                <a
                onClick={search}
                type="submit"
                className="btn btn-primary"
                >
                <i className="fa fa-search"></i>
                </a>
            </div>
            </div>
            </div>

          
            <div className="row" key={1}>
            {articles.map((article, index) => (
                <div className="col-lg-3 mb-3">
                <BlogBoxSimple
                    title={article.title}
                    date=""
                    image={article.imageLink}
                />
                <a type="submit" onClick={() =>
                  (window.location = "/#/editor?id="+ article._id )
                } className="btn btn-icon mr-2">
                    <i class="fa-solid fa-pen-to-square"></i>
                </a>
                <a type="submit" onClick={() => delArticle(article._id, index)} className="btn btn-icon">
                <i class="fa-solid fa-trash"></i>
                </a>
                

            </div>
              
            ))}
            
        </div>  
      </div>
        </div>
      ) : (
        <div></div>
      )}

      
    </div>
  );
}
