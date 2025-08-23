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
    return { success: false, error: error.message };
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
    return { success: false, error: error.message };
  }
};
