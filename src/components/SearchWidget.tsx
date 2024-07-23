// components/SearchWidget.tsx

import { useEffect } from 'react';

const SearchWidget = () => {
  useEffect(() => {
    // Dynamically load the widget script
    const script = document.createElement('script');
    script.src = 'https://cloud.google.com/ai/gen-app-builder/client?hl=en_US';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-96 px-6">
      {/* Widget container with full width */}
      <div style={{ width: '100%' }}>
        {/* Search widget element */}
        <gen-search-widget
          configId="6e352f24-6e03-4ee2-9c0e-163c9c08be1f"
          triggerId="searchWidgetTrigger"
          style={{ width: '50%' }} // Ensure widget width is 100% of container
        ></gen-search-widget>
      </div>

      {/* Element that opens the widget */}
      <input
        placeholder="AI Asistant."
        id="searchWidgetTrigger"
        className="w-full mt-2 p-2 border border-gray-300 rounded" // Tailwind classes for styling
      />
    </div>
  );
};

export default SearchWidget;
