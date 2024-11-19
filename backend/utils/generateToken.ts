import jwt from 'jsonwebtoken';
import { Response, CookieOptions } from 'express';

// Extend the Response interface to include the correctly typed cookie method
interface ResponseWithCookie extends Response {
  cookie(name: string, value: string, options?: CookieOptions): this;
  cookie(name: string, value: any, options?: CookieOptions): this;
}

const generateToken = (res: ResponseWithCookie, userId: string): void => {
  try {
    // Generate the JWT token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
      expiresIn: '30d',
    });

    // Set the JWT as a cookie
    res.cookie('jwt', token, {
      httpOnly: true,  // Ensure the cookie is only accessible via HTTP requests
      secure: process.env.NODE_ENV === 'production', // Set secure cookies in production
      sameSite: 'strict',  // Prevent CSRF attacks
      maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expiration time (30 days)
    });
  } catch (error) {
    console.error('Error generating token or setting cookie:', error);
    throw new Error('Token generation failed');
  }
};

export default generateToken;
