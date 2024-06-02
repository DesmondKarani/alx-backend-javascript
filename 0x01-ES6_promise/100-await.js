import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser(uploadPhotoFunc = uploadPhoto, createUserFunc = createUser) {
  try {
    // Call uploadPhoto asynchronously and wait for the response
    const photoResponse = await uploadPhotoFunc();

    // Call createUser asynchronously and wait for the response
    const userResponse = await createUserFunc();

    // Return object with successful responses
    return { photo: photoResponse, user: userResponse };
  } catch (error) {
    // Handle errors from either function
    console.error('Error uploading user:', error);
    // Return empty object on failure
    return { photo: null, user: null };
  }
}

// Export the asyncUploadUser function for use in other modules
export default asyncUploadUser;
