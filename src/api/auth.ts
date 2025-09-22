import { useMutation } from '@tanstack/react-query';

interface User {
  fullName: string;
  email: string;
  dateOfBirth: string;
  termsAccepted: boolean;
}

interface AdminCredentials {
  email: string;
  password: string;
}

// Simulate a POST request to the backend
const postUserData = async (userData: User) => {
  console.log('Simulating API call with user data:', userData);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve({ success: true });
      } else {
        reject(new Error('Failed to save user data'));
      }
    }, 1000);
  });
};

export const useSaveUserData = () => {
  return useMutation({ mutationFn: postUserData });
};

// Simulate a POST request to the backend for admin login
const loginAdmin = async (credentials: AdminCredentials) => {
  console.log('Simulating API call with admin credentials:', credentials);
  return new Promise<{ success: boolean; isAdmin: boolean }>((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === 'admin@example.com' && credentials.password === '123456') {
        resolve({ success: true, isAdmin: true });
      } else {
        reject(new Error('Invalid admin credentials'));
      }
    }, 1000);
  });
};

export const useAdminLogin = () => {
  return useMutation({ mutationFn: loginAdmin });
};

interface LandlordCredentials {
  email: string;
  password: string;
}

// Simulate a POST request to the backend for landlord login
const loginLandlord = async (credentials: LandlordCredentials) => {
  console.log('Simulating API call with landlord credentials:', credentials);
  return new Promise<{ success: boolean; isLandlord: boolean }>((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === 'landlord@example.com' && credentials.password === '123456') {
        resolve({ success: true, isLandlord: true });
      } else {
        reject(new Error('Invalid landlord credentials'));
      }
    }, 1000);
  });
};

export const useLandlordLogin = () => {
  return useMutation({ mutationFn: loginLandlord });
};
