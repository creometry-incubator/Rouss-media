import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { WithContext as ReactTags } from "react-tag-input";
import "../css/reacttags.css";
import { useCookies } from "react-cookie";
let categories = ["sports", "fashion", "travelling", "lifestyle", "news"]
let modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

let formats = [
  "font",
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
export default function Editor() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [img, setImage] = useState("");
  const [tags, setTags] = useState([]);
  let [searchParams] = useSearchParams();
  const [id, setID] = useState();
  const [cookies] = useCookies(["gloomeyToken"]);

  useEffect(() => {
    setID(searchParams.get("id"));
    if (searchParams.get("id")) {
      axios
        .get(`${window.ENV.ARTICLE_SERVICE_URI}/${searchParams.get("id")}`)
        .then((res) => {
          setValue(res.data.content);
          setTitle(res.data.title);
          setTags(res.data.tags);
          setImage(res.data.imageLink)
        });
    }
  }, []);
  const Save = () => {
    if (!img || !title || !value){
      alert("Please fill all fields!!!")
      return;}
    let formData = {
      title: title,
      content: value,
      tags: tags,
      imageLink: img,
      authorId: cookies.gloomeyToken,
    };
    if (id) {
      axios
        .put(window.ENV.ARTICLE_SERVICE_URI + "/" + id, formData)
        .then((res) => {
          if (res.data._id) {
            window.alert("modifying suceeded");
            window.location = "/";
          } else {
            window.alert("opps!! an error occured");
          }
        });
    } else {
      axios.post(window.ENV.ARTICLE_SERVICE_URI, formData).then((res) => {
        if (res.data._id) {
          window.alert("adding suceeded");
          window.location = "/";
        } else {
          window.alert("opps!! an error occured");
        }
      });
    }
  };
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };
  const findCateg = (categorie)=>{
    for(let tag of tags){
      if(tag.id == categorie) return true;
    }
    return false;
  }
  const handleAddition = (tag) => {
    console.log(tag)
    setTags([...tags, tag]);
  };

  return (
    <div>
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <h2>Write an article</h2>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="page-wrapper">
                
                  <div className="col-lg-12">
                    <div className="form-wrapper">
                      <div className="row">
                      <div className="col-lg-6">
                      <input
                        className="form-control"
                        placeholder="image link"
                        value={img}
                        onChange={(e) => {
                          setImage(e.target.value);
                        }}
                        accept="image/png"
                      ></input>
                      
                      </div>
                      <div className="col-lg-4">
                      <img id="preview" className="preview-image mb-2" src={img} width="100"></img>

                      </div>
                      </div>
                      {categories.map((categorie, index)=>(
                        <button className={findCateg(categorie)?"buttrue": "butfalse"}
                        onClick={()=>{
                          let bool = false;
                          for(let tag of tags){
                            if(tag.id == categorie) {bool = true; break;}
                          }
                          if(!bool)
                          handleAddition({id: categorie, text: categorie})
                          }}>{categorie}</button>
                      ))}
                     
                      <ReactTags
                        tags={tags}
                        handleAddition={handleAddition}
                        handleDelete={handleDelete}
                        placeholder="keywords"
                      />
                      <input
                        className="form-control"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder="title"
                      />
                      <ReactQuill
                      className="form-control"
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={value}
                        onChange={setValue}
                      ></ReactQuill>
                      <button className="btn btn-primary" onClick={Save}>save</button>
                      {/*<p>{value}</p>*/}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
