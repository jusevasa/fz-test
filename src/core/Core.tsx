import { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LayoutSpinner } from '@/shared/components/Spinner/LayoutSpinner';

const Characters = lazy(() => import('../modules/characters/Characters'));

export const Core: FC = () => {
  return (
    <Suspense fallback={<LayoutSpinner />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
