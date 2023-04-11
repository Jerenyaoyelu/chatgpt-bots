import dynamic from "next/dynamic";

const Home = dynamic(() => import('@/routes/Home'));

export default Home;