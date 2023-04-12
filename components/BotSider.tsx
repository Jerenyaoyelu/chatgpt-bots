import { bots } from "@/routes/constant"
import Image from "next/image"
import { useRouter } from "next/router"

export const BotSider: React.FC = () => {
  const router = useRouter();

  return (
    <div className="p-10 bg-white rounded-l flex flex-col items-center">
      <div onClick={() => {
        router.push('/');
      }} className="font-bold text-lg">Home</div>
      {
        bots.map((b, index) => {
          return (
            <div
              className="mt-8 w-10 h-10 flex justify-center items-center"
              key={index} onClick={() => {
                router.push(`/bots/${b.id}`)
              }}>
              <Image alt={b.text} src={b.icon} width={32} height={32}></Image>
            </div>
          )
        })
      }
    </div>
  )
}