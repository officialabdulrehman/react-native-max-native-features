import { Location } from "./Location.model"

export class Place {
  id: string = new Date().toString() + Math.random().toString()
  title: string = ""
  imageUri: string = ""
  address: string = ""
  location: Location = { lat: -1, long: -1 }
}