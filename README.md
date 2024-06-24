# Radashi

<div align="center">
  <p align="center">
    <img src="https://github.com/radashi-org/radashi/raw/main/img/banner.png" alt="Radashi" width="100%" />
  </p>
</div>

- **What is this?**  
  Radashi, pronounced /raw-dash-ee/, is a modern, zero-dependency JavaScript utility toolkit built with TypeScript for type-safe, readable, and maintainable code. Radashi omits functions that have become obsolete in Lodash and introduces innovative tools for improved error handling, asynchronous operations, and data manipulation. With a focus on readability and maintainability, Radashi ensures that its source code is easy to understand and use, making it simple for developers to copy individual functions directly from GitHub if needed. Radashi is the go-to toolkit for cleaner, more efficient code in today's JavaScript ecosystem.

- **Is this related to Radash?**  
  Yes! This is a fork of the renowned [`radash`](https://github.com/sodiray/radash) library by Ray Epps [@sodiray](https://github.com/sodiray). This fork aims to be a more consistently maintained version of the library, with bug fixes and improvements.

- **Are my contributions welcome?**  
  Yes! Pull requests are encouraged, but please keep them small and focused. Sweeping changes are discouraged and won't be merged (unless the rationale's been thoroughly discussed).

  Please review _“The ethos of Radashi”_ before submitting a pull request:

  <a href="https://github.com/orgs/radashi-org/discussions/20">
    <img src="https://github.com/radashi-org/radashi/raw/main/img/ethos-button.png" alt="The ethos of Radashi" width="200px" />
  </a>

- **Can I help you maintain this?**  
  Yes! I'll add you as a contributor to the repository. You can review pull requests and even merge them. You can help with closing issues, too. Committing directly to the main branch is a privilege you can earn, as is publishing versions to NPM.

  <a href="https://github.com/orgs/radashi-org/discussions/4">
    <img src="https://github.com/radashi-org/radashi/raw/main/img/apply-button.png" alt="Apply to join the Radashi team" width="200px" />
  </a>

- **Is backwards compatibility a goal?**  
  Yes! We want the transition from `radash` to this library to be smooth. We'll make sure to avoid breaking changes. If any are made, they will be clearly documented at the bottom of this page.

- **Is there official documentation?**  
  Currently, there is no documentation beyond this page. I will get to it eventually, but for now, you can refer to the original `radash` documentation.

  <a href="https://radash-docs.vercel.app">
    <img src="https://github.com/radashi-org/radashi/raw/main/img/docs-button.png" alt="Radash documentation" width="200px" />
  </a>

- **Automatic releases**  
  To ensure contributions are quickly rolled out, we have the following automatic processes:

  - **Beta releases**  
    Whenever the `main` branch receives a fix or feature, a beta release is automatically published to NPM.
    Installing `radashi@beta` will always fetch the latest beta release. Beta releases are always audited by the Radashi team.

  - **Preview releases**  
    When the _owner of a PR_ comments `/publish` (and nothing more), the PR is published to NPM under a version like `1.0.0-pr123.f7a9c3b` (i.e. `<latest version>-pr<PR number>.<commit SHA>`) and a tag like `pr123`. This allows the community to use the changes in the PR without waiting for the PR to be merged.

    - ⚠️ **Beware:** Preview releases are not audited by the Radashi team. Always look at their
      changes in the PR to ensure no malicious code was introduced.

&nbsp;

## Install

```sh
pnpm add radashi
```

```sh
yarn add radashi
```

```sh
npm install radashi
```

&nbsp;

## Contributing

Contributions are welcome and appreciated! Check out the contributing guide before you dive in:

<a href="https://github.com/radashi-org/radashi/raw/main/.github/contributing.md">
  <img src="https://github.com/radashi-org/radashi/raw/main/img/contributing-button.png" alt="Contributing to Radashi" width="200px" />
</a>

&nbsp;

## Changelog

This section documents the changes between the original `radash` library and this fork.

### 12.1.0

- Initial release. No differences.

&nbsp;

<div align="center">
  <p align="center">
    <img src="https://github.com/radashi-org/radashi/raw/main/img/footer.png" alt="Radashi" width="100%" />
  </p>
</div>
