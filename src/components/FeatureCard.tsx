import React from 'react';
import { 
  Users, 
  CheckSquare, 
  Zap, 
  TestTube, 
  BarChart3,
  ArrowRight 
} from 'lucide-react';
import type { Feature } from '../types';

const iconMap = {
  users: Users,
  'check-square': CheckSquare,
  zap: Zap,
  'test-tube': TestTube,
  'bar-chart': BarChart3,
};

interface FeatureCardProps {
  feature: Feature;
  onClick?: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onClick }) => {
  const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || CheckSquare;

  return (
    <div 
      className="card p-8 cursor-pointer group hover:border-blue-200 transition-all duration-300"
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
            <IconComponent className="w-6 h-6 text-blue-600" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-heading font-semibold text-xl text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {feature.description}
          </p>
          <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
            <span className="text-sm">Learn more</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};