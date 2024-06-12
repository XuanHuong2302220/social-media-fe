import { getDownloadURL, getStorage, ref } from "firebase/storage";
import app from "./config";

const checkImage = async (image) => {
  const storage = getStorage(app);
  const storageRef = ref(storage, `images/${image.name}`);
  try {
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    if (error.code === "storage/object-not-found") {
      return false;
    } else {
      throw error;
    }
  }
};

export default checkImage;
