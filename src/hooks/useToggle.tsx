import { useState, useCallback } from 'react';

export type HookTypes = {
  open: boolean;
  handleOpen: (e: React.MouseEvent) => void;
};

const useToggle = (): HookTypes => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(
    (e: React.MouseEvent) => {
      setOpen(!open);
      e.stopPropagation();
    },
    [open],
  );

  return { open, handleOpen };
};

export default useToggle;
