import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { RiSunLine, RiMoonClearLine } from "react-icons/ri"

function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          role="button"
          onClick={e => toggleTheme(theme === "light" ? "dark" : "light")}
          style={{
            display: "flex",
            placeItems: "center",
            color: "white",
            cursor: "pointer",
            marginRight: "20px",
            border: 0,
            borderRadius: "50%",
            padding: "10px",
            backgroundColor: "#111111",
          }}
        >
          {theme === "dark" ? (
            <RiMoonClearLine style={{ height: "100%", color: "yellow" }} />
          ) : (
            <RiSunLine style={{ height: "100%", color: "orange" }} />
          )}
        </div>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
