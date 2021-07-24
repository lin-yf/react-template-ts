import React, { ReactNode } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import cs from 'classnames';

import { Link } from 'react-router-dom';
import s from './style.module.scss';
import { siteRoute } from '../../../constants/routesConfig';

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface AuthLayoutProps extends ConnectedProps<typeof connector> {
  children: ReactNode;
  routerData: any;
}

const AuthLayout = (props: AuthLayoutProps) => {
  const { routerData } = props;
  const { children } = routerData;
  console.log('props', props);
  return (
    <div className={cs(s.authLayout, 'flex flex-col items-center')}>
      <div className={s.header}>
        {siteRoute.map((item) => (
          <Link
            to={item.path}
            key={item.path}
            className={cs('mr-2 text-blue-300')}
          >
            {item.name || item.path}
          </Link>
        ))}
      </div>
      <div className={cs(s.pageContent, 'flex')}>
        <div className={s.layoutContentContainer}>
          <div className={cs(s.layoutContent, 'flex between')}>
            <div className={cs('flex between')}>
              <div className="flex-auto">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connector(AuthLayout);
