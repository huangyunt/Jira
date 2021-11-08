import { useState, useEffect } from "react";
export const isTrue = (value) => (value === 0 ? true : value);
export const cleanObject = (obj) => {
  const res = {};
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (isTrue(val)) {
      res[key] = val;
    }
  });
  return res;
};
export const useMount = (callback) => {
  // eslint-disable-next-line
  useEffect(callback, []);
};
export const debounce = function (callback, delay) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    } else {
      timer = setTimeout(() => {
        callback();
      }, delay);
    }
  };
};
export const useDebounce = (value, delay) => {
  const [debouncdValue, setDebouncdValue] = useState(value);
  useEffect(() => {
    // 每次value变化，设置定时器
    const timeout = setTimeout(() => setDebouncdValue(value), delay);
    // 每次副效应函数重新执行之前，上一次副效应返回的函数也会执行一次，用来清理上一次渲染的副效应。
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);
  return debouncdValue;
};
