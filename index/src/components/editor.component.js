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
    useEffect(()=>{
      console.log(props)
    },[])
    const Save= ()=>{
        axios.post(window.ENV.ARTICLE_SERVICE_URI, {
          title: title,
          content: value,
        }).then(res=>{
          if(res.data._id){
            window.alert("adding suceeded")
            window.location = "/"
          }else
            window.alert(res.data)
        })
    }
    return(
        <div>
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