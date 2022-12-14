import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { ImagePicker } from "../ImagePicker/ImagePicker";
import { styles } from "./PlaceForm.styles";

type Props = {};

export const PlaceForm = (props: Props) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (input: string) => {
    setTitle(input);
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
      <ImagePicker />
    </ScrollView>
  );
};
