export function ParseTags(head?: string, sha?: string) {
    let tagPath = "refs/tags/";
    //Catch bad conditions
    if (head && 0 !== head.length ) {
        if ( head.startsWith(tagPath)) {
            return head.substr(tagPath.length, head.length);
        }
    }
    if (!sha || 0 === sha.length) {
        throw new Error('SHA is empty');
    }
    return sha.substr(0, 6);
}

