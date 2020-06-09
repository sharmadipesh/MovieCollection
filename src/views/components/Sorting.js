export const sortingAtoZ = (a,b) => {
    if ( a.Title < b.Title ){
        return -1;
    }
    if ( a.Title > b.Title ){
        return 1;
    }
    return 0;
};

export const sortingZtoA = (a,b) => {
    if ( a.Title > b.Title ){
        return -1;
    }
    if ( a.Title < b.Title ){
        return 1;
    }
    return 0;
};

export const sortingLowtoHigh = (a,b) => {
    return a.imdbRating - b.imdbRating;
};

export const sortingHightoLow = (a,b) => {
    return b.imdbRating - a.imdbRating;
};