import { createContext,useContext,useEffect,useState } from "react";
const PostContext=createContext();
 export const usePost=()=>useContext(PostContext);
 export const PostContext=({children})=>{
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>{
            setPosts(data.slice(0,20));
        });
    }, []);
    const updatePost=(id,updatePost)=>{
        setPosts((prev)=>
        prev.map((post)=>
        post.id === id ? {...post,...updatePost} : post
    ));
    };
    const deletePost=(id)=>{
        setPosts((post)=>prev.filter((post)=>post.id ! ==id));

    };
    return(
    <PostContext.Provider value={{posts ,updatePost, deletePost}}>
    {children}
    </PostContext.Provider>
);
};

