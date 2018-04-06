/** @flow */

let lottoNumbers: Array<number> = [2, 23, 25, 33, 39, 40]; // Works
// let lottoNumbers2: Array<number> = [2, 23, 25, "33", 39, 40]; // Error
// let lottoNumbers3: Array<string> = [2, 23, 25, "33", 39, 40]; // Error
let lottoNumbers4: Array<mixed> = [2, true, 25, "33", 39, 40]; // Works
