import React from "react";

const MessageInfo = ({ data }) => {
  return (
    <div className="min-w-[80px] flex justify-end">
      {data.isSeen ? (
        <>
          <div className="flex items-center">
            <svg
              width="22"
              height="15"
              viewBox="0 0 22 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9365 3.07831L5.01483 13L0.146484 8.13167L1.0398 7.23835L5.01483 11.2134L14.0432 2.185L14.9365 3.07831Z"
                fill="#00FF53"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.8049 2.89332L9.88324 12.815L5.01489 7.94667L5.90821 7.05336L9.88324 11.0284L18.9116 2L19.8049 2.89332Z"
                fill="#00FF53"
              />
              <path
                d="M20.1585 3.24687L20.512 2.89332L20.1585 2.53976L19.2652 1.64645L18.9116 1.29289L18.5581 1.64645L9.88324 10.3213L6.26176 6.6998L5.90821 6.34625L5.55465 6.6998L4.66134 7.59312L4.30779 7.94667L4.66134 8.30023L9.52968 13.1686L9.88324 13.5221L10.2368 13.1686L20.1585 3.24687Z"
                stroke="white"
                strokeOpacity="0.74"
              />
            </svg>
            <span className="text-sm"> {data.lastMessageDateTime} </span>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2"> {data.lastMessageDateTime} </span>
            <span className="pendingToSeen"> {data.pendingToSeen} </span>
          </div>
        </>
      )}
    </div>
  );
};

export default MessageInfo;
