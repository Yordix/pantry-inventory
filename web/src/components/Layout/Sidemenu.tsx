import {Link} from 'react-router-dom';

const Sidemenu = () => {
    return (
        <aside className="w-52 h-full bg-gray-100 border-r flex flex-col p-4 gap-3">
            <Link to="/" className="hover:bg-gray-200 rounded p-2">Dashboard</Link>
            <Link to="/page1" className="hover:bg-gray-200 rounded p-2">Page 1</Link>
            <Link to="/page2" className="hover:bg-gray-200 rounded p-2">Page 2</Link>
            <Link to="/scanner" className="hover:bg-gray-200 rounded p-2">Scanner</Link>
        </aside>
    );
}

export default Sidemenu;