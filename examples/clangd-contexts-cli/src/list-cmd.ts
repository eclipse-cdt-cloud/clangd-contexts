/********************************************************************************
 * Copyright (c) 2021 STMicroelectronics and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 *******************************************************************************/

import { Command } from 'commander';
import { listProjects, getClangdContextsConfig } from '@eclipse-cdt-cloud/clangd-contexts';
import { requireContextsConfig } from './validation';

const cwd = process.cwd();
const contextsConfig = getClangdContextsConfig(cwd);

const program = new Command()
    .name('list')
    .showHelpAfterError(true)
    .description('List the projects in the current clangd workspace');

program.parse();

listProjects(requireContextsConfig(contextsConfig), cwd);
