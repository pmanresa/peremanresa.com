import * as React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Bio from '../components/bio';
import SEO from '../components/seo';

const IndexPage = (props) => (
  <Layout location={props.location}>
    <SEO title="Home" />
    <Bio />
  </Layout>
);

export default IndexPage;
