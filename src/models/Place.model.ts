import { Location } from "./Location.model"

interface PlaceI {
  id?: string
  title: string
  imageUri: string
  location: Location
}

export class Place {
  id?: string = ""
  title: string = ""
  imageUri: string = ""
  address: string = ""
  location: Location = { lat: -1, lng: -1, }

  constructor({ title, imageUri, location, id }: PlaceI) {
    this.id = id
    this.title = title
    this.imageUri = imageUri
    this.address = location.address as string
    this.location = location
  }
}