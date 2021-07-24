import React, { ReactNode } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import cs from 'classnames';
import PageHeader from './PageHeader/PageHeader';
import PageSideBar from './PageSidebar';
import PageRightSideBar from './PageRightSideBar';

import s from './style.module.scss';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface BasicLayoutProps extends ConnectedProps<typeof connector> {
  children: ReactNode;
}

const BasicLayout = ({ children }: BasicLayoutProps) => {
  return (
    <div className={cs(s.basicLayout, 'flex flex-col items-center')}>
      <PageHeader />
      <div className={cs(s.pageContent, 'flex')}>
        <PageSideBar />
        <div className={s.layoutContentContainer}>
          <div className={cs(s.layoutContent, 'flex between')}>
            <div className={cs('flex between')}>
              <div className="flex-auto">{children}</div>
              <PageRightSideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connector(BasicLayout);
