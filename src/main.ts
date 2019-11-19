import * as core from '@actions/core';
import * as process from 'process';
import {ParseTags} from "./parser";


async function run() {
    try {
        const head = process.env['GITHUB_REF'];
        const sha = process.env['GITHUB_SHA'];
        console.log(`Head ${head} and sha ${sha}`);
        core.setOutput('tag', ParseTags(head, sha));
    } catch (error) {
        core.setFailed(error.message)
    }

}

run();
