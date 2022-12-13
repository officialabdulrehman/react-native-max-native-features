import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getTheme } from "../../../../themes/theme"
import { ThemeI } from "../../../../themes/themeI"
import { Themes } from "../../../../themes/Themes.enum"

type State = {
  theme: ThemeI
}

type SetThemeProps = {
  theme: Themes
}

const initialState: State = {
  theme: getTheme({
    theme: Themes.LIGHT
  })
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, { payload: { theme } }: PayloadAction<SetThemeProps>) => {
      if (state.theme.name !== theme) {
        state.theme = getTheme({ theme })
      }
    }
  }
})

export const themeReducer = themeSlice.reducer
export const { setTheme } = themeSlice.actions