import {ParseTags} from "../src/parser";
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

test('Gets Correct Ref', async() => {
   let input = [{
      head: "refs/tags/v1.0.0",
      sha: "2aab82bas23bD",
      expect: "v1.0.0"
   },{
      head: "refs/master",
      sha: "2aab82bas23bD",
      expect: "2aab82"
   }];

   input.forEach( (element) => {
      expect(ParseTags(element.head, element.sha)).toBe(element.expect);
   });

});