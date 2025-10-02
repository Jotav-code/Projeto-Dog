import React from 'react';
import useFetch from '../../../Hook/useFetch';
import { STATS_GET } from '../../../api';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import Head from '../../Helper/Head';

const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getStats() {
      const { url, options } = STATS_GET();
      request(url, options);
    }
    getStats();
  }, [request]);

  if (error) return <Error />;
  if (loading) return <Loading />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatisticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
