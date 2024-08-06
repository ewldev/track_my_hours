import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
}