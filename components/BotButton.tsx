import { BotItem } from "@/routes/constant";
import Image from "next/image";

interface BtnProp {
  onClick?: (id: string) => void;
}

export const BotButton: React.FC<BtnProp & BotItem> = ({ icon, id, onClick, text, desc }) => {
  return (
    <div
      className="cursor-pointer p-6 flex items-center justify-center rounded-lg border-2 transition-shadow duration-200 hover:shadow-lg border-gray-400 hover:border-blue-600"
      onClick={() => {
        onClick?.(id);
      }}>
      <Image alt='icon' src={icon} width={48} height={48}></Image>
      <div className="flex flex-col justify-center ml-4">
        <label className="text-xl font-bold text-black mb-2">{text}</label>
        <span className="text-gray-400">{desc}</span>
      </div>
    </div>
  )
}