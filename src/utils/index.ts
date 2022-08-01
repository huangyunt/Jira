import { useState, useEffect } from "react";
export const isTrue = (value: unknown) => (value === 0 ? true : !!value);
export const cleanObject = (obj: object) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    if (!isTrue(result[key])) {
      //@ts-ignore

      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  // eslint-disable-next-line
  useEffect(callback, []);
};

export const useDebounce = (deps: unknown, delay?: number): any => {
  const [debouncdValue, setDebouncdValue] = useState(deps);
  useEffect(() => {
    // 每次value变化，设置定时器
    const timeout = setTimeout(() => setDebouncdValue(deps), delay);
    // 每次副效应函数重新执行之前，上一次副效应返回的函数也会执行一次，用来清理上一次渲染的副效应。
    return () => {
      clearTimeout(timeout);
    };
  }, [deps, delay]);
  return debouncdValue;
};
