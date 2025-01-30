import '../styles/header.css'
import '../styles/globals.css'

const header = () => {
  return (
    <header>
        <span>Liner <span>Buildr</span> </span>
        <nav>
            <ul className='nav-items'>
                <li className='items-nav'><a href="#">builr</a></li>
                <li className='items-nav'><a href="#">exchange</a></li>
                <li className='items-nav'><a href="#">swap</a></li>
                <li className='items-nav'><a href="#">vault</a></li>
                <li className='items-nav'><a href="#">dao</a></li>
                <li className='items-nav'><a href="#">dasboard</a></li>
                <li className='items-nav'><a href="#">news</a></li>
            </ul>
        </nav>
        <span><button className='button-nv'>Launch Exchalllenge</button></span>
    </header>
  )
}

export default header
