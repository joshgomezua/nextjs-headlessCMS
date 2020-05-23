import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

function Layout(props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Navbar />
      <main className='flex-1 w-full max-w-4xl p-4 mx-auto md:px-0 md:py-8'>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
