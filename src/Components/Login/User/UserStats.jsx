import React from 'react';
import useFetch from '../../../Hook/useFetch';
import { STATS_GET } from '../../../api';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import UserStatsGraphs from './UserStatsGraphs';
import Head from '../../Helper/Head';

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
      <div>
        <Head title="Estatisticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
