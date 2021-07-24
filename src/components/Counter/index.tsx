import React, { useState, useEffect, useRef } from 'react';
import cs from 'classnames';
import s from './style.module.scss';

function Counter() {
  const [count, setcount] = useState<number>(0);
  const [count2, setcount2] = useState<number>(10);
  const didMountRef = useRef(false);

  useEffect(() => {
    console.log('useEffect: 1');
    setcount(1);
    return () => {};
  }, []);

  useEffect(() => {
    console.log('useEffect: 2');
    setcount2(99);
    return () => {};
  }, []);

  useEffect(() => {
    if (didMountRef.current) {
      console.log('useEffect: 3', count2);
      setcount(count2);
    } else {
      didMountRef.current = true;
    }
    return () => {};
  }, [count2]);

  return (
    <div className={s.counter}>
      <div className={s.container}>
        <section className={s.card}>
          <div className={s.label}>下箭头</div>
          <a className={s.btn} href="/">
            按钮 <span className={s.tips}>转</span>
          </a>
        </section>
        <section
          className={cs(s.card, s.bg2, 'flex items-center justify-center')}
        >
          <div className="bg-white p-6">
            <div className={s.label}>useEffect</div>
            <span>count: {count} </span>
            <span>count2: {count2}</span>
          </div>
        </section>
        <section className={cs(s.card, s.bg, 'flex justify-center')}>
          <span className={s.dot} />
        </section>
        <section className={cs(s.card, s.bg3)}>
          <div className={s.wrapper}>111</div>
        </section>
        <section className={cs(s.card, s.bg4)}>
          <div className={s.wrapper}>111</div>
        </section>
        <section className={cs(s.card, s.bg5)}>
          <div className={cs(s.wrapper)}>
            <p id="error">
              E<span>r</span>ror
            </p>
            <p id="code">
              4<span>0</span>
              <span>4</span>
            </p>
          </div>
        </section>
        <section className={cs(s.card, s.bg6)} />
      </div>
    </div>
  );
}

export default Counter;
