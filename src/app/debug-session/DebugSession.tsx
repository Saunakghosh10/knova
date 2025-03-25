import React from 'react';
import {
  CodeEditor,
  VideoStream,
  ChatInterface,
  IssueTracker,
  QuickNotes,
  SessionHeader,
  Sidebar
} from './components';

const DebugSession = () => {
  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <SessionHeader />
        <div className="flex flex-1 overflow-hidden">
          {/* Left panel - Code editor */}
          <div className="w-1/2 border-r border-gray-800 flex flex-col">
            <CodeEditor />
          </div>
          
          {/* Right panel - Video, Chat, and Tools */}
          <div className="w-1/2 flex flex-col">
            <div className="h-1/2 border-b border-gray-800">
              <VideoStream />
            </div>
            <div className="h-1/2 flex">
              <div className="w-3/4 border-r border-gray-800">
                <ChatInterface />
              </div>
              <div className="w-1/4 flex flex-col">
                <IssueTracker />
                <QuickNotes />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebugSession; 