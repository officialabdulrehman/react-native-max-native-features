import { Location } from "./Location.model"

export class Place {
  id: string = new Date().toString() + Math.random().toString()
  title: string | null = null
  imageUri: string | null = null
  address: string | null = null
  location: Location | null = null
}