import React from 'react';
import './App.css';
import Article from './pages/article/article.component';
import ArticleDetail from './pages/ArticleDetail/articleDetail.component';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
        <Route path='/' exact component={Article}/>
        <Route path='/detail/:articleId' component={ArticleDetail}/>
      </Switch>
    </>
  );
}

export default App;
