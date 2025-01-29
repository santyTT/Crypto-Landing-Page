import '../styles/header.css'
import '../styles/globals.css'

const header = () => {
  return (
    <header>
        <span>Liner <span>Buildr</span> </span>
        <nav>
            <ul>
                <li><a href="#">builr</a></li>
                <li><a href="#">exchange</a></li>
                <li><a href="#">swap</a></li>
                <li><a href="#">vault</a></li>
                <li><a href="#">dao</a></li>
                <li><a href="#">dasboard</a></li>
                <li><a href="#">news</a></li>
            </ul>
        </nav>
        <span><button className='button-nv'>Launch Exchalllenge</button></span>
    </header>
  )
}

export default header
