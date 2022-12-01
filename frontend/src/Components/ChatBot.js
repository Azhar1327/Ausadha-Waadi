import React from "react";

function chatBot() {
  return (
    <div className="chatBot">
      <iframe
        width="350"
        height="430"
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/ddc9fe90-6c5f-4fe1-8e97-8ba336c1e02d"
      ></iframe>
    </div>
  );
}

export default chatBot;
