import Github from "./Github";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";

function App() {
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <main className="flex-1 w-full px-4 sm:px-6 py-6">
        {/* Top Navbar */}
        <TopHeader />

        {/* Gradient Header */}
        <Header />

        {/* Search Bar */}
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
