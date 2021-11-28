import Body from './Body';
import Header from './Header';
import Footer from './Footer';

export default function Main({children}) {
  return (
    <>
      <Header />
      <Body children={children}/>
      <Footer/>
    </>
  )
}