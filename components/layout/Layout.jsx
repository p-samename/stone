import { Footer, HeadOption, Navbar } from '@components/index';

export const Layout = ({ children, additionalClass, headOption }) => {
  return (
    <>
      <div className={`${additionalClass}`}>
        <HeadOption {...headOption?.props} />
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};
