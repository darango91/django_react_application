import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";

const BaseRouter = () => (
  <>
    <Route exact path="/" component={ArticleList} />
    <Route exact path="/:articleID" component={ArticleDetail} />
  </>
);

export default BaseRouter;
