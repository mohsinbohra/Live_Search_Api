import React from 'react';

const SearchResult = (props) => {
    const img = `https://source.unsplash.com/user/erondu/500x300/?${props.name}`;
    return (
        <>
        <div>
            <img src={img} alt="Search"/>
        </div>
        </>
    );
};

export default SearchResult;