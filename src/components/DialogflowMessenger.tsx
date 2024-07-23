import React, { useEffect } from "react";

export const DialogflowMessenger: React.FC = () => {
  useEffect(() => {
    // Ensure the script is loaded before using df-messenger
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/df-messenger/prod/v1/df-messenger.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <df-messenger
        oauth-client-id="707176559152-7q7bg2etufktsh99oa2sscekbh1oblaj.apps.googleusercontent.com"
        project-id="our-rock-430014-e0"
        agent-id="e9fe179e-b07e-48dc-978b-835635700fe3"
        language-code="en"
        max-query-length="-1"
        style={{
          zIndex: 999,
          position: "fixed",
          "--df-messenger-font-color": "#000",
          "--df-messenger-font-family": "Google Sans",
          "--df-messenger-chat-background": "#f3f6fc",
          "--df-messenger-message-user-background": "#d3e3fd",
          "--df-messenger-message-bot-background": "#fff",
          bottom: 0,
          right: 0,
          top: 0,
          width: "50%",
        }}
      >
        <df-messenger-chat chat-title="SmartContractAuditAgent" />
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
