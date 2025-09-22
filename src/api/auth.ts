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
