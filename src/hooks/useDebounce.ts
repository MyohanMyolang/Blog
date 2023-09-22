"use client";

import { useEffect, useState } from "react";

type props<T> = {
  delay: number;
  value: T;
};

export default function useDebounce<T>({
  delay,
  value,
}: props<T>): [T, () => void] {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const [forceFetch, setForceFetch] = useState<() => void>(() => {});

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    setForceFetch(() => {
      return () => {
        clearTimeout(timer);
        setDebouncedValue(value);
      };
    });

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return [debouncedValue, forceFetch];
}
