import React from "react";
import { BotSider } from "./BotSider";

const BotLayoutContext = React.createContext({});

export default function BotLayoutProvider({ children }: any) {
  return (
    <BotLayoutContext.Provider value={{}}>
      <div className="w-full h-screen p-6 bg-gray-400">
        <div className="shadow-bot-layout rounded w-full h-full flex">
          <BotSider />
          <div className="flex-1 bg-primary rounded-r">{children}</div>
        </div>
      </div>
    </BotLayoutContext.Provider>
  )
}

export const useBotLayoutContext = () => {
  return React.useContext(BotLayoutContext);
}

