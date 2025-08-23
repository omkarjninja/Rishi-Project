# Firebase Setup Guide

## 🔥 Firebase Configuration

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or select existing project
3. Enable Google Analytics (optional)
4. Complete project setup

### 2. Enable Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location (choose closest to your users)
5. Click "Done"

### 3. Get Firebase Config
1. In Firebase Console, click the gear icon ⚙️
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click "Add app" → Web app
5. Register your app and copy the config

### 4. Environment Variables
Create a `.env.local` file in your project root with:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 5. Firestore Collections
The app will automatically create these collections:
- `contact-submissions` - Contact form submissions
- `newsletter-subscriptions` - Newsletter subscribers

### 6. Security Rules (Optional)
For production, update Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact-submissions/{document} {
      allow write: if true;  // Anyone can submit
      allow read: if false;  // Only admin can read
    }
    match /newsletter-subscriptions/{document} {
      allow write: if true;  // Anyone can subscribe
      allow read: if false;  // Only admin can read
    }
  }
}
```

## 🚀 Features Implemented

### Contact Form
- ✅ Form validation
- ✅ Firebase integration
- ✅ Success/error messages
- ✅ Loading states
- ✅ Form reset after submission

### Newsletter Subscription
- ✅ Email validation
- ✅ Firebase integration
- ✅ Success/error messages
- ✅ Loading states
- ✅ Form reset after submission

## 📱 Usage

1. **Contact Form**: Users can submit inquiries about services
2. **Newsletter**: Users can subscribe to updates
3. **Data Storage**: All submissions stored in Firebase Firestore
4. **Real-time**: Instant feedback and validation

## 🔒 Security Notes

- Environment variables are prefixed with `NEXT_PUBLIC_` (visible to client)
- For production, consider implementing server-side validation
- Firestore rules can be customized for additional security
- Consider rate limiting for form submissions

## 🛠️ Troubleshooting

- **"Firebase not initialized"**: Check environment variables
- **"Permission denied"**: Check Firestore security rules
- **"Network error"**: Verify Firebase project configuration
- **"Invalid API key"**: Ensure correct Firebase config values
