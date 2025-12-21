import ThemeToggle from "./components/ThemeToggle";
import { useTheme } from "./contexts/ThemeContext";
import PostList from "./components/PostList";

const App=()=>{
    const {theme}=useTheme();
    return(
        <div className="{`app ${theme}`}">
            <h1>Post Manager</h1>
            <ThemeToggle/>
            <PostList/>
        </div>
    );
};
export default App;