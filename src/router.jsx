import ROUTERS from './utils/router';
import { Routes, Route } from 'react-router-dom';
import MasterLayout from './pages/themes/masterLayout';
import HomePage from './pages/home';
import ChampionsPage from './pages/champions';
import RegionsPage from './pages/regions';
import RegionDetail from './pages/regionDetail';
import ChampionDetail from './pages/championDetail';
import ModelPage from './pages/model';

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
        },
        {
            path: ROUTERS.CHAMPION,
            component : <ChampionDetail />
        },
        {
            path: ROUTERS.REGION,
            component : <RegionDetail />
        },
        {
            path: ROUTERS.MODEL,
            component : <ModelPage />
        },
        {
            path: ROUTERS.EXPLORE,
            component : null
        },
        {
            path: ROUTERS.KDA,
            component : null
        },
        {
            path: ROUTERS.SPIRITBLOSSOM,
            component : null
        },
        {
            path: ROUTERS.MYTHMAKER,
            component : null
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