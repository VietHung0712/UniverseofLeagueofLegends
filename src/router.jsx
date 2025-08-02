import ROUTERS from './utils/router';
import { Routes, Route } from 'react-router-dom';
import MasterLayout from './pages/themes/masterLayout';
import HomePage from './pages/home';
import ChampionsPage from './pages/champions';
import RegionsPage from './pages/regions';
import RegionDetail from './pages/regionDetail';
import ChampionDetail from './pages/championDetail';
import ModelPage from './pages/model';
import AltKdaPage from './pages/kda/';
import AltMythmakerPage from './pages/mythmaker';
import AltSpiritBlossomPage from './pages/spiritBlossom';

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
            component : <AltKdaPage />
        },
        {
            path: ROUTERS.SPIRITBLOSSOM,
            component : <AltSpiritBlossomPage />
        },
        {
            path: ROUTERS.MYTHMAKER,
            component : <AltMythmakerPage />
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