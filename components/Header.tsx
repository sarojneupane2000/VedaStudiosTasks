
const Header = () => (
    <header className="bg-green-300 text-black p-5">
      <div className="container bg-white mx-auto flex justify-between items-center p-3 rounded-md">
        <h1 className="text-xl font-bold">Paw Prints</h1>
        <nav className="flex items-center flex-grow">
          <ul className="flex space-x-4 mx-auto">
            <li><a href="#" className="hover:underline">Campaigns & Topics</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
          <div className="space-x-4 ml-auto">
            <button className="bg-white border-2 border-[#8c5310] text-[#8c5310] px-4 py-2 rounded-lg hover:bg-[#8c5310] hover:text-white transition-colors">Volunteer</button>
            <button className="bg-[#8c5310] text-white px-4 py-2 rounded-lg hover:bg-yellow-600">Donate</button>
          </div>
        </nav>
      </div>
    </header>
  );
  
  export default Header;
  