import React from "react";
import { MissedCallIcon } from "./common/Icons";

const Message = ({ data }) => {
  console.log(data);
  return (
    <div className="pl-3 flex flex-col flex-1">
      <span className="font-medium">{data.name}</span>
      {data.lastMessage.isLast === "text" && (
        <span
          className={` hide-content text-sm ${
            data.isSeen ? "font-light" : "font-semibold"
          }`}
        >
          {data.lastMessage.message}
        </span>
      )}
      {data.lastMessage.isLast === "call" && (
        <span className="font-light flex items-center text-sm">
          <MissedCallIcon />
          {data.lastMessage.message}
        </span>
      )}
    </div>
  );
};

export default Message;
