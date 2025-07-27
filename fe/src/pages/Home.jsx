import React from "react";
import Layout from "../components/common/Layout";
import InfiniteSlider from "../components/common/InfiniteSlider";
import Courses from "./Courses";

function Home() {
  return <Layout>
    <InfiniteSlider/>
    <Courses/>
  </Layout>;
}

export default Home;
