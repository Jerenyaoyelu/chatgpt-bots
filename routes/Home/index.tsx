import { BotButton } from "@/components/BotButton";
import { useState } from "react";
import { useRouter } from "next/router";
import { BotItem, bots } from "../constant";



const Home: React.FC = () => {
  const router = useRouter();

  const [list, setList] = useState<BotItem[]>(bots)

  const handleTry = () => {
    const el = document.getElementById('what-we-have');
    el?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    })
  }

  const goToBot = (id: string) => {
    router.push(`/bots/${id}`)
  }

  return (
    <>
      <section className="w-full pt-56 pb-44 bg-walle bg-center bg-no-repeat bg-cover">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <h1 className="text-7xl font-extrabold mb-6 text-white">
              Walle X: A Group of AI bots
            </h1>
            <span className="text-2xl mb-9 font-normal text-gray-200">Each specialized in solving a small task driven by chatgpt, built with 💗</span>
          </div>
          <div onClick={handleTry} className="px-12 py-2 bg-blue-500 text-white rounded hover:opacity-80">Try it</div>
          <div className="italic text-lg text-green-400 mt-4">
            Most popular bots:
            <span onClick={() => goToBot('ielts-egb')} className="ml-2 underline cursor-pointer">IELTS-egb</span>
          </div>
        </div>
      </section>
      <section className="w-full pt-12">
        <div className="flex flex-col items-center">
          <h2 id="what-we-have" className="text-4xl font-bold mb-6">What bot we have now?</h2>
          <span className="text-xl font-normal text-gray-400">Click anyone below as you like 🚀</span>
        </div>
        <div className="px-16 py-12 flex">
          {
            list.map((item, index) => {
              return (
                <BotButton
                  desc={item.desc}
                  icon={item.icon}
                  key={index}
                  id={item.id}
                  text={item.text}
                  onClick={() => goToBot(item.id)}
                />
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Home;