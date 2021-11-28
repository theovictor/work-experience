import Body from './Body';
import Footer from './Footer';
import { MainNavbar } from '../components/Navbar'

export default function Main({children}) {
  return (
    <>
      <MainNavbar />
      <Body children={children}/>
      <Footer/>
    </>
  )
}