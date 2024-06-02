const Topbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="bg-blue-600 h-16 flex justify-between items-center px-6 fixed w-full shadow-md transition-all duration-300">
      <div className="text-white font-extrabold text-lg">
        <a href="/" className="hover:text-gray-200 transition-colors duration-300">Lab Buddy</a>
      </div>
      <div className="text-white flex items-center space-x-6">
        <div className="hidden md:block text-sm">
          <span className="bg-blue-700 py-1 px-3 rounded-md shadow-md transition-transform transform hover:scale-105">
            Current Window: Dashboard
          </span>
        </div>
        <div className="border-l border-gray-300 h-6"></div>
        <div className="flex items-center">
          <span className="ml-3 font-semibold transition-opacity duration-300 hover:opacity-80">{user.name}</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
