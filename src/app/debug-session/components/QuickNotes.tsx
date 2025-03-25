import React from 'react';

const QuickNotes = () => {
  return (
    <div className="p-4 flex flex-col flex-1">
      <h3 className="text-white font-medium mb-4">Quick Notes</h3>
      <div className="flex-1 flex flex-col">
        <textarea 
          className="bg-gray-800 text-white rounded border border-gray-700 p-3 text-sm flex-1 resize-none focus:outline-none focus:border-blue-500"
          placeholder="Add notes here..."
        />
        <button className="mt-3 bg-gray-700 hover:bg-gray-600 text-white text-sm py-2 rounded">
          Save Notes
        </button>
      </div>
    </div>
  );
};

export default QuickNotes; 