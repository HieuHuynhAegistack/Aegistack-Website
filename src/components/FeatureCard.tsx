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
      className="p-8 transition-all duration-300 cursor-pointer card group hover:border-blue-200"
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-2xl group-hover:transition-colors" style={{ backgroundColor: '#FEF3CD' }}>
            <IconComponent className="w-6 h-6" style={{ color: '#FEBC32' }} />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="mb-2 text-xl font-semibold text-gray-900 font-heading">
            {feature.title}
          </h3>
          <p className="mb-4 leading-relaxed text-gray-600">
            {feature.description}
          </p>
          <div className="flex items-center font-medium transition-colors" style={{ color: '#FEBC32' }}>
            <span className="text-sm">Learn more</span>
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </div>
  );
};