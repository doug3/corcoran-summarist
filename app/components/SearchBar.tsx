import logo from "../../assets/logo.png";
import Image from "next/image";

export default function SearchBar() {
    return (
        <div className="search-bar">
            <figure className="nav__img--mask">
              <Image className="nav__img" src={logo} alt="logo" />
            </figure>
            <input
                type="text"
                className="search-bar__input"
                placeholder="Search for book summaries..."
            />
            <button className="search-bar__button">Search</button>
        </div>
    );
}