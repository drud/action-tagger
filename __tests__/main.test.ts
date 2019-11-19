import {ParseTags} from "../src/parser";
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

test('Gets Correct Ref',  () => {
   let input = [{
      head: "refs/tags/v1.0.0",
      sha: "2aab82bas23bD",
      expect: "v1.0.0"
   },{
      head: "refs/master",
      sha: "2aab82bas23bD",
      expect: "2aab82"
   },{
      head: "",
      sha: "2bnasdfbSD*2badsg",
      expect: "2bnasd"
   }];

   input.forEach( (element) => {
      expect( ParseTags(element.head, element.sha)).toBe(element.expect);
   });

});

test('Check for bad Value', () => {
   expect(() => ParseTags('$GITHUB_REF', '$GITHUB_HEAD')).toThrowError();
});

test('Check for empty sha', () => {
   expect(() => ParseTags('', '')).toThrowError();
});

