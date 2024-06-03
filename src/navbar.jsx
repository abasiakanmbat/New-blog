const Navbar = () => {
  return (
    <div className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">

      <a href="/">Home</a>
      <a href="/" style={{
        color: 'white',
        backgroundColor:'#f1356d',
        borderRadius:'8px'
      }}>New blog</a>
      </div>
    </div>
  );
}
 
export default Navbar;