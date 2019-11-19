export function ParseTags(head?: string, sha?: string) {
    let tagPath = "refs/tags/";
    //Catch bad conditions
    if (head && 0 !== head.length && head != "nil") {
        if ( head.startsWith(tagPath)) {
            return head.substr(tagPath.length, head.length);
        }
    }
    if (!sha || 0 === sha.length) {
        throw new Error('SHA is empty');
    }
    if ((head && head.startsWith('$GITHUB')) || sha.startsWith('$GITHUB')) {
        throw new Error('Value of Sha and/or Head contain litteral references to the GITHUB environment var names, not values');
    }
    return sha.substr(0, 6);
}

