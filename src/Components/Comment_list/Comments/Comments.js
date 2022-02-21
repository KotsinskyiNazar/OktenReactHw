import {useEffect, useState} from "react";
import Comment from "../Comment/Comment";

const Comments = () =>{

const [comments,setComment] = useState([])
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(response => setComment(response))
    },[] )



    return(
        <div>
            <h1>Comments</h1>
            {comments.map(response => <Comment comment = {response}/>)}
        </div>
    )
}
export default Comments