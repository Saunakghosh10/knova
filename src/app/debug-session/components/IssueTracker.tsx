import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const IssueTracker = () => {
  // Sample issues
  const issues = [
    { id: 1, text: 'Fix total calculation', completed: true },
    { id: 2, text: 'Debug loop iteration', completed: false },
    { id: 3, text: 'Optimize performance', completed: false }
  ];

  return (
    <div className="p-4 border-b border-gray-800">
      <h3 className="text-white font-medium mb-4">Issue Tracker</h3>
      <div className="space-y-3">
        {issues.map((issue) => (
          <div key={issue.id} className="flex items-center">
            {issue.completed ? (
              <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
            ) : (
              <Circle className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
            )}
            <span 
              className={`text-sm ${
                issue.completed ? 'text-gray-400 line-through' : 'text-white'
              }`}
            >
              {issue.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssueTracker; 