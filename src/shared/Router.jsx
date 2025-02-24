import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Preference from '../pages/Preference';
import Layout from '../components/commons/Layout';
import ShortTerm from '../pages/ShortTerm';
import ChapDetail from '../pages/ChapDetail';
import ChatRoom from '../pages/ChatRoom';
import OnBoarding from '../pages/OnBoardingPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/onboarding' element={<OnBoarding />} />
          <Route path='/preference' element={<Preference />} />
          <Route path='/shortTerm' element={<ShortTerm />} />
          <Route path='/chapDetail' element={<ChapDetail />} />
          <Route path='/chatRoom' element={<ChatRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
