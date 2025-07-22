 import Article from "../components/Article";  

import { render, screen } from '@testing-library/react';
import ArticleList from '../components/ArticleList';

jest.mock('../components/Article', () => {
  return function MockArticle(props) {
    return (
      <div data-testid="article">
        {props.title} - {props.date}
      </div>
    );
  };
});

const testPosts = [
  {
    id: 1,
    title: "Test Post 1",
    date: "2023-01-01",
    preview: "Preview text 1"
  },
  {
    id: 2,
    title: "Test Post 2",
    date: "2023-01-02",
    preview: "Preview text 2"
  }
];

describe('ArticleList', () => {
  test('renders all articles', () => {
    render(<ArticleList posts={testPosts} />);
    const articles = screen.getAllByTestId('article');
    expect(articles.length).toBe(testPosts.length);
  });
});