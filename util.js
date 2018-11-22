import { AsyncStorage } from 'react-native';

const AUTH_TOKEN = 'AUTH_TOKEN';

export const getToken = async () => {
  const token = await AsyncStorage.getItem(AUTH_TOKEN);
  return token;
};

export const saveToken = (newToken) => {
  return AsyncStorage.setItem(AUTH_TOKEN, newToken);
};

export const signOut = () => {
  token = undefined;
  return AsyncStorage.removeItem(AUTH_TOKEN);
};
