import { useEffect, useRef } from 'react';

/* Hooks */
import { useStore } from '../../../hooks/useStore';
import { usePostContent } from '../../../hooks/useAPI';
import { API_OPTIONS, API_URL, ALERTS_URL } from '../../../helpers/constants';

/* Components */
import Layout from '../../Layout/Layout';
import Table from '../../Table/Table';

const Dashboard = () => {
  console.log('dashboard render');
  const user = useStore((state) => state.user);
  const sessionid = useStore((state) => state.sessionid);
  const dataFetchedRef = useRef(false);
  const alertsURL = `${API_URL}${ALERTS_URL}`;

  const options = {
    method: 'GET',
    headers: {
      ...API_OPTIONS.headers,
      sessionid
    }
  };

  const alerts = usePostContent(alertsURL, options, true);
  const test = usePostContent('http://127.0.0.1:3000/', options, true);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    alerts.fetchContent();
    test.fetchContent();
  }, [alerts]);

  return (
    <Layout>
      <div>
        <p>{`Hello, ${user}`}</p>
        {/* <p>{test?.content.msg}</p> */}
        <Table data={alerts?.content} status={alerts.status} />
      </div>
    </Layout>
  );
};

export default Dashboard;
