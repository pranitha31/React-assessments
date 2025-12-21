import { createContext,useContext,useEffect,useState } from "react";
const PostContext=createContext();
return(
    <PostContext.Provider value={{posts,updatePost,deletePost}}/>
    {children}
    <PostContext.Provider></PostContext.Provider>
);