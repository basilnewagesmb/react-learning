import React from "react";
import Posts from "pages/posts";
import PostDetails from "pages/posts/detail";
import HomePage from "pages/home";
import { Route, Routes } from "react-router";
import DashBoardMain from "pages/dashboard";
import NotFound from "pages/404";
import SettingsAndPrivacy from "pages/dashboard/settings";
import Inbox from "pages/dashboard/inbox";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/dashboard" element={<DashBoardMain />}>
        <Route path="/dashboard/" element={<Inbox />} />
        <Route path="/dashboard/inbox" element={<Inbox />} />
        <Route
          path="/dashboard/settings-and-privacy"
          element={<SettingsAndPrivacy />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
