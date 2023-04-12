import { useRouter } from "next/router";
import { useEffect } from "react";

const BotsIndex = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/bots/ielts-egb')
  }, [])

  return (
    <></>
  )
}

export default BotsIndex;