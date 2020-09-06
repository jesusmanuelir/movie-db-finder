import React from 'react';


const Carousel = ( {children} ) => {
    return(
        <div className="py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-6 g-3">
                {children}
          </div>
        </div>
      </div>
    );
}

export default Carousel;