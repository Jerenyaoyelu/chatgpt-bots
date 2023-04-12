import BotLayoutProvider, { useBotLayoutContext } from "@/components/BotLayoutWrapper";
import dynamic from "next/dynamic";

const IELTSEgb = dynamic(() => import('@/routes/IELTS-egb'));

export default function () {
  const value = useBotLayoutContext();
  return (
    <BotLayoutProvider>
      <IELTSEgb />
    </BotLayoutProvider>
  )
};