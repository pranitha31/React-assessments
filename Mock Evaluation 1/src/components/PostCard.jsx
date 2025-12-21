import { useState } from "react";
import { usePost } from "../contexts/PostContext";
const PostCard=({post})=>{
    const{updatePost, deletePost}=usePost();
    const[isEditing,setIsEditing]=useState(false);
    const[title,setTitle]=useState(post.title);
    const [body,setBody]=useState(post.body);
    
    const handleUpdate=()=>{
        updatePost(post.id,{title,body});
        setIsEditing(false);

    };
    return(
        <div className="post-card">
            {isEditing ? (
                <>
                <input value={value} 
                onChange={(e)=>setTitle(e.target.value)}

                />
                <textarea
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                />
                <button onClick={handleUpdate}>Save</button>
                </>
            ) : (
                <>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <div className="actions">
                    <button onClick={()=>setIsEditing(true)}>Edit</button>
                    <button onClick={()=>deletePost(post.id)}>Delete</button>

                </div>
                </>
            )}
        </div>
    );
};
export default PostCard'