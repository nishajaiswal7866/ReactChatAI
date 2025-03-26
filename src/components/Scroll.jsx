import { useEffect, useRef } from 'react';

function Scroll({ messages }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom whenever messages change
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-[500px] overflow-y-auto p-4 border border-gray-700 rounded-md">
      {messages.map((msg, index) => (
        <div key={index} className="mb-2 text-sm text-white">
          {msg}
        </div>
      ))}

      {/* This invisible element scrolls into view */}
      <div ref={bottomRef} />
    </div>
  );
}

export default Scroll;