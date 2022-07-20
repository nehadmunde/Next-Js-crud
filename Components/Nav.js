import Link from "next/link";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item mx-3">
              <Link href="/">Create</Link>
            </li>
            <li class="nav-item mx-3">
              <Link href="/display">Display</Link>
            </li>
            <li class="nav-item mx-3">
              <Link href="/edit">Edit</Link>
            </li>
            <li class="nav-item mx-3">
              <Link href="/file">File Upload</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
