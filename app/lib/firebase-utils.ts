import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Contact form submission
export const submitContactForm = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, 'contact-submissions'), {
      ...formData,
      timestamp: serverTimestamp(),
      status: 'new'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
};

// Newsletter subscription
export const subscribeToNewsletter = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, 'newsletter-subscriptions'), {
      email,
      timestamp: serverTimestamp(),
      status: 'active'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
};
