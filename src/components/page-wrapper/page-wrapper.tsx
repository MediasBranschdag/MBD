import React, { FC } from 'react';
import './page-wrapper.css';

const PageWrapper: FC = (props) => {
  return (
    <div className="page-wrapper">
      {props.children}
    </div>
  );
}

export default PageWrapper;
