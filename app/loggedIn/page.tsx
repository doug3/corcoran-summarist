import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";

export default function LoggedIn({ setLoggedIn }: { setLoggedIn: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <section className="logged-in">
            <div className="flex">
                  <div className="flex flex-col w-48 h-screen border-r border-gray-300">
                    <SideBar setLoggedIn={setLoggedIn}/>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="h-24 flex items-center justify-end px-4 border-b border-gray-300">
                      <SearchBar />
                    </div>
                    
                  </div>
                </div>
        </section>
    );
}