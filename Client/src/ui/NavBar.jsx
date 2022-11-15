import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate ();

    const onLogout =() => {
        navigate('/login',{
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Hamburger
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active':'' }`} 
                        to="/home"
                    >
                        Inicio
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active':'' }`} 
                        to="/search"
                    >
                        Busqueda
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active':'' }`} 
                        to="/mision"
                    >
                        Mision
                    </NavLink>
                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active':'' }`} 
                        to="/Vision"
                    >
                        Vision
                    </NavLink>
                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${ isActive ? 'active':'' }`} 
                        to="/about"
                    >
                        Acerca del programa
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary"
                    >
                    Rodolfo
                    </span>

                    <button 
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}