import styles from './styles.module.scss';
import Navbar from '../../components/Navbar';

export default function Header() {
  return (
    <>
      <header className="bg-gradient-dark">
        <div className={"align-items-center d-flex p-0"+styles.headerContent}>
          <Navbar />
        </div>
      </header>
    </>
  );
}