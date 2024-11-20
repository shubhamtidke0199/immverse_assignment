import Navbar from "../components/navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="px-8">
      <section className="mb-8">
        <Navbar />
      </section>
      <section className="flex gap-8 ">
        {/* SIDEBAR CONTENT */}
        <Sidebar />

        {/* MAIN CONTENT */}

        <main className="flex-1 py-6 px-4 bg-white rounded-2xl  overflow-y-auto shadow-sm">
          {children}
        </main>
      </section>
    </div>
  );
};

export default Layout;
