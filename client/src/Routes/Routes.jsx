// import StreamCreate from "../components/StreamCreate/StreamCreate";
// import StreamDelete from "../components/StreamDelete/StreamDelete";
// import StreamEdit from "../components/StreamEdit/StreamEdit";
// import StreamList from "../components/StreamList/StreamList";
// import StreamShow from "../components/StreamShow/StreamShow";

import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";
const StreamList = React.lazy(() =>
  import("../components/StreamList/StreamList")
);
const StreamCreate = React.lazy(() =>
  import("../components/StreamCreate/StreamCreate")
);
const StreamDelete = React.lazy(() =>
  import("../components/StreamDelete/StreamDelete")
);
const StreamEdit = React.lazy(() =>
  import("../components/StreamEdit/StreamEdit")
);
const StreamShow = React.lazy(() =>
  import("../components/StreamShow/StreamShow")
);
const Dashboard = React.lazy(() =>
  import("../components/Dashboard/Dashboard")
);

export const Routes = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/Dashboard" exact component={Dashboard} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/show/:id" exact component={StreamShow} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default Routes;
