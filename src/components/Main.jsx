import React from 'react';

const Main = ( { children } ) => (
  <main>
      <div className="py-5 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-12">
            {children}
            </div>
          </div>
        </div>
      </div>
  </main>
); 


export default Main;

