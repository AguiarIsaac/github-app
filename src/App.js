import React from "react";
import Layout from "./components/layout";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import GlobalStyle from "./global/globalStyle";
import GithubProvider from "./providers/github-providers";

function App() {
  return (
    <main>
      <GithubProvider>
        <Layout>
          <Profile />
          <Repositories />
          <GlobalStyle />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
