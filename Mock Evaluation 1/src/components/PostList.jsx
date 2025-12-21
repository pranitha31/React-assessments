import { usePost } from "../contexts/PostContext";
import PostCard from "./PostCard";

const PostList=()=>{
    const {posts}=usePost();

    return(
        <div className="post-list">
            {posts.map((post)=>(
                <PostCard key={post.id} post={post}/>
            ))};
        </div>
    );
};
export default PostList;