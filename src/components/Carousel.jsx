import React from 'react';


const Carousel = ( {children, title} ) => {

    return(
        <div className="py-5">
        <div className="container">
          <h4 className="py-2">{title}</h4>
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-3">
            {children}
          </div>
        </div>
      </div>
    );
}

export default Carousel;