import React from 'react';
import { X, Check } from 'lucide-react';
import type { Feature } from '../types';

interface FeatureModalProps {
  feature: Feature;
  onClose: () => void;
}

export const FeatureModal: React.FC<FeatureModalProps> = ({ feature, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-bold text-gray-900">
              {feature.title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            {feature.description}
          </p>

          {feature.details && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-gray-900 mb-4">
                Key Features
              </h3>
              <ul className="space-y-3">
                {feature.details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-100">
            <button className="btn-primary w-full">
              Start Using This Feature
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};