import React, { useState } from 'react';
// import { Container } from './styled';
import Layout from './Layout';

const initialState = { symbol: '', name: '' };

function Home() {
  const [stock, setSelectedStock] = useState(initialState);

  return (
    <Layout>
        <span>todo</span>
    </Layout>
  );
}

export default Home;
