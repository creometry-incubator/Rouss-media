import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import axios from "axios";
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
export default function Editor(props){
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImage] = useState();
    useEffect(()=>{
      console.log(props)
    },[])
    const Save= ()=>{
        const formData = new FormData();

        formData.append(
          "file",
          img,
          img.name
        )
        formData.append("title", title);
        formData.append("content", value);

        axios.post(window.ENV.ARTICLE_SERVICE_URI+"/upload", formData, {headers: {'Content-Type': 'multipart/form-data'}}).then(res=>{
          if(res.data._id){
            window.alert("adding suceeded")
            window.location = "/"
          }else{
            window.alert("opps!! an error occured")
          }
        })
    }
    return(
        <div>
          <input type="file" onChange={(e)=>{
            const [uploadedFile] = e.target.files
            setImage(uploadedFile)
          }}></input>
          <input onChange={e=>setTitle(e.target.value)} placeholder='title'/>
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