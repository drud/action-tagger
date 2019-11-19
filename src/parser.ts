export function ParseTags(head: string, sha: string) {
    let tagPath = "refs/tags/";
    if (head && 0 !== head.length && head != "nil" && head.startsWith(tagPath)) {
        return head.substr(tagPath.length, head.length);
    }
    return sha.substr(0, 6);
}

