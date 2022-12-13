import { DarkTheme } from "./dark/dark.theme";
import { LightTheme } from "./light/light.theme";
import { ThemeI } from "./themeI";
import { Themes } from "./Themes.enum";

type Props = {
  theme: Themes
}

export const getTheme = ({ theme }: Props): ThemeI => {
  switch (theme) {
    case Themes.LIGHT: {
      return LightTheme()
    }
    case Themes.DARK: {
      return DarkTheme()
    }
    default: {
      return LightTheme()
    }
  }
}