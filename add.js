import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './design.css';
import { Link } from "react-router-dom";
function Add(){
    const [title,changetitle]=useState('')
    const [summarydata,changesummarydata]=useState('')
    const [images, setImages]=useState([]);
    const [imageURLs, setImageURLs]=useState([]);
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
                        <textarea placeholder="please enter the title of code here" maxLength={1000}></textarea></div>
                    <div className="row">
                        <span>Body of the blog</span>
                      </div>
                      <div className="row">
                        <textarea rows="20"placeholder="please enter the content of code here"></textarea>
                        </div>
                        <div className="row">
                            <div className="col-6">
                        <button clas>Submit</button></div></div>
                        </div>
                  </form>
                </div>
            </div>
        </div>)
}
export default Add;