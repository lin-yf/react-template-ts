import React from 'react';
import cs from 'classnames';
import s from './style.module.scss';

function PageRightSideBar() {
  return (
    <div className={cs(s.pageRightSideBar)}>
      <div className={cs(s.toolBar, 'card flex p-1')}>
        <ul className="flex items-center justify-between">
          <li>111</li>
          <li>111</li>
          <li>111</li>
        </ul>
      </div>
      <div className={cs(s.cardHeader, 'flex justify-center items-center')}>
        11111
      </div>
      <div className={cs(s.cardHeader, 'flex justify-center items-center')}>
        11111
      </div>
    </div>
  );
}
export default PageRightSideBar;
