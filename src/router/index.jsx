import React from "react";
import Posts from "pages/posts";
import PostDetails from "pages/posts/detail";
import HomePage from "pages/home";
import { Route, Routes,Navigate } from "react-router";
import DashBoardMain from "pages/dashboard";
import NotFound from "pages/404";
import SettingsAndPrivacy from "pages/dashboard/settings";
import Inbox from "pages/dashboard/inbox";
import Login from "pages/auth/login";
import { useSelector } from "react-redux";
import { getToken } from "cookies/token";

const Router = () => {
  const { user, name } = useSelector((state) => state.auth);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/auth/login" element={user ? <Navigate to="/"/> : <Login />} />
      <Route path="/dashboard" element={!user ? <Navigate to="/auth/login"/> :<DashBoardMain />} >
        <Route path="/dashboard/" element={!user ? <Navigate to="/auth/login"/> :<Inbox />} />
        <Route path="/dashboard/inbox" element={!user ? <Navigate to="/auth/login"/> :<Inbox />} />
        <Route
          path="/dashboard/settings-and-privacy"
          element={!user ? <Navigate to="/auth/login"/> : <SettingsAndPrivacy />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
