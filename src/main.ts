import * as core from '@actions/core';

const tagPath = "refs/tags/";

async function run() {
    try {
        const head = core.getInput("head");
        const sha = core.getInput("sha");
        console.log(`Head ${head} and sha ${sha}`);

        if (head && 0 !== head.length && head != "nil" && head.startsWith(tagPath)) {
            core.setOutput('tag', head.substr(tagPath.length, head.length));
        } else {
            core.setOutput('tag', sha.substr(0, 6));
        }
    } catch (error) {
        core.setFailed(error.message)
    }

}

run();
