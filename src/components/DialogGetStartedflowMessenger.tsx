// components/DialogflowMessenger.tsx
import { useEffect } from 'react';

export const DialogGetStartedflowMessenger = () => {
  useEffect(() => {
    // Ensure the Dialogflow Messenger script is loaded
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <df-messenger
      project-id="our-rock-430014-e0"
      agent-id="d632a9b2-8f96-488d-87f4-33d29cd05014"
      language-code="en"
      max-query-length="-1"
      style={{
        zIndex: 999,
        position: 'fixed',
        '--df-messenger-font-color': '#000',
        '--df-messenger-font-family': 'Google Sans',
        '--df-messenger-chat-background': '#f3f6fc',
        '--df-messenger-message-user-background': '#d3e3fd',
        '--df-messenger-message-bot-background': '#fff',
        bottom: 0,
        right: 0,
        top: 0,
        width: '50%'
      }}
      >
      <df-messenger-chat chat-title="aelf-agent"></df-messenger-chat>
    </df-messenger>
  );
};

