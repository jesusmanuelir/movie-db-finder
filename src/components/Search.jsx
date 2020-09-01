import React from 'react';

const Banner = () => {
    return(
     <section class="py-5 text-center container">
     <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
        <div className="input-group">
            <input type="text" className="form-control input-search_style" placeholder="Search movies or tv show" aria-label="Search movies or tv show" aria-describedby="button-addon"/>
            <div className="input-group-append">
              <button className="btn btn-secondary button-search_style" type="button" id="button-addon">Search</button>
            </div>
          </div>
        </div>
    </div>
    </section>
    );
} 

export default Banner;