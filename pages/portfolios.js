import React from 'react';
import axios from 'axios';
import { Link } from '../routes';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = [];

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      posts = response.data;
    } catch (err) {
      console.error(err);
    }

    return { posts };
  }

  renderPosts = posts => {
    return posts.map((post, id) => {
      return (
        <li key={id}>
          <Link route={`/portfolio/${post.id}`}>
            <a style={{ fontSize: '20px' }}>{post.title}</a>
          </Link>
        </li>
      );
    });
  };

  render() {
    const { posts } = this.props;

    return (
      <BaseLayout>
        <BasePage>
          <h1>I am Portfolios page</h1>
          <ul>{this.renderPosts(posts)}</ul>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolios;
