import type { NextPage } from "next";
import Navbar from "../../components/Navbar";
import Layout from "../../components/Layout";
import PageTitle from "../../components/PageTitle";
import PageContainer from "../../components/PageContainer";
const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Navbar />
      <PageContainer>
        <PageTitle title="Maaltijden" />
        <p>TEst</p>
      </PageContainer>
    </Layout>
  );
};

export default Home;
