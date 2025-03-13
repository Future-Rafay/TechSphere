import { client } from '@/sanity/lib/client';
import bcrypt from 'bcryptjs';

export interface SanityUser {
  _id: string;
  name: string;
  email: string;
  hashedPassword: string;
  image?: string;
  role?: string;
  isActive?: boolean;
}

export async function getUserByEmail(email: string): Promise<SanityUser | null> {
  const user = await client.fetch<SanityUser | null>(
    `*[_type == "user" && email == $email][0]`,
    { email }
  );
  return user;
}

export async function verifyPassword(hashedPassword: string, password: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export async function createUser(userData: {
  name: string;
  email: string;
  password: string;
  image?: string;
}): Promise<SanityUser> {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  
  const newUser = await client.create({
    _type: 'user',
    name: userData.name,
    email: userData.email,
    hashedPassword,
    image: userData.image,
    role: 'customer',
    isActive: true,
    createdAt: new Date().toISOString(),
  });

  return newUser;
}

export async function updateLastLogin(userId: string) {
  return client.patch(userId).set({
    lastLogin: new Date().toISOString(),
  }).commit();
} 