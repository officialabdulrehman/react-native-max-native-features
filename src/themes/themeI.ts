import { Themes } from "./Themes.enum"

export interface palette {
  primary000: string
  primary100: string
  primary200: string
  primary300: string
  primary400: string
  primary500: string
  primary600: string
  primary700: string
  primary800: string
  primary900: string
  secondary000: string
  secondary100: string
  secondary200: string
  secondary300: string
  secondary400: string
  secondary500: string
  secondary600: string
  secondary700: string
  secondary800: string
  secondary900: string
}

export interface ColorsI extends palette { }
export interface BackgroundColorsI extends palette { }
export interface TextColorsI extends palette { }

export interface ThemeI {
  name: Themes
  colors: ColorsI
  backgroundColors: BackgroundColorsI
  textColors: TextColorsI
}