import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import GlobalStyle from './global/globalStyle';

function App() {
  return (
    <main>
      <Layout>
        <Profile />
        <Repositories />
        <GlobalStyle />
      </Layout>
    </main>
  );
}

export default App;
