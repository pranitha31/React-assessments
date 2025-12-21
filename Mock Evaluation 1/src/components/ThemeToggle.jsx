import { useTheme } from "../contexts/ThemeContext";
const ThemeToggle=()=>{
    const{theme,toggleTheme}=useTheme();

    return(
        <button className="theme-btn" onClick={toggleTheme}>
            Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
    );
};
export default ThemeToggle;