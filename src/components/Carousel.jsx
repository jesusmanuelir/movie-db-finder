import React from 'react';


const Carousel = ( {children} ) => {
    return(
        <div className="py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {children}
          </div>
        </div>
      </div>
    );
}

export default Carousel;