function HomeNavBar() {
  return (
    <nav className="navbar font-18 text-colot-white flex-container-space column-gap-20 font-weight-600">
      <div className="flex-1">Homepage</div>
      <div>Login</div>
      <button className="border text-colot-white font-weight-600 font-18">
        Create Account
      </button>
    </nav>
  );
}

export { HomeNavBar };
