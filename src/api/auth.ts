import { useMutation } from '@tanstack/react-query';

interface User {
  fullName: string;
  email: string;
  dateOfBirth: string;
  termsAccepted: boolean;
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
const loginAdmin = async (credentials: any) => {
  console.log('Simulating API call with admin credentials:', credentials);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
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
