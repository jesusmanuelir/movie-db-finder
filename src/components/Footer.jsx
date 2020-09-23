import React from 'react';
import themoviedb from '../assets/icons/Asset 3.svg';
const Footer = () => (
    <footer className="footer text-muted mt-auto py-2">
    <div class="container">
        <div class="row">
            <div class="col">
            <p className="float-right mb-1 text-white"><a href="#"></a></p>
              <p className="mb-1 text-white"><strong>FindMovie.</strong> </p>
            </div>
            <div class="col">
      
            </div>
            <div class="col">
                <span>Data thanks to </span><img src={themoviedb} alt="The movie bd" className="credits"/>
            </div>
        </div>

    </div>
    </footer>
);

export default Footer;