import React, { useState } from "react";

interface Status {
  message: string;
  color: string;
}
export const StatusIndicator: React.FC<{ status: Status }> = ({ status }) => {
  return (
    <div>
      <div
        style={{
          display: "inline-block",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          backgroundColor: status.color,
          marginRight: "10px",
        }}
      />
      <span style={{ color: status.color }}>{status.message}</span>
    </div>
  );
};

interface UseStatusIndicator {
  status: Status;
  setStatusMessage: (statusMessage: string, statusType: "good" | "bad") => void;
  resetStatus: () => void;
}

const useStatusIndicator = (): UseStatusIndicator => {
  const initialStatus: Status = { message: "", color: "" };
  const [status, setStatus] = useState<Status>(initialStatus);

  const setStatusMessage = (
    statusMessage: string,
    statusType: "good" | "bad"
  ) => {
    // set the status of the component here
    switch (statusType) {
      case "good":
        setStatus({ message: statusMessage, color: "green" });
        break;
      case "bad":
        setStatus({ message: statusMessage, color: "red" });
        break;
      default:
        setStatus({ message: statusMessage, color: "black" });
    }
  };

  const resetStatus = () => {
    // reset the status to initial
    setStatus(initialStatus);
  };

  return { status, setStatusMessage, resetStatus };
};

export default useStatusIndicator;
