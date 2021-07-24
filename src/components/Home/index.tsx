import React from 'react';
import cs from 'classnames';
import s from './style.module.scss';

export default function Home() {
  return (
    <div className={cs(s.home, 'none-scroll')}>
      <div className={cs(s.homeContent, 'card')}>
        <div className={cs(s.bread)}>
          <i className="fa fa-home" /> 首页 / 正文
        </div>
        <div className="container mx-auto">
          {[1, 2, 3, 4, 6].map((item, index) => {
            return (
              <div className={s.contentCard} key={item}>
                <h2 className="post-title">本博客开始支持 TLS 1.3</h2>
                <p className="post-meta">
                  <span>posted</span>
                  <span>222</span>
                  <span>22</span>
                </p>
                <p className={s.postContent}>
                  摘要：可能由于 Apollo
                  配置中心的客户端源码一直处于更新中，导致其相关文档有些跟不上节奏，部分文档写的不规范，很容易给做对接的新手朋友造成误导。
                  比如，我在参考如下两个文档使用传统 .NET
                  客户端做接入的时候就发现了些问题。 ctripcorp/apollo -
                  .Net客户端使用指南 ctrip
                </p>
                <button
                  type="button"
                  className={cs(s.moreLink, 'cursor-pointer')}
                >
                  阅读更多 »
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={s.page}>1,2,3</div>
    </div>
  );
}
