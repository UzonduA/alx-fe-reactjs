function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 sm:p-4 md:p-8 md:max-w-sm mx-auto my-20 rounded-lg shadow-lg max-w-xs hover:shadow-xl">
        <div className="md:w-36 md:h-36 mx-auto rounded-full overflow-hidden sm:w-24 sm:h-24 hover:scale-110 transition-transform duration-300 ease-in-out">
            <img 
                src="https://via.placeholder.com/150"
                alt="User"
                className="w-full h-full object-cover"/>
        </div>
        <h1 className="sm:text-lg md:text-xl text-blue-800 my-4 hover:text-blue-500">John Doe</h1>
        <p className="text-gray-600 md:text-base sm:text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>

  );
}

export default UserProfile;