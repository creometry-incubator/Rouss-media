import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import axios from "axios";
import { useSearchParams   } from 'react-router-dom';
import { WithContext as ReactTags } from 'react-tag-input';
import "../css/example.css"
let modules = {
    toolbar: [
      [{'font': []}],
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  }

 let formats = [
    'font', 'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]
export default function Editor(){
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImage] = useState();
    const [preview, setPreview] = useState();
    const [tags, setTags] = useState([]);
    let [searchParams] = useSearchParams();
    const [id, setID] = useState() ;
    useEffect(()=>{
      setID(searchParams.get("id"))
      if(searchParams.get("id")){
        axios.get(`${window.ENV.ARTICLE_SERVICE_URI}/${searchParams.get("id")}`).then(res=>{
          setValue(res.data.content);
          setTitle(res.data.title);
          setTags(res.data.tags);
        })
        setPreview(`${window.ENV.ARTICLE_SERVICE_URI}/image/${searchParams.get("id")}`)
      }
    },[])
    const Save= ()=>{
      if( !preview || !title || !value) return;
        const formData = new FormData();
        if(img){
          formData.append(
            "file",
            img,
            img.name
          )
        }
        
        formData.append("title", title);
        formData.append("content", value);
        formData.append("tags", JSON.stringify(tags));
        if(id){
          axios.put(window.ENV.ARTICLE_SERVICE_URI+"/"+id, formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(res=>{
            if(res.data._id){
              window.alert("modifying suceeded")
              window.location = "/"
            }else{
              console.log(res.data)
              window.alert("opps!! an error occured")
            }
          })
        }else{
          axios.post(window.ENV.ARTICLE_SERVICE_URI, formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(res=>{
            if(res.data._id){
              window.alert("adding suceeded")
              window.location = "/"
            }else{
              window.alert("opps!! an error occured")
            }
          })
        }
        
    }
    const handleDelete = i => {
      setTags(tags.filter((tag, index) => index !== i));
    };
  
    const handleAddition = tag => {
      setTags([...tags, tag]);
    };
  
    return(
        <div>
          <input type="file" onChange={(e)=>{
            const [uploadedFile] = e.target.files
            setImage(uploadedFile)
            setPreview(URL.createObjectURL(uploadedFile))
            }}
            accept="image/png"
          ></input>
          <ReactTags 
          tags={tags}
          handleAddition={handleAddition}
          handleDelete={handleDelete}
          placeholder="keywords"
          />
          <img id="preview" src={preview} width="100"></img>
          <input onChange={e=>setTitle(e.target.value)} value={title} placeholder='title'/>
            <ReactQuill theme="snow"
                    modules={modules}
                    formats={formats}
                    value={value} onChange={setValue}
                    >
            </ReactQuill>
            <button onClick={Save}>save</button>
            <p>
                {value}
            </p>
        </div>
    )
}