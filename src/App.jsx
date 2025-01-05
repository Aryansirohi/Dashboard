import { Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import Sidebar from "./components/SideBar";
import Userpage from "./pages/Userpage";
import SalesPage from "./pages/SalesPage";
import OrderPage from "./pages/OrderPage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  return (
    <>
      <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
        {/* {Background} */}

        <div className="fixed-inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
          <div className="absolute inset-0 backdrop-blur-sm" />
          
        </div>
        <Sidebar />
        <Routes>

          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/users" element={<Userpage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
