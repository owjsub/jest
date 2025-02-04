/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import replImport = require('./cli');

export const repl = replImport;
export {run as runtime} from './cli/runtime-cli';
