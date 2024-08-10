// api/login/route.js
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Implement your user authentication logic here
    const isValidUser = email === 'test@example.com' && password === 'password123';

    if (isValidUser) {
      // Return a success response
      return NextResponse.json({ message: 'Login successful.' }, { status: 200 });
    } else {
      // Return an error response if the login failed
      return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred during login.' }, { status: 500 });
  }
}
