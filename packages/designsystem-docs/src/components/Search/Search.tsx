import React from 'react';
import styled from 'styled-components';

import search from '../../images/search.svg';

const SearchInput = styled('input')`
    height: 2.8rem;
    outline: none;
    border: none;
    font-size: 1.25rem;
    font-weight: 300;
    width: 100%;
`

const SearchIcon = styled('img')`
    margin-right: 0.5rem;
    width: 1.5rem;
`

interface SearchProps {
    className?: string;
}

function StyledSearch({className}: SearchProps) {
    return (
        <div className={className}>
                <SearchIcon src={search} />
                <SearchInput onFocus={e => e.currentTarget.placeholder = ''} onBlur={e => e.currentTarget.placeholder = 'Search...'} type="text" placeholder="Search..." />
        </div>
    )
}

const Search = styled(StyledSearch)`
    width: 100%;
    display: inline-flex;
    & > input,input::placeholder {
        color: #d3dbd3;
    }
`

export default Search;