import react from "react"
import "./style2.css"

const NavBar = () =>{
    return(
        <>
        <head>
            
            
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />

        </head>
        
        <nav class="navbar  justify-content-between">
  <a href="#" class="navbar-brand">Messanger App</a>
  <a class="c1 nav-link"  href="/beta">Beta version</a>
  <a class="c1 nav-link" href="/">New release</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2"  placeholder="Search" aria-label="Search"/>
    <button class="btn my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
        </>
    )
}
export default NavBar;