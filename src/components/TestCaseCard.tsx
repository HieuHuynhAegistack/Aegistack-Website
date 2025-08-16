import React, { useState } from 'react';
import { MoreVertical, Edit, Trash2, Copy, Play } from 'lucide-react';
import type { TestCase } from '../types';

interface TestCaseCardProps {
  testCase: TestCase;
  onEdit?: () => void;
  onDelete?: () => void;
  onDuplicate?: () => void;
  onRun?: () => void;
}

export const TestCaseCard: React.FC<TestCaseCardProps> = ({ 
  testCase, 
  onEdit, 
  onDelete, 
  onDuplicate, 
  onRun 
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'deprecated': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'auto' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800';
  };

  return (
    <div className="card p-6 hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="font-semibold text-lg text-gray-900">{testCase.title}</h3>
            <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getTypeColor(testCase.type)}`}>
              {testCase.type}
            </span>
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getPriorityColor(testCase.priority)}`}>
              {testCase.priority}
            </span>
            <span className={`px-2 py-1 rounded-lg text-xs font-medium ${getStatusColor(testCase.status)}`}>
              {testCase.status}
            </span>
          </div>
        </div>
        
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <MoreVertical className="w-4 h-4 text-gray-500" />
          </button>
          
          {showMenu && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-10">
              <button
                onClick={() => { onRun?.(); setShowMenu(false); }}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
              >
                <Play className="w-4 h-4" />
                <span>Run Test</span>
              </button>
              <button
                onClick={() => { onEdit?.(); setShowMenu(false); }}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
              >
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => { onDuplicate?.(); setShowMenu(false); }}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
              >
                <Copy className="w-4 h-4" />
                <span>Duplicate</span>
              </button>
              <hr className="my-2" />
              <button
                onClick={() => { onDelete?.(); setShowMenu(false); }}
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">
        {testCase.description}
      </p>

      {testCase.steps && testCase.steps.length > 0 && (
        <div className="bg-gray-50 rounded-xl p-4">
          <h4 className="font-medium text-gray-900 mb-2">Test Steps</h4>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
            {testCase.steps.slice(0, 3).map((step, index) => (
              <li key={index}>{step}</li>
            ))}
            {testCase.steps.length > 3 && (
              <li className="text-blue-600 font-medium">
                +{testCase.steps.length - 3} more steps...
              </li>
            )}
          </ol>
        </div>
      )}
    </div>
  );
};