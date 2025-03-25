import React from 'react';
import { Maximize2, PenLine } from 'lucide-react';

const CodeEditor = () => {
  // Sample code that mimics the code in the image
  const sampleCode = [
    { 
      lineNumber: 1, 
      content: [
        { text: 'function ', type: 'keyword' },
        { text: 'calculateTotal', type: 'function' },
        { text: '(items) {', type: 'normal' }
      ]
    },
    { 
      lineNumber: 2, 
      content: [
        { text: 'let ', type: 'keyword' },
        { text: 'total = 0;', type: 'normal' }
      ]
    },
    { 
      lineNumber: 3, 
      content: [
        { text: '// ', type: 'comment' },
        { text: 'Calculate sum of items', type: 'comment' }
      ]
    },
    { 
      lineNumber: 4, 
      content: [
        { text: 'for ', type: 'keyword' },
        { text: '(', type: 'normal' },
        { text: 'let ', type: 'keyword' },
        { text: 'item of items) {', type: 'normal' }
      ]
    },
    { 
      lineNumber: 5, 
      content: [
        { text: '  total += item.price;', type: 'normal' }
      ]
    },
    { 
      lineNumber: 6, 
      content: [
        { text: '}', type: 'normal' }
      ]
    },
    { 
      lineNumber: 7, 
      content: [
        { text: 'return ', type: 'keyword' },
        { text: 'total;', type: 'normal' }
      ]
    },
    { 
      lineNumber: 8, 
      content: [
        { text: '}', type: 'normal' }
      ]
    }
  ];

  const getTypeStyle = (type: string) => {
    switch(type) {
      case 'keyword': return 'text-pink-500';
      case 'function': return 'text-blue-400';
      case 'comment': return 'text-green-400';
      default: return 'text-gray-300';
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* File header */}
      <div className="flex items-center px-3 py-2 text-xs border-b border-gray-800">
        <div className="flex items-center">
          <div className="h-2 w-2 rounded-full bg-green-400 mr-2"></div>
          <span className="text-gray-300">main.js</span>
        </div>
        <div className="ml-auto">
          <button className="text-gray-400 hover:text-white">
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {/* Code area */}
      <div className="flex-1 overflow-auto bg-black font-mono text-sm">
        <pre className="p-0 m-0 leading-relaxed">
          {sampleCode.map((line) => (
            <div key={line.lineNumber} className="flex hover:bg-gray-900">
              {/* Line number */}
              <div className="text-right pr-4 w-12 select-none text-gray-500 flex-shrink-0">
                {line.lineNumber}
              </div>
              
              {/* Line content */}
              <div className="flex">
                {line.content.map((segment, i) => (
                  <span key={i} className={getTypeStyle(segment.type)}>
                    {segment.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </pre>
      </div>
      
      {/* Bottom toolbar */}
      <div className="flex p-2 border-t border-gray-800">
        <button className="bg-pink-600 hover:bg-pink-700 text-white text-xs px-3 py-1 rounded-md flex items-center">
          <PenLine className="h-3 w-3 mr-1" />
          Request Fix
        </button>
      </div>
    </div>
  );
};

export default CodeEditor; 