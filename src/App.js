import React from 'react';
import Footer from './Component/Footer';
import Nav from './Component/Navigation';
import NotFound from './Component/404';
import HomeContent from './page/HomePage';
import About from './page/About';
import PostDetail from './page/PostDetail'
import ListPost from './page/ListPost'
// import postApi from './Api/postApi'
import Login from './Component/LoginRegisterLayout/LoginRegisterLayout';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom"


function App(props) {

  const [open, setOpen] = React.useState(false);
  let location = useLocation();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (location.pathname === "/login-register") {
      setOpen(true);
    }
  }, [location.pathname])

  return (
    <>
      <Nav handleClickOpen={handleClickOpen} />
      <Switch>
        <Route path={"/"} exact component={HomeContent} />
        <Route path={"/login-register"} exact>
          <Login
            open={open}
            handleClose={handleClose}
          />
        </Route>
        <Route path={"/about"} exact component={About} />
        {/* <Route path={"/post"} exact component={Post} /> */}
        <Route path={"/post/:postId"} exact component={PostDetail} />
        <Route path={"/list-post"} exact component={ListPost} />

        <Route component={NotFound} />
      </Switch>
      <hr />
      <Footer />

    </>
  );
}

export default App;