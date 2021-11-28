import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import { MainNavbar } from '../components/Navbar'

export default function Main({children}) {
  return (
    <>
      <MainNavbar />
      <Header />
      <Body children={children}/>
      <Footer/>
    </>
  )
}