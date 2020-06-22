# Stoicism JavaScript Style

<!-- Badges -->

<!-- Brief description -->

_**ESLint and Prettier configurations for JavaScript in the Stoicism
Compendium**_

This package combines the following configurations for linting and formatting
JavaScript:

* An [**ESLint**][eslint] [configuration][eslint-shareable-config] based on the
  [JavaScript Standard Style][standardjs]

* A [**Prettier**][prettier] [configuration][prettier-config] that works with
  the ESLint configuration

<span id="footnote1-source"/>

To determine the JavaScript code style in
the Stoicism Compendium project, we started with the Standard Style, since it
seemed to mostly match our goals (below). If we find useful&#8203;<a
href="#footnote1">¹</a> changes, we add those to [`index.js`](./index.js), which
has `eslint` and `prettier` components.

Our goals are to improve, in priority order:

1. the readability of code,
2. the readability of line-by-line code changes, and
3. the compactness of code.

<details>
<summary><strong>This is the ESLint configuration.</strong></summary>

The ESLint configuration [extends][eslint-extends] the Standard configuration
([`eslint-config-standard`][eslint-config-standard]), and we describe the
differences relative to that. Under each item, there is a motivation and a
comparison with the Standard [ESLint rule][eslint-rules].

<details>
<summary><em>Use the one true brace style without exceptions.</em></summary>

It’s easier to read control flow code if the content between the braces is not
on the same line as the braces themselves. This may increase the number of lines
of code, but the trade-off of improved readability seems worth it.

| Style    | [`brace-style`][eslint-brace-style]            |
| -------- | ---------------------------------------------- |
| Standard | `["error", "1tbs", {"allowSingleLine": true}]` |
| Stoicism | `["error", "1tbs"]`                            |

</details>

<details>
<summary><em>Require dangling commas in multi-line expressions.</em></summary>

Dangling commas are superfluous in single-line expressions, but they are helpful
in multi-line expressions, where changes often affect only the last element. In
the Standard Style, those changes add the extra noise of comma changes, which
reduces the readability of diffs.

| Style    | [`comma-dangle`][eslint-comma-dangle]                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------------ |
| Standard | `["error", {"arrays": "never", "objects": "never", "imports": "never", "exports": "never", "functions": "never"}]` |
| Stoicism | `["error", "always-multiline"]`                                                                                    |

</details>

<details>
<summary><em>Require braces for all control flow.</em></summary>

Braces are an important visual hint of control flow blocks, and consistent usage
helps readability.

| Style    | [`curly`][eslint-curly]   |
| -------- | ------------------------- |
| Standard | `["error", "multi-line"]` |
| Stoicism | `["error", "all"]`        |

</details>

<details>
<summary><em>Disallow spaces inside object braces.</em></summary>

Spaces inside object braces (`{`/`}`) increase line length while providing a
minimal improvement to readability. Since array brackets (`[`/`]`) and
parentheses (`(`/`)`) do not generally have spaces inside, it seems more useful
to reduce the line length than to make a special case for braces.

| Style    | [`object-curly-spacing`][eslint-object-curly-spacing] |
| -------- | ----------------------------------------------------- |
| Standard | `["error", "always"]`                                 |
| Stoicism | `["error", "never"]`                                  |

</details>

<details>
<summary><em>Disallow spaces after named functions.</em></summary>

Spaces after a named function adds unnecessarily to the line length (with
function names that may already be long). Also, by treating named functions
differently, it is easier to quickly distinguish them from anonymous functions.

| Style    | [`space-before-function-paren`][eslint-space-before-function-paren]            |
| -------- | ------------------------------------------------------------------------------ |
| Standard | `["error", "always"]`                                                          |
| Stoicism | `["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}]` |

</details>

</details>

<details>
<summary><strong>This is the Prettier configuration.</strong></summary>

The Prettier configuration extends the default configuration, and we describe
the differences relative to that. Under each item, there is a motivation and a
comparison with the default [Prettier option][prettier-options].

<details>
<summary><em>Don't use spaces inside object braces.</em></summary>

Spaces inside object braces (`{`/`}`) increase line length while providing a
minimal improvement to readability. Since array brackets (`[`/`]`) and
parentheses (`(`/`)`) do not have spaces inside, it seems more useful to reduce
the line length than to make a special case for braces.

| Style    | [`bracketSpacing`][prettier-bracket-spacing] |
| -------- | -------------------------------------------- |
| Prettier | `true`                                       |
| Stoicism | `false`                                      |

</details>

<details>
<summary><em>Don't use semicolons.</em></summary>

This follows the Standard Style.

| Style    | [`semi`][prettier-semicolons] |
| -------- | ----------------------------- |
| Prettier | `true`                        |
| Stoicism | `false`                       |

</details>

<details>
<summary><em>Use single quotes.</em></summary>

This follows the Standard Style.

| Style    | [`singleQuote`][prettier-quotes] |
| -------- | -------------------------------- |
| Prettier | `false`                          |
| Stoicism | `true`                           |

</details>

<details>
<summary><em>Use trailing commas in multi-line expressions.</em></summary>

Trailing commas are helpful in multi-line expressions, where changes often
affect only the last element.

| Style    | [`trailingComma`][prettier-trailing-commas] |
| -------- | ------------------------------------------- |
| Prettier | `"es5"`                                     |
| Stoicism | `"all"`                                     |

</details>

</details>

<!-- Sections -->

## Prerequisites

In the following sections, we describe how to install `stoicism-js-style` with
[`npm`][npm-cli] and use it with [`eslint`][eslint-cli] and
[`prettier`][prettier-cli].

Alternatives include [`yarn`][yarn] instead of `npm`.

## Installation

Install `stoicism-js-style` and its peer dependencies as a [developer
dependency][npm-dependencies]:

```sh
npm install --save-dev \
  stoicism-js-style \
  eslint-plugin-standard \
  eslint-plugin-promise \
  eslint-plugin-import \
  eslint-plugin-node \
  eslint \
  prettier
```

## Usage

### Configuration

Create a file called [`.eslintrc.js`][eslint-configuration]:

```js
module.exports = require('stoicism-js-style').eslint
```

Create a file called [`.prettierrc.js`][prettier-configuration]:

```js
module.exports = require('stoicism-js-style').prettier
```

### Script

Define [scripts][npm-run-script] to run `eslint` and `prettier` on your
JavaScript:

```json
"scripts": {
  "check-js": "prettier --check '**/*.js' && eslint .",
  "format-js": "prettier --write '**/*.js' && eslint --fix ."
}
```

Run the scripts with `npm run`:

```sh
npm run check-js
npm run format-js
```

## License

[Blue Oak Model License 1.0.0][license] © [Sean Leather][author]

## Footnotes

<span id="footnote1"><b>¹</b></span> Of course, our choices are subjective, but we feel
they are well-motivated. <a href="#footnote1-source">⏎</a>

<!-- Definitions, sorted alphabetically -->

[author]: https://github.com/spl
[eslint-brace-style]: https://eslint.org/docs/rules/brace-style
[eslint-cli]: https://eslint.org/docs/user-guide/command-line-interface
[eslint-comma-dangle]: https://eslint.org/docs/rules/comma-dangle
[eslint-config-standard]: https://github.com/standard/eslint-config-standard
[eslint-configuration]: https://eslint.org/docs/user-guide/configuring#configuration-file-formats
[eslint-curly]: https://eslint.org/docs/rules/curly
[eslint-extends]: https://eslint.org/docs/user-guide/configuring#extending-configuration-files
[eslint-object-curly-spacing]: https://eslint.org/docs/rules/object-curly-spacing
[eslint-rules]: https://eslint.org/docs/rules/
[eslint-shareable-config]: https://eslint.org/docs/developer-guide/shareable-configs
[eslint-space-before-function-paren]: https://eslint.org/docs/rules/space-before-function-paren
[eslint]: https://eslint.org/
[license]: ./license.md
[npm-cli]: https://docs.npmjs.com/cli/install
[npm-dependencies]: https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file
[npm-run-script]: https://docs.npmjs.com/cli/run-script
[prettier-bracket-spacing]: https://prettier.io/docs/en/options.html#bracket-spacing
[prettier-cli]: https://prettier.io/docs/en/cli.html
[prettier-config]: https://prettier.io/docs/en/configuration.html#sharing-configurations
[prettier-configuration]: https://prettier.io/docs/en/configuration.html
[prettier-options]: https://prettier.io/docs/en/options.html
[prettier-quotes]: https://prettier.io/docs/en/options.html#quotes
[prettier-semicolons]: https://prettier.io/docs/en/options.html#semicolons
[prettier-trailing-commas]: https://prettier.io/docs/en/options.html#trailing-commas
[prettier]: https://prettier.io/
[standardjs]: https://standardjs.com/
[yarn]: https://yarnpkg.com/
