import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form/post-add-form";

import "./app.css";

const App = () => {
  const data = [
    { id: 'rr', label: "Going to lern react new", important: false },
    { id: 'q', label: "Going to lern react", important: true },
    { id: 'w', label: "Going to lern Node", important: false },
    { id: 'e', label: "Going to lern Vue", important: false },
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
