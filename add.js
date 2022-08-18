import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './design.css';
import { Link } from "react-router-dom";
function Add(){
    const [title,changetitle]=useState('')
    const [summarydata,changesummarydata]=useState('')
    const [images, setImages]=useState([]);
    const [imageURLs, setImageURLs]=useState([]);
    const titlechange=(event)=>{
        changetitle(event.target.value)
    }
    const summarychange=(event)=>{
        changesummarydata(event.target.value)
    }
    const addsubmit=(event)=>{
        changetitle('')
        changesummarydata('')
        setImages('')
        setImageURLs('')
        window.alert('Blog added successfully')
    }
    useEffect(()=>
    {
        if (images.length<1) return;
        const newImageUrls=[];
        images.forEach(image=>newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    },[images]);
    function onImageChange(e){
        setImages([...e.target.files]);
    }
    return(<div className="container-fluid">
            <div className="row bg">
                <div className="col-10">
                    <h1 className="text-center">Add Blog</h1>
                <form>
                    <div className="container-fluid">
                    <div className="row">
                        <span>Title of the Blog</span>
                      </div>
                      <div className="row">
                        <textarea value={title} onChange={titlechange} placeholder="please enter the title of code here" maxLength={1000}></textarea></div>
                    <div className="row">
                        <span>Body of the blog</span>
                      </div>
                      <div className="row">
                        <textarea value={summarydata} onChange={summarychange}rows="20"placeholder="please enter the content of code here"></textarea>
                        </div>
                        <div className="row">    
                        <Link to={{pathname:'/blogs'}}><button onClick={addsubmit}>Submit</button></Link></div>
                        <div class="row">
                        <span>Upload Image: </span>
                        <div>
                         <input type="file" multiple accept="image/*" onChange={onImageChange}/>
                        {imageURLs.map(imageSrc=><img className="uploadimage" src={imageSrc} alt=""/>)}
                    </div>
                        </div>
                        </div>
                  </form>
                </div>
            </div>
        </div>)
}
export default Add;
