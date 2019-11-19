"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const process = __importStar(require("process"));
const parser_1 = require("./parser");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const head = process.env['GITHUB_HEAD'];
            const sha = process.env['GITHUB_REF'];
            console.log(`Head ${head} and sha ${sha}`);
            core.setOutput('tag', parser_1.ParseTags(head, sha));
        }
        catch (error) {
            core.setFailed(error.message);
        }
    });
}
run();
