import { useEffect } from 'react';

const SearchWidget: React.FC = () => {
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
    <div className="w-52 px-6 z-50"> {/* Tailwind class for width and z-index */}
      {/* Widget container */}
      <div className="w-full">
        {/* Search widget element */}
        <gen-search-widget
          configId="fb33f5af-5a41-463d-b158-1b51a425dd5c"
          triggerId="searchWidgetTrigger"
          style={{ width: '200px' }} // Set width to 200px
        ></gen-search-widget>
      </div>

      {/* Element that opens the widget */}
      <input
        placeholder="AELF Search"
        id="searchWidgetTrigger"
        className="w-full mt-2 p-2 border border-gray-300 rounded" // Tailwind classes for styling
      />
    </div>
  );
};

export default SearchWidget;
