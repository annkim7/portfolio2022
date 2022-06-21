import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className="title">
          <h1 className="logo"><Link to="/">Portfolio 2022<b>Ann Kim</b></Link></h1>
        </div>
        <div className="content">
          <nav>
            <ul className="nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/list">List</Link></li>
              <li><a href=" " onClick={()=>window.open('https://github.com/annkim7','_blank')}>Github</a></li>
              <li><Link to="/">Notion</Link></li>
            </ul>
          </nav>
        </div>
    </header>
  );
}

export default Header;
