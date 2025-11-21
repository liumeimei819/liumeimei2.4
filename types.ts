export interface Pet {
  id: string;
  name: string;
  breed: string;
  gender: 'male' | 'female';
  age: string;
  distance: string;
  tags: string[];
  image: string;
  description: string;
  shelter: {
    name: string;
    avatar: string;
    rating: number;
  };
  attributes: {
    vaccinated: boolean;
    neutered: boolean;
    dewormed: boolean;
  };
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  stats: {
    likes: number;
    following: number;
    followers: number;
    loveValue: number;
  };
}

export interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  content: string;
  images: string[];
  time: string;
  location: string;
  likes: number;
  comments: number;
}

export type ViewState = 'splash' | 'onboarding' | 'home' | 'detail' | 'community' | 'profile' | 'post-detail';