import { FC } from 'react';

import { Spinner } from './Spinner';

interface ILayoutSpinnerProps {}

export const LayoutSpinner: FC<ILayoutSpinnerProps> = () => {
  return (
    <>
      <div
        className="w-full h-full flex justify-center items-center fixed z-10"
        data-testid="layout-spinner"
      >
        <div className="w-full h-full bg-black-100 opacity-80 blur-sm"></div>
        <Spinner style="absolute" />
      </div>
    </>
  );
};
