import * as core from '@actions/core';
import {ParseTags} from './parser';




async function run() {
    try {
        const head = core.getInput("head");
        const sha = core.getInput("sha");
        console.log(`Head ${head} and sha ${sha}`);
        core.setOutput('tag', ParseTags(head, sha));
    } catch (error) {
        core.setFailed(error.message)
    }

}

run();
