import { Ionicons } from "@expo/vector-icons";
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { Button } from "../../UI/Button/Button";
import { styles } from "./ImagePicker.styles";

type Props = {};

export const ImagePicker = (props: Props) => {
  const [image, setImage] = useState<string>();
  const [cameraPermissionsInfo, requestCameraPermission] =
    useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionsInfo?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestCameraPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionsInfo?.status === PermissionStatus.DENIED) {
      const permissionResponse = await requestCameraPermission();
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return permissionResponse.granted;
    }
    return true;
  };

  const handleTakeImage = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [3, 4],
      quality: 0.5,
    });
    if (!image.canceled) {
      setImage(image.assets[0].uri);
    }
  };

  let imagePreview = <Text>No image taken yet</Text>;
  if (image) {
    imagePreview = <Image source={{ uri: image }} />;
  }

  const icon: string = (<Ionicons name="camera" size={24} />) as any;

  return (
    <View>
      <View style={styles.previewImage}>{imagePreview}</View>
      <Button onPress={handleTakeImage}>{icon}</Button>
    </View>
  );
};
