import { lazy, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { authenticationValidator } from './store/actions';
import { Spinner } from './components';
import { guestRoutes } from './routes';

// add js

// add css

function App() {
  const tokenPresent = !!useSelector(state => state.auth.authToken);
  const pathname = window.location.pathname.split('/')[1];

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authenticationValidator());
  }, []);

  const redirectHandler = () => {
    const guestRoute = guestRoutes
      .filter(item => item.redirectRoute === undefined)
      .map(item => item.path);
    return !guestRoute.includes(`/${pathname}`) && localStorage.getItem('authToken') == null ? (
      <Redirect to="/signin" />
    ) : null;
  };

  let mainContent = (
    <>
      {guestRoutes.map(
        route =>
          route.redirectRoute === undefined && (
            <Route key={route.name} path={route.path} exact={route.exact} name={route.name}>
              <route.component />
            </Route>
          ),
      )}
      {redirectHandler()}
    </>
  );
  if (tokenPresent) {
    mainContent = (
      <>
        <Route path="/" component={lazy(() => import('./views/MainContainer/MainContainer'))} />
      </>
    );
  }

  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Switch>{mainContent}</Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
