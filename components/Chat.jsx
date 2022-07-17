import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import AllChat from "./AllChat";
import Favorites from "./Favorites";
import ChannelsChat from "./ChannelsChat";
import { AddMoreIcon, SearchIcon } from "./common/Icons";
import BottomBar from "./BottomBar";
const Chat = () => {
  return (
    <div className="py-2 flex flex-col message-wrapper font-poppins">
      <div className="flex px-2 justify-between items-center">
        <span className="text-xl font-semibold">Chat</span>
        <div className="flex items-center">
          <span className="mr-2 font-xl">
            <SearchIcon />
          </span>
          <span>
            <AddMoreIcon />
          </span>
        </div>
      </div>
      <div className="my-3 flex-1 flex overflow-hidden flex-col ">
        <Tab.Group>
          <div className="px-2">
            <Tab.List>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`
                  ${
                    selected
                      ? "text-primary active-tab  font-semibold "
                      : "bg-white text-grey"
                  } mr-5 text-base
                `}
                  >
                    All
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`
                  ${
                    selected
                      ? "text-primary active-tab  font-semibold "
                      : "bg-white text-grey"
                  } mr-5 text-base
                `}
                  >
                    Favorites
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`
                  ${
                    selected
                      ? "text-primary active-tab  font-semibold "
                      : "bg-white text-grey"
                  } mr-5 text-base
                `}
                  >
                    Channels
                  </button>
                )}
              </Tab>
            </Tab.List>
          </div>
          <div className="divider"></div>
          <div className="pt-3 flex-1 hide-scrollbar overflow-auto">
            <Tab.Panels>
              <Tab.Panel>
                <AllChat />
              </Tab.Panel>
              <Tab.Panel>
                <Favorites />
              </Tab.Panel>
              <Tab.Panel>
                <ChannelsChat />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
      <BottomBar />
    </div>
  );
};

export default Chat;
