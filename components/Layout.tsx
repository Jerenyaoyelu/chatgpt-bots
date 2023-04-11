import { Nav } from "./Nav"

export const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Nav className="fixed top-0 left-0" />
      <main className="pt-20 min-h-screen">
        {children}
      </main>
    </>
  )
}