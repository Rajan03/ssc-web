import { useRouter } from 'next/router';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type RouteChangeProviderProps = {
  children: React.ReactNode;
};

// Context to store the loading state
const RouteChangeContext = createContext<boolean>(false);

// Hook to get the loading state
export const RouteChangeProvider: React.FC<RouteChangeProviderProps> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };
    const handleRouteChangeComplete = () => {
      setLoading(false);
    };
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('routeChangeError', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('routeChangeError', handleRouteChangeComplete);
    };
  }, [router]);

  const value = useMemo(() => loading, [loading]);

  return (
    <RouteChangeContext.Provider value={value}>
      {children}
    </RouteChangeContext.Provider>
  );
};

// Hook to get the loading state
const useRouteChange = () => {
  const context = useContext(RouteChangeContext);
  if (context === undefined) {
    throw new Error('useRouteChange must be used within a RouteChangeProvider');
  }
  return context;
};

export default useRouteChange;
