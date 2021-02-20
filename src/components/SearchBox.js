import React from 'react'

export const SearchBox = () => {
    return (
        <div className="searchbox-container">
            <div className="searchbox-top">
            <div className="searchbox-title">
                <span >NodeFlair.</span>
                <span className="searchbox-title__half">Jobs</span>
                </div>
            <div className="searchbox-text">Aggregated job listings from popular job sites and career pages</div>
            </div>
            <div className="searchbox-model">
                <div>SELECT  *  FROM  TECH _ JOBS  WHERE</div>
                <form>
                        <input type="search" 
                        name="search" 
                        placeholder="Try: Frontend,QA Engineer, React.js" 
                        className="searchbox-search" />
                        <span className="search-button">search</span>
                    </form>
                    <p className="searchbox-filter">FILTER BY...</p>
            </div>
        </div>
    )
}
