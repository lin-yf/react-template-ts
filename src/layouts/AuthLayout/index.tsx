import React from 'react';
import { connect } from 'react-redux';
import cs from 'classnames';

import { Outlet } from 'react-router';
import s from './style.module.scss';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

const AuthLayout = () => {
  return (
    <div className={cs(s.authLayout, 'flex flex-col items-center')}>
      <div className={cs(s.pageContent, 'flex')}>
        <div className={s.layoutContentContainer}>
          <div className={cs(s.layoutContent, 'flex between')}>
            <div className={cs('flex between')}>
              <div className="flex-auto">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connector(AuthLayout);
