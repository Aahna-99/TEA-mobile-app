import { MMKV } from 'react-native-mmkv';

// Initialize MMKV storage
const storage = new MMKV();

// Type for supported storage value types
type StorageValue = string | number | boolean | object;

// Set a value in storage
export const setStorageItem = (key: string, value: StorageValue): void => {
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    storage.set(key, value);
  } else if (typeof value === 'object' && value !== null) {
    storage.set(key, JSON.stringify(value));
  } else {
    throw new Error('Unsupported value type');
  }
};

// Get a value from storage
export const getStorageItem = (key: string) => {
  const stringValue = storage.getString(key);
  if (stringValue !== undefined) {
    try {
      return JSON.parse(stringValue);
    } catch {
      return stringValue;
    }
  }
  
  const numberValue = storage.getNumber(key);
  if (numberValue !== undefined) {
    return numberValue;
  }

  const booleanValue = storage.getBoolean(key);
  if (booleanValue !== undefined) {
    return booleanValue;
  }

  return null;
};

// Delete a value from storage
export const deleteStorageItem = (key: string): void => {
  storage.delete(key);
};

// Clear all values from storage
export const clearStorage = (): void => {
  storage.clearAll();
};