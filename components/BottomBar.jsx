import React from "react";
import {
  AccountIcon,
  CallIcons,
  ChatIcon,
  MoreIcon,
  PremiumIcon,
} from "./common/Icons";

const BottomBar = () => {
  return (
    <div className="flex px-3 bottom-bar items-center justify-between">
      <AccountIcon />
      <CallIcons />
      <ChatIcon />
      <PremiumIcon />
      <MoreIcon />
    </div>
  );
};

export default BottomBar;
