import React from 'react';
import cs from 'classnames';
import s from './style.module.scss';

function PageSideBar() {
  return (
    <div className={cs(s.pageSideBar)}>
      <div className={cs(s.pageSideBarCard, 'flex justify-center flex-col')}>
        <div className={cs(s.user)}>
          <div className={cs(s.profile)}>
            <img src="https://false-l.github.io/images/avatar.gif" alt="" />
          </div>
          <h1 className={cs(s.username)}>不喝咖啡</h1>
        </div>
        <div className={cs(s.nav)} id="side-nav">
          <ul>
            <li className="flex items-center">
              <a href="/">
                <i className="fa fa-home" /> 首页
              </a>
            </li>
            <li className="flex items-center">
              <a href="/archives">
                <i className="fa fa-cubes" /> 归档
              </a>
            </li>
            <li className="flex items-center">
              <a href="/tags">
                <i className="fa fa-tags" /> 标签
              </a>
            </li>
            <li className="flex items-center">
              <a href="/categories">
                <i className="fa fa-window-restore" /> 分类
              </a>
            </li>
            <li className="flex items-center">
              <a href="/">
                <i className="fa fa-compass" /> 实验室
              </a>
            </li>
            <li className="flex items-center">
              <a href="/post/readme">
                <i className="fa fa-book" /> 关于
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={cs(s.setting, 'mt-4 flex justify-center flex-col')}>
        <ul className={cs('flex justify-between')}>
          <li className="flex items-center flex-col">
            <i className="fa fa-cog fa-fw" />
            <p>设置</p>
          </li>
          <li className="flex items-center flex-col">
            <i className="fa fa-book" />
            <p>设置</p>
          </li>
          <li className="flex items-center flex-col">
            <i className="fa fa-rss" />
            <p>订阅</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default PageSideBar;
