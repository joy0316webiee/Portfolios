import React from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';

class Index extends React.Component {
  static async getInitialProps() {
    let userData = {};

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      userData = response.data;
    } catch (err) {
      console.error(err);
    }

    return { initialData: [1, 2, 3, 4], userData };
  }

  render() {
    const { userData, initialData } = this.props;

    return (
      <BaseLayout>
        <h1>I am Index Page from Class Component</h1>
      </BaseLayout>
    );
  }
}

export default Index;
