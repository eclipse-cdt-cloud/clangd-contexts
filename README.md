# ECLIPSE CDT.CLOUD - CLANGD CONTEXTS

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-curved)](https://github.com/eclipse-cdt-cloud/clangd-contexts/labels/help%20wanted)
[![Open questions](https://img.shields.io/badge/Open-questions-blue.svg?style=flat-curved)](https://github.com/eclipse-cdt-cloud/clangd-contexts/labels/question)
[![Open bugs](https://img.shields.io/badge/Open-bugs-red.svg?style=flat-curved)](https://github.com/eclipse-cdt-cloud/clangd-contexts/labels/bug)

## Overview

An API for management of [clangd](https://clangd.llvm.org) configuration files in C/C++ projects using _contexts_.

## Features

- `@eclipse-cdt-cloud/clangd-contexts`:
    - Library for management of [clangd][clangd] configuration files
    - Retrieve and set contexts in one or more `.clangd` files
    - Manage compile flags in `.clangd` files
    - See the [package readme][cclib] for further details.
- `@eclipse-cdt-cloud/clangd-contexts-cli`
    - An example command-line tool (`clangd-context`) built on the `@eclipse-cdt-cloud/clangd-contexts` API for management of [clangd][clangd] configuration files in C/C++ projects.
    - See the [package readme][cccli] for details, including a step-by-step guide to the CLI.
- `theia-clangd-contexts-ext`
    - An example VS Code extension demonstrating use of the `@eclipse-cdt-cloud/clangd-contexts` API.
    - See the [package readme][ccvsx] for details, including a step-by-step guide to the extension UI.

[cclib]: ./packages/clangd-contexts/README.md
[cccli]: ./examples/clangd-contexts-cli/README.md
[ccvsx]: ./examples/clangd-contexts-ext/README.md
[clangd]: https://clangd.llvm.org

## How to build

### Packages and Examples

To build the monorepo:

```bash
yarn
```

Additionally, to make the `clangd-context` example CLI tool available in your C/C++ projects
(such as the [clangd workspace](#example-workspaces) example):

```bash
cd examples/clangd-contexts-cli
yarn link
```

> **Note** that on some Linux installations you may need to ensure that Yarn's global bin directory is in your shell path:

```bash
export PATH=$(yarn global bin):$PATH
```

### Example Theia Deployments

The `browser-app` and `electron-app` directories contain examples of Theia-based applications which use the extensions provided by the repository.

- `browser-app` build instructions:

    ```bash
    yarn
    yarn start:browser
    ```

- `electron-app` build instructions:

    ```bash
    yarn
    yarn start:electron
    ```

## Example Packages

- [`clangd-contexts-cli`][cccli]
    - provides a command-line tool that demonstrates usage of the clangd contexts API
- [`clangd-contexts-ext`][ccvsx]
    - an example VS Code extension that demonstrates usage of the clangd contexts API

## Example Workspaces

- [`clangd-workspace`][ccws]
    - provides a test playground for the `clangd-context` example CLI tool and the API, including the separate [VS Code extension example](./examples/clangd-contexts-ext/README.md)

[ccws]: ./examples/clangd-workspace/README.md

## License

- [Eclipse Public License 2.0](http://www.eclipse.org/legal/epl-2.0/)
- [一 (Secondary) GNU General Public License, version 2 with the GNU Classpath Exception](https://projects.eclipse.org/license/secondary-gpl-2.0-cp)
