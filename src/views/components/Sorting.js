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

export const sortingOperationHandler =(expression,collection) => {
    let data;
    switch(expression) {
        case "1":
                data = collection.sort(sortingAtoZ);
                break;
        case "2":
            data = collection.sort(sortingZtoA);
            break;
        case "3":
                data = collection.sort(sortingLowtoHigh);
                break;
        case "4":
                data = collection.sort(sortingHightoLow);
                break;
        default:
            data = collection.sort(sortingAtoZ);
            break;
    }
    return data;
}