import { openDatabase } from "expo-sqlite"
import { Place } from "../models/Place.model"

const database = openDatabase("places.db")

export const init = () => {
  return new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        )`,
        [],
        () => { resolve(null) },
        (_, error) => {
          reject(error)
          return false
        }
      )
    })
  })
}

export const insertPlace = (place: Place) => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lng,
        ],
        () => { resolve(null) },
        (_, error) => {
          reject(error)
          return false
        }
      );
    });
  });

  return promise;
}

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM places',
        [],
        (_, result) => {
          const places = [];

          for (const dp of result.rows._array) {
            places.push(
              new Place(
                {
                  id: dp.id,
                  title: dp.title,
                  imageUri: dp.imageUri,
                  location: {
                    address: dp.address,
                    lat: dp.lat,
                    lng: dp.lng,
                  },
                }
              )
            );
          }
          resolve(places);
        },
        (_, error) => {
          reject(error)
          return false
        }
      );
    });
  });

  return promise;
}

export function fetchPlaceDetails(id: string) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM places WHERE id = ?',
        [id],
        (_, result) => {
          const dbPlace = result.rows._array[0];
          const place = new Place(
            {
              id: dbPlace.id,
              title: dbPlace.title,
              imageUri: dbPlace.imageUri,
              location: { lat: dbPlace.lat, lng: dbPlace.lng, address: dbPlace.address },
            }
          );
          resolve(place);
        },
        (_, error) => {
          reject(error)
          return false
        }
      );
    });
  });

  return promise;
}