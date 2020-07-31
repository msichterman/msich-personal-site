// Colors
const CHARCOAL = "#333333"
const ELECTRICBLUE = "#0892d0"
const ICE = "#d9f2fe"
const WHITE = "#fffff"

export const COLORS = {
  text: {
    light: CHARCOAL, // white
    dark: WHITE, // near-black
  },
  background: {
    light: WHITE, // white
    dark: CHARCOAL, // navy navy blue
  },
  primary: {
    light: ELECTRICBLUE, // Pinkish-red
    dark: ELECTRICBLUE, // Yellow
  },
  secondary: {
    light: ICE, // Purplish-blue
    dark: ICE, // Cyan
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: "hsl(0deg, 0%, 70%)",
    dark: "hsl(0deg, 0%, 30%)",
  },
  gray500: {
    light: "hsl(0deg, 0%, 50%)",
    dark: "hsl(0deg, 0%, 50%)",
  },
  gray700: {
    light: "hsl(0deg, 0%, 30%)",
    dark: "hsl(0deg, 0%, 70%)",
  },
}

export const COLOR_MODE_KEY = "color-mode"
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode"
