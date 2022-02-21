import {useEffect, useState} from "react";
import Post from "../Post/Post";
const Posts = () =>{
    const [posts,setPost] = useState([])

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(response => setPost(response))
    },[])
    return(
        <div>
            <h1>Post</h1>
            {posts.map(response => <Post post = {response}/>)}
        </div>
    )
}
export default Posts