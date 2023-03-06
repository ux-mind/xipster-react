import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { Homepage, TestPage } from '../pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="test-page" element={<TestPage />} />
    </>,
  )
);

export default router;
