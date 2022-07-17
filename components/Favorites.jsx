import React from "react";
import { chatData } from "./ChatData";
import ChatProfile from "./ChatProfile";
import Message from "./Message";
import MessageInfo from "./MessageInfo";

const Favorites = () => {
  const favorite = chatData.filter((data) => data.isFavorite === true);
  return (
    <div className="">
      {favorite.map((data) => (
        <>
          <div className="py-2 cursor-pointer px-2">
            <div className="flex">
              <ChatProfile data={data} />
              <Message data={data} />
              <MessageInfo data={data} />
            </div>
          </div>
          <div className="divider"></div>
        </>
      ))}
    </div>
  );
};

export default Favorites;
