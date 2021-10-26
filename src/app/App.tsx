import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

import RoutesLoader from 'components/RoutesLoader';
import routes from './routes';

import { AppHeader, AppLogo, Navigation, AppContainer } from './styles';

const currentUser = createSelector(
  (state: Record<string, any>) => state.auth,
  (auth) => auth?.currentUser,
);

const App: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(currentUser);

  const handleLogoClick = () => {
    history.push({
      pathname: '/',
    });
  };

  return (
    <>
      <AppHeader justify={'space-between'} alignItems={'center'}>
        <AppLogo onClick={handleLogoClick} variant={'h4'} fontWeight={'normal'}>
          httpie
        </AppLogo>
        {/* <Navigation gap={2} margin={[0.5, 2, 0, 0]}>
          <a href={'/'}>Home</a>
        </Navigation> */}
      </AppHeader>
      <AppContainer>
        <RoutesLoader routes={routes} />
      </AppContainer>
    </>
  );
};

export default App;
