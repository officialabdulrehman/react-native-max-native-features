import { GOOGLE_API_KEY } from "../config/env"

export const getMapPreview = (lat: number, lng: number) => {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=300x400&maptype=roadmap
  &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}` //&signature=YOUR_SIGNATURE
  return imagePreviewURL
}