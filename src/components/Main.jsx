import React from 'react';

const Main = ( { children } ) => (
  <main>
      <div className="py-5 vh-100 container_bg">
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

