import { Alert } from 'react-native';
import { getStorageItem, deleteStorageItem, clearStorage } from '../utils/Storage';
import { CommonActions, useNavigation } from '@react-navigation/native';

// Function to log out the user
const logOut = async () => {
  deleteStorageItem('token');
  clearStorage();

  const navigation = useNavigation();
  
  // Navigate to login screen
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [
        { name: 'Auth' },
      ],
    })
  );
  // navigation.dispatch(resetAction);
};

// Function to show an alert for session timeout
const asyncAlert = async () =>
  new Promise<void>((resolve) => {
    Alert.alert(
      'Session Timeout',
      'Your session expired. Please sign in again to continue.',
      [
        {
          text: 'OK',
          onPress: async () => {
            await logOut();
            resolve();
          },
        },
      ]
    );
  });

// Function to parse the error response
const parseErrorResponse = async (errorResponse: Response) => {
  try {
    return await errorResponse.json();
  } catch {
    return { message: 'Something Went Wrong' };
  }
};

// Error handler function
const errorHandler = async (errorResponse: Response): Promise<void> => {
  if (errorResponse.status === 401) {
    await asyncAlert();
  } else if (!errorResponse.ok) {
    const errorData = await parseErrorResponse(errorResponse);
    throw new Error(errorData.message || 'Something went wrong');
  }
};

export default errorHandler;