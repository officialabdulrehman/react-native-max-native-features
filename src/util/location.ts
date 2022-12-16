import { GOOGLE_API_KEY } from "../config/env"

export const getMapPreview = (lat: number, lng: number) => {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=300x400&maptype=roadmap
  &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}` //&signature=YOUR_SIGNATURE
  return imagePreviewURL
}

export const getAddress = async (lat: number, lng: number): Promise<string> => {
  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Failed to fetch address!")
    }

    const data = await response.json()
    const address = data.results[0].formatted_address

    return address as string
  } catch (e) {
    return "mock address, street 1, 6th avenue, brooklyn, newyork, US"
  }
} 