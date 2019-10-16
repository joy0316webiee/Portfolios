import React from 'react';
import { withRouter } from 'next/router';
import axios from 'axios';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Portfolio extends React.Component {
  static async getInitialProps({ query }) {
    let portfolio = {};
    const portfolioId = query.id;

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${portfolioId}`
      );
      portfolio = response.data;
    } catch (err) {
      console.error(err);
    }

    return { portfolio };
  }

  render() {
    const { portfolio } = this.props;

    return (
      <BaseLayout>
        <BasePage>
          <h1>I am Portfolio Page</h1>
          <p>TITLE: {portfolio.title}</p>
          <p>BODY: {portfolio.body}</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
