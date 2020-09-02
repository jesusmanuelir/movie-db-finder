import React, {useState} from 'react';
const config = require('../../config/index.js');

    const Search = () => {
    const [query, setQuery] = useState('');

    const submit = e => {
      e.preventDefault();
      console.log(`${query}`);
    }

    return(
     <section ClassName="py-5 text-center container">
     <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
        <form onSubmit={submit}>
          <div className="input-group">
            <input 
            type="text" 
            name="query" 
            className="form-control input-search_style" 
            placeholder="Search movies or tv show" 
            aria-label="Search movies or tv show" 
            aria-describedby="button-addon"
            value={query}
            onChange={e => setQuery(e.target.value)}
            required
            />
            <div className="input-group-append">
              <button className="btn btn-secondary button-search_style" type="submit" id="button-addon">Search</button>
            </div>
          </div>
        </form>
        </div>
    </div>
    </section>
    );
  }

export default Search;