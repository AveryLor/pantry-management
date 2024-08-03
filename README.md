# Pantry Management Application

A pantry management application built with Next.js, TypeScript, Tailwind CSS, Material UI, and Firebase. This application allows users to manage their pantry items efficiently with functionalities to add, update, delete, and search items.

## Features

- **Add, Update, and Delete Items:** Manage pantry items with ease.
- **Search and Filter:** Quickly find items using search or filter functionalities.
- **Responsive Design:** A user-friendly and responsive frontend using Tailwind CSS and Material UI.
- **Firebase Integration:** Backend storage and management using Firebase.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for server-side rendering and static site generation.
- [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript that adds static typing.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
- [Material UI](https://mui.com/): A popular React UI framework with pre-built components.
- [Firebase](https://firebase.google.com/): A platform for building and managing web and mobile apps with cloud services.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/pantry-management.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd pantry-management
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    Create a `.env.local` file in the root directory and add your Firebase configuration:

    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id
    ```

5. **Run the development server:**

    ```bash
    npm run dev
    ```