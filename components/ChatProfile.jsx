import React from "react";
import { FavoriteIcon } from "./common/Icons";

const ChatProfile = ({ data }) => {
  return (
    <>
      <div className={`profile-wrapper`}>
        {data.isFavorite && (
          <>
            <FavoriteIcon />
          </>
        )}
        {data.isOnline && (
          <>
            <div className="isLive"></div>
          </>
        )}
        <img src={data.profile} alt="profile picture" />
      </div>
    </>
  );
};

export default ChatProfile;
