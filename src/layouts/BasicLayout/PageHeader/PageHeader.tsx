import React from 'react';
import cs from 'classnames';
import s from './style.module.scss';

function PageHeader() {
  return (
    <div className={cs(s.pageHeader, 'flex justify-center items-center')}>
      <div
        className={cs(
          s.pageHeaderContent,
          'flex justify-between items-center text-white'
        )}
      >
        <div className={cs(s.pageHeaderLeft, 'flex items-center')}>
          <div className={cs(s.logo, 'ml-2 flex items-center just')}>
            博客小站
          </div>
          <div className={cs(s.search)}>
            <input />
            <button className="search-btn" id="" type="button">
              <i className="fa fa-search" />
            </button>
          </div>
        </div>
        <div className={cs(s.pageHeaderRight, 'flex items-center')}>
          <div className={cs(s.links, 'mr-3')}>
            <ul className="flex justify-between ">
              <li className="ml-4">
                <i className="fa fa-home" />
                <span className="ml-2">首页</span>
              </li>
              <li className="ml-4">
                <i className="fa fa-rss" />
                <span className="ml-2">归档</span>
              </li>
              <li className="ml-4">
                <i className="fa fa-tag" />
                <span className="ml-2">标签</span>
              </li>
              <li className="ml-4">
                <i className="fa fa-tag" />
                <span className="ml-2">分类</span>
              </li>
              <li className="ml-4">
                <i className="fa fa-tag" />
                <span className="ml-2">测试</span>
              </li>
              <li className="ml-4">
                <i className="fa fa-tag" />
                <span className="ml-2">关于</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PageHeader;
