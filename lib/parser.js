"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ParseTags(head, sha) {
    let tagPath = "refs/tags/";
    if (head && 0 !== head.length && head != "nil" && head.startsWith(tagPath)) {
        return head.substr(tagPath.length, head.length);
    }
    return sha.substr(0, 6);
}
exports.ParseTags = ParseTags;
