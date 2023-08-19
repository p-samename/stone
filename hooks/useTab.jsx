import { useCallback, useEffect, useState } from 'react';

export const useTab = (initialIdx) => {
  const [currentIdx, setCurrentIdx] = useState(initialIdx);

  const onChangeIdx = useCallback((idx) => {
    setCurrentIdx(idx);
  }, []);

  return {
    currentIdx,
    onChangeIdx,
  };
};
