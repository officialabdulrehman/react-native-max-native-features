import { useCallback, useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { Location } from "../../../models/Location.model";
import { Place } from "../../../models/Place.model";
import { Button } from "../../UI/Button/Button";
import { ImagePicker } from "../ImagePicker/ImagePicker";
import { LocationPicker } from "../LocationPicker/LocationPicker";
import { styles } from "./PlaceForm.styles";

type Props = {
  onNewPlace: (place: Place) => void;
};

export const PlaceForm = (props: Props) => {
  const { onNewPlace } = props;
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>();
  const [pickedLocation, setPickedLocation] = useState<Location | null>();
  const handleTitleChange = (input: string) => {
    setTitle(input);
  };

  const handleImage = useCallback(
    (imageUri: string) => setSelectedImage(imageUri),
    []
  );
  const handleLocation = useCallback(
    (location: Location) => setPickedLocation(location),
    []
  );
  const handleSavePlace = () => {
    if (selectedImage && pickedLocation) {
      const newPlace = new Place({
        title,
        imageUri: selectedImage,
        location: {
          lat: pickedLocation?.lat,
          lng: pickedLocation?.lng,
          address: pickedLocation?.address,
        },
      });
      onNewPlace(newPlace);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleTitleChange}
          value={title}
        />
      </View>
      <ImagePicker onTakeImage={handleImage} />
      <LocationPicker onPickLocation={handleLocation} />
      <View style={styles.buttonContainer}>
        <Button onPress={handleSavePlace}>Add Place</Button>
      </View>
    </ScrollView>
  );
};
