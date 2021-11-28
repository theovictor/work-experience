import MainBody from './Body';
import MainHeader from './Header';
import MainFooter from './Footer';

export default function Main({children}) {
  return (
    <>
      <MainHeader />
      <MainBody />
      <MainFooter/>
    </>
  )
}