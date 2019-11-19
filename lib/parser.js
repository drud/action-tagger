"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ParseTags(head, sha) {
    let tagPath = "refs/tags/";
    //Catch bad conditions
    if (head && 0 !== head.length && head != "nil") {
        if (head.startsWith(tagPath)) {
            return head.substr(tagPath.length, head.length);
        }
    }
    if (head.startsWith('$GITHUB') || sha.startsWith('$GITHUB')) {
        throw new Error('Value of Sha and/or Head contain litteral references to the GITHUB environment var names, not values');
    }
    return sha.substr(0, 6);
}
exports.ParseTags = ParseTags;
