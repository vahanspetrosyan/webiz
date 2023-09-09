import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainLayout from './components/MainLayout/MainLayout';
import NotFound from './components/NotFound/NotFound';
import Home from './modules/Home/Home';
import Posts from './modules/Posts/Posts';
import './assets/css/index.scss';

function App (): JSX.Element {
  return (
        <HelmetProvider>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            </Helmet>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/posts/:id" element={<Posts/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
  );
}

export default App;
