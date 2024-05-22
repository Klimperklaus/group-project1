import "./Header.css"

function Header() {
    return (
    <header className="header">
        <h1><span className="ring">d</span>Lord of the Rings<span className="ring">m</span></h1>
        <nav>
            <ul>
                <li><a href="#">Lore</a></li>
                <li><a href="#">Characters</a></li>
                <li><a href="#">Maps</a></li>
                <li><a href="#">Gallery</a></li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;