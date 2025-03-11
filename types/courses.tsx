






// types/courses.ts
import { ReactNode } from 'react';

// 🛠 Tool-related interfaces
export interface Tool {
  id: string;
  icon: IconType;
  title: string;
}

export interface ToolData {
  sectionTitle: string;
  category: string;
  toolsCount: string;
  displayImage: string;
  tools: Tool[];
}

// 🎯 Highlight interface
export interface Highlight {
  number: string;
  description: string;
}

// 👨‍🏫 Instructor interface
export interface Instructor {
  name: string;
  title: string;
  image: string;
  bio: string;
  rating: number;
  totalStudents: number;
  courses: number;
}

// 📚 Module interface
export interface Module {
  id: number;
  title: string;
  description?: string;
  content: string[];
}

// 🚀 Project interface
export interface Project {
  icon: string;
  title: string;
  description: string;
  skills: string[];
}

// 🎯 Target audience interface
export interface ProgramFor {
  src: string;
  alt: string;
  text: string;
}

// 🎓 Main Course interface
export interface Course {
  _id: string;
  title: string;
  slug: string;
  rating: number;
  programBy: string;
  globalStatus?: string;
  totalRatings: number;
  startDate?: string;
  duration: string;
  hours: string;
  price: number;
  originalPrice: number;
  paymentLink: string;
  enrolledStudents: number;
  shortDescription: string;
  backgroundImage: string;
  learningOutcomes: string[];
  features: string[];
  skills: string[];
  requirements: string[];
  level: string;
  language: string;
  lastUpdated: string;
  category: string;
  module: Module[];
  highlights: Highlight[];
  certificateImage: string;
  project: Project[];
  programFor: ProgramFor[];
  toolsData: ToolData;
  status?: CourseStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

// 🆕 NewCourse type for course creation
export type NewCourse = Omit<Course, '_id' | 'createdAt' | 'updatedAt'>;

// 🔖 Enums & Utility Types
export type CourseStatus = 'draft' | 'published';
export type IconType = "TrendingUp" | "BarChart" | "Cpu";

// ✅ Course validation interface
export interface CourseValidation {
  isValid: boolean;
  errors: Partial<Record<keyof Course, string>>;
}

// 📡 API Response Interfaces
export interface CourseResponse {
  success: boolean;
  data?: Course;
  error?: string;
}

export interface CoursesResponse {
  success: boolean;
  data?: Course[];
  error?: string;
  pagination?: {
    total: number;
    page: number;
    pages: number;
  };
}
