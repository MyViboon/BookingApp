import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContianer">
            <span className="logo">ViboonBooking</span>
            <div className="navItem">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar