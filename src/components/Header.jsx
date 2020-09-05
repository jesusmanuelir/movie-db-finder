import React from 'react';
import {
  Link
} from 'react-router-dom'

const Header = () => {
  var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
  var collapseList = collapseElementList.map(function (collapseEl) {
    return new bootstrap.Collapse(collapseEl)
  })

    return(  
          <header>
                <div className="navbar shadow-sm">
                  <div className="container">
                    <Link to="/" className="navbar-brand d-flex  text-white">
                      <svg width="20px" height="20px" viewBox="0 0 16 16" className="bi bi-film margin-icons_header" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0h8v6H4V1zm8 8H4v6h8V9zM1 1h2v2H1V1zm2 3H1v2h2V4zM1 7h2v2H1V7zm2 3H1v2h2v-2zm-2 3h2v2H1v-2zM15 1h-2v2h2V1zm-2 3h2v2h-2V4zm2 3h-2v2h2V7zm-2 3h2v2h-2v-2zm2 3h-2v2h2v-2z"/>
                      </svg>
                        <strong>FindMovie</strong>
                    </Link>
                    <ul className="nav float-right">
                        <li className="nav-item">
                        <Link  className="nav-link text-white" data-toggle="collapse" data-target="#searchCollapse" aria-expanded="false" aria-controls="searchCollapse">
                          <svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-search margin-icons_header" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                          </svg>
                          </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/favorites" className="nav-link text-white">
                          <svg width="20px" height="20px" viewBox="0 0 16 16" className="bi bi-heart margin-icons_header" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                          </svg>
                          </Link>
                        </li>
                      </ul>
                    </div>
                </div>
                <div class="collapse" id="searchCollapse">
                <div class="card card-body">
                  
                </div>
                </div>
      </header>

      );
    }

export default Header;


