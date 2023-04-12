import dynamic from "next/dynamic";

const Bots = dynamic(() => import('@/routes/Bots'));

export default Bots;