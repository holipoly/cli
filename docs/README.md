# Holipoly CLI

**Holipoly CLI** is designed to boost your productivity and improve development experience with Holipoly and Holipoly Cloud. It will take the burden of spawning new storefronts and apps locally, managing and connecting them with Holipoly instances, or establishing tunnels for local development in seconds.

## Install

with `pnpm`

```sh
$ pnpm i @holipoly/cli -g
```

or

with `npm`

```sh
$ npm i @holipoly/cli -g
```

## Usage

```sh
$ holipoly --help
```

Help output:

```
Usage: holipoly <command> [options]

Commands:
  holipoly info                    Hello from Holipoly
  holipoly status                  Show the login status for the systems that CLI depends on
  holipoly login                   Log in to the Holipoly Cloud
  holipoly logout                  Log out from the Holipoly Cloud
  holipoly example [name]          Setup an official Holipoly example locally
  holipoly register                Create a Holipoly Cloud account  [aliases: signup]
  holipoly trigger [event]         This triggers a Holipoly event
  holipoly organization [command]  Manage Holipoly Cloud organizations  [aliases: org]
  holipoly environment [command]   Manage Holipoly Cloud environments  [aliases: env]
  holipoly backup [command]        Manage Holipoly Cloud backups
  holipoly task [command]          Manage Holipoly Cloud tasks
  holipoly job [command]           Manage Holipoly Cloud tasks
  holipoly project [command]       Manage Holipoly Cloud projects
  holipoly storefront [command]    Create a Next.js Storefront  [aliases: store]
  holipoly telemetry [command]     Manage telemetry preferences  [aliases: tele]
  holipoly webhook [command]       Manage the environment's webhooks  [aliases: hook]
  holipoly app [command]           Manage Holipoly Apps
  holipoly vercel [command]        Integrate with Vercel
  holipoly github [command]        Integrate with GitHub
  holipoly open [resource]         Open resource in a browser

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

for more information, find the documentation at https://holipoly.io
```

---

## Available commands

* [info](#info)
* [status](#status)
* [login](#login)
* [logout](#logout)
* [example](#example)
* [register](#register)
* [trigger](#trigger)
* [organization](#organization)
  * [organization show](#organization-show)
  * [organization list](#organization-list)
  * [organization remove](#organization-remove)
  * [organization permissions](#organization-permissions)
  * [organization switch](#organization-switch)
* [environment](#environment)
  * [environment auth](#environment-auth)
  * [environment clear](#environment-clear)
  * [environment cors](#environment-cors)
  * [environment create](#environment-create)
  * [environment list](#environment-list)
  * [environment maintenance](#environment-maintenance)
  * [environment origins](#environment-origins)
  * [environment populate](#environment-populate)
  * [environment promote](#environment-promote)
  * [environment remove](#environment-remove)
  * [environment show](#environment-show)
  * [environment switch](#environment-switch)
  * [environment update](#environment-update)
  * [environment upgrade](#environment-upgrade)
* [backup](#backup)
  * [backup list](#backup-list)
  * [backup create](#backup-create)
  * [backup show](#backup-show)
  * [backup remove](#backup-remove)
  * [backup restore](#backup-restore)
* [task](#task)
  * [task list](#task-list)
* [job](#job)
  * [job list](#job-list)
* [project](#project)
  * [project list](#project-list)
  * [project create](#project-create)
  * [project remove](#project-remove)
  * [project show](#project-show)
* [storefront](#storefront)
  * [storefront create](#storefront-create)
* [telemetry](#telemetry)
  * [telemetry disable](#telemetry-disable)
  * [telemetry enable](#telemetry-enable)
  * [telemetry status](#telemetry-status)
* [webhook](#webhook)
  * [webhook list](#webhook-list)
  * [webhook create](#webhook-create)
  * [webhook edit](#webhook-edit)
  * [webhook update](#webhook-update)
  * [webhook dry-run](#webhook-dry-run)
* [app](#app)
  * [app list](#app-list)
  * [app install](#app-install)
  * [app uninstall](#app-uninstall)
  * [app create](#app-create)
  * [app tunnel](#app-tunnel)
  * [app token](#app-token)
  * [app permission](#app-permission)
  * [app template](#app-template)
  * [app remove](#app-remove)
* [vercel](#vercel)
  * [vercel login](#vercel-login)
* [github](#github)
  * [github login](#github-login)
* [open](#open)

### info

```sh
$ holipoly info --help
```

Help output:

```
holipoly info

Hello from Holipoly

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

### status

```sh
$ holipoly status --help
```

Help output:

```
holipoly status

Show the login status for the systems that CLI depends on

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

### login

```sh
$ holipoly login --help
```

Help output:

```
holipoly login

Log in to the Holipoly Cloud

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --token            use with headless flag, create a token at https://cloud.holipoly.io/tokens  [string]
      --headless         login without the need for a browser  [boolean] [default: false]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly login
  holipoly login --headless
  holipoly login --headless --token=TOKEN
```

### logout

```sh
$ holipoly logout --help
```

Help output:

```
holipoly logout

Log out from the Holipoly Cloud

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

### example

```sh
$ holipoly example --help
```

Help output:

```
holipoly example [name]

Setup an official Holipoly example locally

Positionals:
  name  [string] [default: "my-holipoly-app"]

Options:
      --json                            Output the data as JSON  [boolean] [default: false]
      --short                           Output data as text  [boolean] [default: false]
  -u, --instance, --url                 Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --dependencies, --deps  [boolean] [default: true]
  -t, --template, --repo, --repository  [string]
  -V, --version                         Show version number  [boolean]
  -h, --help                            Show help  [boolean]

Examples:
  holipoly example auth-sdk  Setup the auth-sdk example from holipoly/examples on GitHub
```

### register

```sh
$ holipoly register --help
```

Help output:

```
holipoly register

Create a Holipoly Cloud account

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --from-cli         specify sign up via CLI  [boolean] [default: false]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

### trigger

```sh
$ holipoly trigger --help
```

Help output:

```
holipoly trigger [event]

This triggers a Holipoly event

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --event  [string]
      --id  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

### organization

```sh
$ holipoly organization --help
```

Help output:

```
holipoly organization [command]

Manage Holipoly Cloud organizations

Commands:
  holipoly organization show [slug|organization]         Show a specific organization
  holipoly organization list                             List organizations
  holipoly organization remove [slug]                    Remove the organization
  holipoly organization permissions [slug|organization]  List organization permissions
  holipoly organization switch [slug]                    Make the provided organization the default one

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### organization show

```sh
$ holipoly organization show --help
```

Help output:

```
holipoly organization show [slug|organization]

Show a specific organization

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### organization list

```sh
$ holipoly organization list --help
```

Help output:

```
holipoly organization list

List organizations

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### organization remove

```sh
$ holipoly organization remove --help
```

Help output:

```
holipoly organization remove [slug]

Remove the organization

Positionals:
  slug  slug of the organization  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --force            skip confirmation prompt  [boolean]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### organization permissions

```sh
$ holipoly organization permissions --help
```

Help output:

```
holipoly organization permissions [slug|organization]

List organization permissions

Positionals:
  slug, organization  slug of the organization  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### organization switch

```sh
$ holipoly organization switch --help
```

Help output:

```
holipoly organization switch [slug]

Make the provided organization the default one

Positionals:
  slug  slug of the organization  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

### environment

```sh
$ holipoly environment --help
```

Help output:

```
holipoly environment [command]

Manage Holipoly Cloud environments

Commands:
  holipoly environment auth [key|environment]         Manage basic auth for a specific environment
  holipoly environment clear <key|environment>        Clear database for an environment
  holipoly environment cors [key|environment]         Manage environment's CORS
  holipoly environment create [name]                  Create a new environment
  holipoly environment list                           List environments
  holipoly environment maintenance [key|environment]  Enable or disable maintenance mode in a specific environment
  holipoly environment origins [key|environment]      Manage the environment's trusted client origins
  holipoly environment populate [key|environment]     Populate database for an environment
  holipoly environment promote [key|environment]      Promote environment to production
  holipoly environment remove [key|environment]       Delete an environment
  holipoly environment show [key|environment]         Show a specific environment
  holipoly environment switch [key|environment]       Make the provided environment the default one
  holipoly environment update [key|environment]       Update the name of the environment
  holipoly environment upgrade [key|environment]      Upgrade a Holipoly version in a specific environment

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### environment auth

```sh
$ holipoly environment auth --help
```

Help output:

```
holipoly environment auth [key|environment]

Manage basic auth for a specific environment

Positionals:
  key, environment  key of the environment  [string]

Options:
      --json              Output the data as JSON  [boolean] [default: false]
      --short             Output data as text  [boolean] [default: false]
  -u, --instance, --url   Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --login             basic auth login of the environment  [string]
      --password, --pass  basic auth password of the environment  [string]
      --disable           disable basic auth for the environment  [boolean]
  -V, --version           Show version number  [boolean]
  -h, --help              Show help  [boolean]

Examples:
  holipoly env auth
  holipoly env auth my-environment
  holipoly env auth my-environment --login=holipoly --password=holipoly
  holipoly env auth my-environment --disable
```

#### environment clear

```sh
$ holipoly environment clear --help
```

Help output:

```
holipoly environment clear <key|environment>

Clear database for an environment

Positionals:
  key, environment  key of the environment  [string] [required]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly env clear my-environment
  holipoly env clear my-environment --organization="organization-slug"
```

#### environment cors

```sh
$ holipoly environment cors --help
```

Help output:

```
holipoly environment cors [key|environment]

Manage environment's CORS

Positionals:
  key, environment  key of the environment  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --all              All origins are allowed  [boolean]
      --dashboard        Only dashboard is allowed  [boolean]
      --selected         Only specified origins are allowed  [array]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly env cors
  holipoly env cors my-environment --all
  holipoly env cors my-environment --dashboard
  holipoly env cors my-environment --selected="https://example.com"
```

#### environment create

```sh
$ holipoly environment create --help
```

Help output:

```
holipoly environment create [name]

Create a new environment

Positionals:
  name  name for the new environment  [string]

Options:
      --json                  Output the data as JSON  [boolean] [default: false]
      --short                 Output data as text  [boolean] [default: false]
  -u, --instance, --url       Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --project               create this environment in this project  [string]
      --database              specify how to populate the database  [string]
      --holipoly              specify the Holipoly version  [string]
      --domain                specify the domain for the environment  [string]
      --login                 specify the API Basic Auth login  [string]
      --pass                  specify the API Basic Auth password  [string]
      --restore-from          specify snapshot id to restore the database from  [string]
      --skip-webhooks-update  use with `restore-from` option, skip webhooks update prompt when restoring from snapshot  [boolean]
      --skip-restrict         skip Basic Auth restriction prompt  [boolean]
  -V, --version               Show version number  [boolean]
  -h, --help                  Show help  [boolean]

Examples:
  holipoly env create my-environment
  holipoly env create my-environment --project="project-name" --database="sample" --holipoly="holipoly-master-staging" --domain="project-domain" --skip-restrict
  holipoly env create my-environment --organization="organization-slug" --project="project-name" --database="sample" --holipoly="holipoly-master-staging" --domain="project-domain" --skip-restrict
```

#### environment list

```sh
$ holipoly environment list --help
```

Help output:

```
holipoly environment list

List environments

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --extended         show extended table  [boolean] [default: false]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### environment maintenance

```sh
$ holipoly environment maintenance --help
```

Help output:

```
holipoly environment maintenance [key|environment]

Enable or disable maintenance mode in a specific environment

Positionals:
  key, environment  key of the environment  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --enable           enable maintenance mode  [boolean]
      --disable          disable maintenance mode  [boolean]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly env maintenance
  holipoly env maintenance my-environment
  holipoly env maintenance my-environment --enable
  holipoly env maintenance my-environment --disable
```

#### environment origins

```sh
$ holipoly environment origins --help
```

Help output:

```
holipoly environment origins [key|environment]

Manage the environment's trusted client origins

Positionals:
  key, environment  key of the environment  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --origins          Allowed domains  [array]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly env origins
  holipoly env origins my-environment --origins=https://trusted-origin.com
```

#### environment populate

```sh
$ holipoly environment populate --help
```

Help output:

```
holipoly environment populate [key|environment]

Populate database for an environment

Positionals:
  key, environment  key of the environment  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### environment promote

```sh
$ holipoly environment promote --help
```

Help output:

```
holipoly environment promote [key|environment]

Promote environment to production

Positionals:
  key, environment  key of the environment  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --holipoly         specify the Holipoly version  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### environment remove

```sh
$ holipoly environment remove --help
```

Help output:

```
holipoly environment remove [key|environment]

Delete an environment

Positionals:
  key, environment  key of the environment  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --force            skip confirmation prompt  [boolean]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### environment show

```sh
$ holipoly environment show --help
```

Help output:

```
holipoly environment show [key|environment]

Show a specific environment

Positionals:
  key, environment  key of the environment  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### environment switch

```sh
$ holipoly environment switch --help
```

Help output:

```
holipoly environment switch [key|environment]

Make the provided environment the default one

Positionals:
  key, environment  key of the environment  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### environment update

```sh
$ holipoly environment update --help
```

Help output:

```
holipoly environment update [key|environment]

Update the name of the environment

Positionals:
  key, environment  key of the environment  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --name             name of the environment  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly env update
  holipoly env update my-environment
  holipoly env update my-environment --name=renamed-env
```

#### environment upgrade

```sh
$ holipoly environment upgrade --help
```

Help output:

```
holipoly environment upgrade [key|environment]

Upgrade a Holipoly version in a specific environment

Positionals:
  key, environment  key of the environment  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

### backup

```sh
$ holipoly backup --help
```

Help output:

```
holipoly backup [command]

Manage Holipoly Cloud backups

Commands:
  holipoly backup list                      List backups of the organization
  holipoly backup create [name]             Create a new backup
  holipoly backup show [backup|backup-key]  Show a specific backup
  holipoly backup remove <key|backup>       Remove the backup
  holipoly backup restore [from]            Restore a specific backup

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### backup list

```sh
$ holipoly backup list --help
```

Help output:

```
holipoly backup list

List backups of the organization

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --name             filter the output for name for backup  [string]
      --latest           show only the latest backup  [boolean] [default: false]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly backup list
  holipoly backup list --organization="organization-slug"
```

#### backup create

```sh
$ holipoly backup create --help
```

Help output:

```
holipoly backup create [name]

Create a new backup

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --name             name for the new backup  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly backup create
  holipoly backup create my-backup --organization="organization-slug"
```

#### backup show

```sh
$ holipoly backup show --help
```

Help output:

```
holipoly backup show [backup|backup-key]

Show a specific backup

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly backup show
  holipoly backup show
  holipoly backup show backup-key
  holipoly backup show backup-key --organization="organization-slug"
```

#### backup remove

```sh
$ holipoly backup remove --help
```

Help output:

```
holipoly backup remove <key|backup>

Remove the backup

Positionals:
  key, backup  key of the backup  [string] [required]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --force            skip confirmation prompt  [boolean]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly backup remove
  holipoly backup remove backup-key --force
  holipoly backup remove backup-key --force --organization="organization-slug"
```

#### backup restore

```sh
$ holipoly backup restore --help
```

Help output:

```
holipoly backup restore [from]

Restore a specific backup

Options:
      --json                  Output the data as JSON  [boolean] [default: false]
      --short                 Output data as text  [boolean] [default: false]
  -u, --instance, --url       Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --from                  the key of the snapshot  [string]
      --skip-webhooks-update  skip webhooks update prompt  [boolean]
  -V, --version               Show version number  [boolean]
  -h, --help                  Show help  [boolean]

Examples:
  holipoly backup restore
  holipoly backup restore --from="backup-key" --skip-webhooks-update
  holipoly backup restore --from="backup-key" --skip-webhooks-update --organization="organization-slug" --environment="env-id-or-name"
```

### task

```sh
$ holipoly task --help
```

Help output:

```
holipoly task [command]

Manage Holipoly Cloud tasks

Commands:
  holipoly task list  List tasks

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### task list

```sh
$ holipoly task list --help
```

Help output:

```
holipoly task list

List tasks

Options:
      --json                        Output the data as JSON  [boolean] [default: false]
      --short                       Output data as text  [boolean] [default: false]
  -u, --instance, --url             Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --env  [string]
      --page                        A page number within the paginated result set  [number]
      --page-size, --page_size      Number of results to return per page  [number]
      --is-blocking, --is_blocking  Filter by non/blocking tasks  [boolean]
      --status                      Filter by status: active, completed, failed, successful  [string]
  -V, --version                     Show version number  [boolean]
  -h, --help                        Show help  [boolean]

Examples:
  holipoly task list
  holipoly task list my-environment --page=2
  holipoly task list my-environment --page-size=100
  holipoly task list my-environment --is-blocking
  holipoly task list my-environment --status=active
```

### job

```sh
$ holipoly job --help
```

Help output:

```
holipoly job [command]

Manage Holipoly Cloud tasks

Commands:
  holipoly job list  List tasks

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### job list

```sh
$ holipoly job list --help
```

Help output:

```
holipoly job list

List tasks

Options:
      --json                        Output the data as JSON  [boolean] [default: false]
      --short                       Output data as text  [boolean] [default: false]
  -u, --instance, --url             Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --env  [string]
      --page                        A page number within the paginated result set  [number]
      --page-size, --page_size      Number of results to return per page  [number]
      --is-blocking, --is_blocking  Filter by non/blocking tasks  [boolean]
      --status                      Filter by status: active, completed, failed, successful  [string]
  -V, --version                     Show version number  [boolean]
  -h, --help                        Show help  [boolean]

Examples:
  holipoly task list
  holipoly task list my-environment --page=2
  holipoly task list my-environment --page-size=100
  holipoly task list my-environment --is-blocking
  holipoly task list my-environment --status=active
```

### project

```sh
$ holipoly project --help
```

Help output:

```
holipoly project [command]

Manage Holipoly Cloud projects

Commands:
  holipoly project list            List projects
  holipoly project create [name]   Create a new project
  holipoly project remove [slug]   Remove the project
  holipoly project show [project]  Show a specific project

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### project list

```sh
$ holipoly project list --help
```

Help output:

```
holipoly project list

List projects

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### project create

```sh
$ holipoly project create --help
```

Help output:

```
holipoly project create [name]

Create a new project

Positionals:
  name  name for the new backup  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --plan             specify the plan  [string]
      --region           specify the region  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### project remove

```sh
$ holipoly project remove --help
```

Help output:

```
holipoly project remove [slug]

Remove the project

Positionals:
  slug  slug of the project  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --force            skip confirmation prompt  [boolean]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### project show

```sh
$ holipoly project show --help
```

Help output:

```
holipoly project show [project]

Show a specific project

Positionals:
  project  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

### storefront

```sh
$ holipoly storefront --help
```

Help output:

```
holipoly storefront [command]

Create a Next.js Storefront

Commands:
  holipoly storefront create [name]  Bootstrap example [name]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### storefront create

```sh
$ holipoly storefront create --help
```

Help output:

```
holipoly storefront create [name]

Bootstrap example [name]

Positionals:
  name  [string] [default: "holipoly-storefront"]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --demo             specify demo process  [boolean] [default: false]
      --environment      specify environment id  [string]
  -t, --template  [string] [default: "holipoly/storefront"]
  -b, --branch  [string] [default: "canary"]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

### telemetry

```sh
$ holipoly telemetry --help
```

Help output:

```
holipoly telemetry [command]

Manage telemetry preferences

Commands:
  holipoly telemetry disable  Disable the telemetry
  holipoly telemetry enable   Enable the telemetry
  holipoly telemetry status   Show the telemetry status  [default]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### telemetry disable

```sh
$ holipoly telemetry disable --help
```

Help output:

```
holipoly telemetry disable

Disable the telemetry

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### telemetry enable

```sh
$ holipoly telemetry enable --help
```

Help output:

```
holipoly telemetry enable

Enable the telemetry

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### telemetry status

```sh
$ holipoly telemetry status --help
```

Help output:

```
holipoly telemetry status

Show the telemetry status

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

### webhook

```sh
$ holipoly webhook --help
```

Help output:

```
holipoly webhook [command]

Manage the environment's webhooks

Commands:
  holipoly webhook list     List webhooks for an environment
  holipoly webhook create   Create a new webhook
  holipoly webhook edit     Edit a webhook
  holipoly webhook update   Update webhooks for an environment
  holipoly webhook dry-run  Webhook dry run

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### webhook list

```sh
$ holipoly webhook list --help
```

Help output:

```
holipoly webhook list

List webhooks for an environment

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### webhook create

```sh
$ holipoly webhook create --help
```

Help output:

```
holipoly webhook create

Create a new webhook

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### webhook edit

```sh
$ holipoly webhook edit --help
```

Help output:

```
holipoly webhook edit

Edit a webhook

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### webhook update

```sh
$ holipoly webhook update --help
```

Help output:

```
holipoly webhook update

Update webhooks for an environment

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### webhook dry-run

```sh
$ holipoly webhook dry-run --help
```

Help output:

```
holipoly webhook dry-run

Webhook dry run

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --object-id        Object ID to perform dry run on  [string]
      --query            Subscription query  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly webhook dry-run
  holipoly webhook dry-run --query='subscription { event { ... on ProductCreated { product { id name } } } }'
  holipoly webhook dry-run --object-id='UHJvZHVjdDo3Mg=='
```

### app

```sh
$ holipoly app --help
```

Help output:

```
holipoly app [command]

Manage Holipoly Apps

Commands:
  holipoly app list                List installed Holipoly Apps for an environment
  holipoly app install             Install a Holipoly App by URL
  holipoly app uninstall <app-id>  Uninstall a Holipoly App by ID. You need to provide `appId`. List available apps and their IDs with `holipoly app list`.
  holipoly app create [name]       Create a new Holipoly Local App
  holipoly app tunnel [port]       Expose your Holipoly app remotely with ngrok tunnel
  holipoly app token               Create a Holipoly App token
  holipoly app permission          Add or remove permission for a Holipoly App
  holipoly app template [name]     Create an App with Holipoly App Template
  holipoly app remove [app-id]     Create a new Holipoly Local App

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### app list

```sh
$ holipoly app list --help
```

Help output:

```
holipoly app list

List installed Holipoly Apps for an environment

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly app list
```

#### app install

```sh
$ holipoly app install --help
```

Help output:

```
holipoly app install

Install a Holipoly App by URL

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --via-dashboard  [boolean] [default: false]
      --app-name         Application name  [string]
      --manifest-URL     Application Manifest URL  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly app install --manifest-URL="https://my-holipoly-app.com/api/manifest
  holipoly app install --manifest-URL="https://my-holipoly-app.com/api/manifest --app-name="Holipoly app"
  holipoly app install --organization="organization-slug" --environment="env-id-or-name" --app-name="Holipoly app" --manifest-URL="https://my-holipoly-app.com/api/manifest"
```

#### app uninstall

```sh
$ holipoly app uninstall --help
```

Help output:

```
holipoly app uninstall <app-id>

Uninstall a Holipoly App by ID. You need to provide `appId`. List available apps and their IDs with `holipoly app list`.

Positionals:
  app-id  The Holipoly App id  [string] [required]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly app uninstall app-id
  holipoly app uninstall app-id --organization="organization-slug" --environment="env-id-or-name"
```

#### app create

```sh
$ holipoly app create --help
```

Help output:

```
holipoly app create [name]

Create a new Holipoly Local App

Positionals:
  name  name for the new Local App  [string]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --permissions      The array of permissions  [array]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly app create --name="my holipoly app" --permissions=MANAGE_USERS --permissions=MANAGE_STAFF
  holipoly app create --name="my holipoly app" --organization="organization-slug" --environment="env-id-or-name" --permissions=MANAGE_USERS --permissions=MANAGE_STAFF
```

#### app tunnel

```sh
$ holipoly app tunnel --help
```

Help output:

```
holipoly app tunnel [port]

Expose your Holipoly app remotely with ngrok tunnel

Positionals:
  port  [number] [default: 3000]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --name             The application name for installation in the Dashboard  [string]
      --force-install    Force the Holipoly App Install  [boolean] [default: false]
      --manifest-path    The application's manifest path  [string] [default: "/api/manifest"]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly app tunnel --name="Custom name"
  holipoly app tunnel --force-install
  holipoly app tunnel --manifest-path="/app/manifest"
  holipoly app tunnel --organization="organization-slug" --environment="env-id-or-name"
```

#### app token

```sh
$ holipoly app token --help
```

Help output:

```
holipoly app token

Create a Holipoly App token

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --app-id           The Holipoly App id  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly app token
  holipoly app token --app-id="app-id"
  holipoly app token --app-id="app-id=" --organization="organization-slug" --environment="env-id-or-name"
```

#### app permission

```sh
$ holipoly app permission --help
```

Help output:

```
holipoly app permission

Add or remove permission for a Holipoly App

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --app-id           The Holipoly App id  [string]
      --permissions      The array of permissions  [array]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly app permission --app-id="app-id" --permissions=MANAGE_USERS --permissions=MANAGE_STAFF
  holipoly app permission --organization="organization-slug" --environment="env-id-or-name" --app-id="app-id" --permissions=MANAGE_USERS --permissions=MANAGE_STAFF
```

#### app template

```sh
$ holipoly app template --help
```

Help output:

```
holipoly app template [name]

Create an App with Holipoly App Template

Positionals:
  name  [string] [default: "my-holipoly-app"]

Options:
      --json                            Output the data as JSON  [boolean] [default: false]
      --short                           Output data as text  [boolean] [default: false]
  -u, --instance, --url                 Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --dependencies, --deps  [boolean] [default: true]
  -t, --template, --repo, --repository  [string] [default: "holipoly/holipoly-app-template"]
  -b, --branch  [string] [default: "main"]
  -e, --example  [string]
  -V, --version                         Show version number  [boolean]
  -h, --help                            Show help  [boolean]
```

#### app remove

```sh
$ holipoly app remove --help
```

Help output:

```
holipoly app remove [app-id]

Create a new Holipoly Local App

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
      --app-id           The Holipoly App id  [string]
      --force            skip confirmation prompt  [boolean]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly app remove
  holipoly app remove --app-id="app-id" --environment="env-id-or-name" --force
```

### vercel

```sh
$ holipoly vercel --help
```

Help output:

```
holipoly vercel [command]

Integrate with Vercel

Commands:
  holipoly vercel login  Add integration for Holipoly CLI

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### vercel login

```sh
$ holipoly vercel login --help
```

Help output:

```
holipoly vercel login

Add integration for Holipoly CLI

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

### github

```sh
$ holipoly github --help
```

Help output:

```
holipoly github [command]

Integrate with GitHub

Commands:
  holipoly github login  Add integration for Holipoly CLI

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

#### github login

```sh
$ holipoly github login --help
```

Help output:

```
holipoly github login

Add integration for Holipoly CLI

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]
```

### open

```sh
$ holipoly open --help
```

Help output:

```
holipoly open [resource]

Open resource in a browser

Positionals:
  resource  [string] [choices: "dashboard", "api", "docs", "docs/api", "docs/apps", "docs/webhooks", "docs/storefront", "docs/cli"]

Options:
      --json             Output the data as JSON  [boolean] [default: false]
      --short            Output data as text  [boolean] [default: false]
  -u, --instance, --url  Holipoly instance API URL (must start with the protocol, i.e. https:// or http://)  [string]
  -V, --version          Show version number  [boolean]
  -h, --help             Show help  [boolean]

Examples:
  holipoly open dashboard  Open instance dashboard
  holipoly open api        Open instance GraphQL endpoint
  holipoly open docs       Open Holipoly documentation page
```