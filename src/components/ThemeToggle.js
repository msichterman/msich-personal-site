import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { RiSunLine, RiMoonClearLine } from "react-icons/ri"

function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          role="button"
          tabIndex="0"
          onClick={e => toggleTheme(theme === "light" ? "dark" : "light")}
          onKeyDown={e =>
            e.keyCode === 13
              ? toggleTheme(theme === "light" ? "dark" : "light")
              : null
          }
          id="theme-toggle"
        >
          {theme === "light" ? (
            <RiSunLine style={{ height: "100%", color: "orange" }} />
          ) : (
            <RiMoonClearLine style={{ height: "100%", color: "yellow" }} />
          )}
        </div>
      )}
    </ThemeToggler>
  )
}

export default ThemeToggle
