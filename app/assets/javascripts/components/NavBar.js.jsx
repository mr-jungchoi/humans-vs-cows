function NavBar() {
  return (
    <nav className='navbar'>
      <div className='container-fluid'>
        <a href='/' className='navbar-brand'>Humans VS. Cows</a>
        <a href='/admin' className='navbar-nav navbar-right btn btn-lg'>
          <span className='glyphicon glyphicon-cog' aria-hidden='true'></span>
        </a>
      </div>
    </nav>
  )
}
