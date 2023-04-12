import dynamic from "next/dynamic";
import { Layout } from '@/components/Layout'

const Home = dynamic(() => import('@/routes/Home'));

const MyHome = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default MyHome;