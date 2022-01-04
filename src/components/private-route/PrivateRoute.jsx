import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function PrivateRoute({ children, ...args }) {
  const { user } = useUser();

  return (
    <>
      <Route
        {...args}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )
        }
      />
    </>
  );
}
