import React from "react";

export const DialogGetStartedflowMessenger: React.FC = () => {
  return (
    <>
      <df-messenger
        project-id="learninghub-430314"
        agent-id="ab3f8d80-6ab5-438e-a420-1084dd8d10ac"
        language-code="en"
        max-query-length="-1"
        style={{
          zIndex: 0,
          position: "fixed",
          "--df-messenger-font-color": "#000",
          "--df-messenger-font-family": "Google Sans",
          "--df-messenger-chat-background": "#ffff",
          "--df-messenger-message-user-background": "#d3e3fd",
          "--df-messenger-message-bot-background": "#fff",
          bottom: 0,
          right: 0,
          top: 0,
          width: "50%",
        }}
      >
        <df-messenger-chat chat-title="General Assistance"></df-messenger-chat>
      </df-messenger>
      <style jsx>{`
        df-messenger {
          z-index: 999;
          position: fixed;
          bottom: 0;
          right: 0;
          top: 0;
          width: 350px;
        }
      `}</style>
    </>
  );
};
