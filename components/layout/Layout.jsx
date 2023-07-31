import PropTypes from 'prop-types';
import { Footer, HeadOption } from '@components/index';

export const Layout = ({ children, headOption, footer = true }) => {
  return (
    <>
      <HeadOption {...headOption?.props} />
      {children}
      {footer ? <Footer /> : <></>}
    </>
  );
};

Layout.propTypes = {
  headOption: PropTypes.element,
  footer: PropTypes.bool,
  children: PropTypes.element,
};
