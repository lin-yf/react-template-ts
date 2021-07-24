import React, { useState, useEffect, useRef } from 'react';
import s from '../style.module.scss';

function UseEffectDemo() {
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
    <section className={s.card}>
      <div className={s.label}>useEffect</div>
      <span>count: {count} </span>
      <span>count2: {count2}</span>
    </section>
  );
}

export default UseEffectDemo;
