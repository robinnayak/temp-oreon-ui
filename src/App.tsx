import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { CreateBusinessPage } from "./features/create-business/CreateBusinessPage";
// import { CreateLogoPage } from "./features/create-business/CreateLogoPage";
import { ApolloClientProvider } from "./common";
import { CreateBusinessLayout } from "./common/layouts";


const App = () => {
  return (
    <ApolloClientProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateBusinessLayout />}>
            <Route index element={<CreateBusinessPage />} />
            {/* <Route path="logo" element={<CreateLogoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloClientProvider>
  );
};

export default App;
