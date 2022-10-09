
export const capitalize = (str : string) : string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// this function assumes the url assumes a link address as follows and parses the link address, then apply padding
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png
export const serialNum = (url : string) : string => {
    let indexNo = url.substring(url.lastIndexOf("/", url.lastIndexOf("/") - 1) + 1, url.lastIndexOf("/"));
    return "#".concat(indexNo.toString().padStart(3, "0")) || '';
}