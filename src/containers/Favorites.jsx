import React from 'react';
import Main from '../components/Main';


const Favorites = () => {
    return(
        <Main>
        <h2 className="text-white">Movies Favorites</h2>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Lorem Ipsum 
            <button type="button" class="btn btn-warning">Delete</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Lorem Ipsum 
            <span className="badge badge-danger">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Lorem Ipsum 
            <span className="badge badge-danger">1</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Lorem Ipsum 
            <span className="badge badge-danger">1</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Lorem Ipsum 
            <span className="badge badge-danger">1</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Lorem Ipsum 
            <span className="badge badge-danger">1</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Lorem Ipsum 
            <span className="badge badge-danger">1</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Lorem Ipsum 
            <span className="badge badge-danger">1</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Lorem Ipsum 
            <span className="badge badge-danger">1</span>
          </li>
          </ul>
        </Main>
    );
}

export default Favorites;


