export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export interface TestCase {
  id: string;
  title: string;
  type: 'manual' | 'auto';
  priority: 'low' | 'medium' | 'high' | 'critical';
  status: 'draft' | 'active' | 'deprecated';
  description: string;
  steps?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  banner?: string;
  members: ProjectMember[];
  createdAt: string;
}

export interface ProjectMember {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'member' | 'viewer';
  avatar?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'review' | 'done';
  priority: 'low' | 'medium' | 'high' | 'critical';
  assignee?: string;
  reporter: string;
  epicId?: string;
  createdAt: string;
}