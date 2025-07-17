import ROUTERS from './utils/router';
import { Routes, Route } from 'react-router-dom';
import MasterLayout from './pages/themes/masterLayout';
import HomePage from './pages/home';
import ChampionsPage from './pages/champions';
import RegionsPage from './pages/regions'

const renderRouterUser = () => {
    const userRouters = [
        {
            path: ROUTERS.HOME,
            component: <HomePage />
        },
        {
            path: ROUTERS.CHAMPIONS,
            component: <ChampionsPage />
        },
        {
            path: ROUTERS.REGIONS,
            component: <RegionsPage />
        }
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );

}

const RouterCustom = () => {
    return renderRouterUser();
}

export default RouterCustom;