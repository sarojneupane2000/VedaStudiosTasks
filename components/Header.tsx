// components/Header.tsx
const Header = () => (
    <header className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Paw Prints</h1>
        <nav className="flex items-center flex-grow">
          <ul className="flex space-x-4 mx-auto">
            <li><a href="#" className="hover:underline">Campaigns & Topics</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
          <div className="space-x-4 ml-auto">
            <button className="bg-[#8c5310] text-white px-4 py-2 rounded hover:bg-[#8c5310]">Volunteer</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Donate</button>
          </div>
        </nav>
      </div>
    </header>
  );
  
  export default Header;
  