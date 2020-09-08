import React, {useState} from 'react';
const config = require('../../config/index.js');
const Search = ({Children}) => {
    return(
     <section ClassName="py-5 text-center container">
     <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
            {Children}
        </div>
    </div>
    </section>
    );
  }

export default Search;