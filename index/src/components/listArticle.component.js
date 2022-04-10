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
          <button onClick={() => (window.location = "/#/editor")}>
            add article
          </button>
          <input
            type="text"
            placeholder=""
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <button onClick={search}>search</button>
          <ul>
            {articles.map((article, index) => (
              <li key={index}>
                <p>{article.title}</p>
                <img src={article.imageLink} width="200"></img>
                <button
                  onClick={() =>
                    (window.location = "/#/editor?id=" + article._id)
                  }
                >
                  update
                </button>
                <button onClick={() => delArticle(article._id, index)}>
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div></div>
      )}

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
            <div className="col-lg-3 mb-3">
                <BlogBoxSimple
                    title="Separate your place with exotic hotels"
                    date="27 FEB 2022"
                    image="https://www.gaz-mobilite.fr/img/news/citroen-hy-jupalo-gnv_230719.jpg"
                />
                <a type="submit" onClick={() =>
                  (window.location = "/#/editor?id=" )
                } className="btn btn-icon mr-2">
                    <i class="fa-solid fa-pen-to-square"></i>
                </a>
                <a type="submit" onClick={() => delArticle(11, 20)} className="btn btn-icon">
                <i class="fa-solid fa-trash"></i>
                </a>
                

            </div>
        </div>  
      </div>
    </div>
  );
}
