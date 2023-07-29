import { Footer, HeadOption, Navbar } from '@components/index';

export const Layout = ({ children, additionalClass, headOption, nav }) => {
  return (
    <>
      <div className={`${additionalClass}`}>
        <HeadOption {...headOption?.props} />
        {children}
        <Footer />
      </div>
    </>
  );
};
