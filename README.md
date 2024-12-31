
<div align="center">
  <img width="150" alt="holipoly-cli" src="https://user-images.githubusercontent.com/200613/221163557-797cf981-3c65-4a0b-afd3-304b6d7ac537.png">
</div>

<div align="center">
  <h1>Holipoly CLI</h1>
</div>

<div align="center">
  <p>Command-Line Interface for Holipoly</p>
</div>



**Holipoly CLI** is designed to boost your productivity and improve development experience with Holipoly and Holipoly Cloud. It will take the burden of spawning new storefronts and apps locally, managing and connecting them with Holipoly instances, or establishing tunnels for local development in seconds.

To install the latest version of Holipoly CLI, run the following command:

```
npm i -g @holipoly/cli
```

You can also use `npx` to execute the Holipoly CLI commands on the spot without installing the package.

```
npx holipoly env list
```

> If you're using `nvm`, make sure that the `NVM_BIN` path is added to `PATH`

## Getting Started with CLI

### A quick demo

If you're new to Holipoly you might want to start by bootstrapping an end-to-end local storefront development environment (and Holipoly Cloud sandbox API instance). Since it requires Cloud access, you will be asked to register to a free Holipoly Cloud developer account or log in. Then the command will automatically create your new local storefront environment and connect it to a newly created Holipoly API instance/sandbox:

```
holipoly storefront create --demo
```

### Register

If you don't have a (free developer) Holipoly Cloud account yet, create one with the following command:

```
holipoly register
```

### Login

The `holipoly` binary requires the Cloud API token that can be obtained via OAuth by running the `login` command:

```
holipoly login
```

This command will open a browser and ask for your Holipoly Cloud credentials. Once logged in, it will store your Cloud API token locally for the CLI to use.

You can now start executing any of the available commands.

Note: in order to log out you can use `holipoly logout`.

### Create a storefront

The following command will take you through the process of creating a new [react-storefront](https://github.com/holipoly/react-storefront) and configuring it with a chosen Holipoly Cloud API instance:

```
holipoly store create my-new-storefront
```

### Create an API sanbox

You can create new API endpoints by running:

```
holipoly env create
```

## Holipoly Apps management 🦄

Please check out the [Holipoly App Template](https://github.com/holipoly/holipoly-app-template) [docs](https://github.com/holipoly/holipoly-app-template#readme) for the latest documentation.

## Webhooks management

Coming soon 🔌

## Usage

```
Usage: holipoly <command> [options]

Commands:
  holipoly info                    Hello from Holipoly
  holipoly status                  Show the login status for the systems that CLI depends on
  holipoly login                   Log in to the Holipoly Cloud
  holipoly logout                  Log out from the Holipoly Cloud
  holipoly configure [token]       Configure Holipoly CLI
  holipoly register                Create a Holipoly Cloud account  [aliases: signup]
  holipoly trigger [event]         This triggers a Holipoly event
  holipoly organization [command]  [aliases: org]
  holipoly environment [command]  [aliases: env]
  holipoly backup [command]
  holipoly job [command]
  holipoly project [command]
  holipoly storefront [command]  [aliases: store]
  holipoly telemetry [command]  [aliases: tele]
  holipoly webhook [command]  [aliases: hook]
  holipoly app [command]
  holipoly vercel [command]
  holipoly github [command]
  holipoly checkout [command]

Options:
      --json             Output the data as JSON  [boolean]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

for more information, find the documentation at https://holipoly.io
```

## Development

### Install dependencies

This project uses [pnpm](https://pnpm.io) for managing dependencies

```
pnpm install
```

### Run Watch Mode

```
pnpm watch
```

### Run CLI

```
node build/cli.js ...
```

### Environment variables

`RUN_FUNCTIONAL_TESTS`

Set to `true` to enable functional tests


`DEBUG`

Use it for debugging. Set to `holipoly-cli:*` to show debug output for the Holipoly CLI only. Set to `*` to show all debug output.

## Releasing CLI

Commands should be executed locally.

### Pre-Release

- pull latest changes from `main`, e.g.

```
git pull origin main
```

- check for the type errors with `pnpm tsc`
- check if the bundling finishes `pnpm bundle`
- publishing step involves uploading source maps to Sentry, log in with `sentry-cli login` if you intend to upload source maps

### Release

- change to the selected `release-*` branch; all `release-*` branches are protected

```
git checkout release/X.Y
```

where `X` and `Y` is the selected version

- compare the commits between latest release on that branch and the current `main`

```
git log --no-merges --cherry-pick --right-only release/X.Y...main
```

- cherry pick commits for the next release following the [Trunk Based Development Approach](https://trunkbaseddevelopment.com); do not include the `merge` commits

```
git cherry-pick SHA1 SHA2 SHA3
```

where `SHA1`, `SHA2`, `SHA3` are SHAs selected to be included in the upcoming version

- mark the new version in the package.json
- commit the new release + add the tag

```
git commit -m 'Release X.Y.0'
git tag X.Y.Z
```

- push the updated release branch to the origin

```
git push origin release/X.Y
```

- push the new tag to the origin

```
git push origin --tags
```

- publish from the release branch; use the `next` tag for the `RC` version

```
pnpm publish
```

or

```
pnpm publish --tag next
```
