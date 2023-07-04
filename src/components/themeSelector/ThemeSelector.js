import { useTheme } from "../../hooks/useTheme";

// Icons
import modeIcon from "../../assets/model-icon.svg";

// Styles
import "./ThemeSelector.css";

// Variables
const themeColors = ["#58249c", "#249c6b", "#b70233"];

export default function ThemeSelector() {
  const { mode, changeColor, changeMode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          src={modeIcon}
          alt="Toogle Mode"
          onClick={toggleMode}
          style={{ filter: mode === "dark" ? "invert(100%)" : "invert(20%)" }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}