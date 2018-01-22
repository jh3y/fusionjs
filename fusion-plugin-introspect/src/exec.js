/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
import proc from 'child_process';

export const exec = (cmd: string) => {
  try {
    return proc
      .execSync(cmd)
      .toString()
      .trim();
  } catch (e) {
    return '';
  }
};