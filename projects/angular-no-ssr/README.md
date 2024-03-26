# angular-no-ssr

## Install

```bash
yarn add angular-no-ssr
```

```bash
npm install angular-no-ssr
```

## Import

```angular
import {NoSsrModule} from 'angular-no-ssr';
```

## Usage

```angular
<div>
  <h1>SSR Website</h1>
  <no-ssr>
    <!-- this component will only be rendered on client-side -->
    <comments />
  </no-ssr>
</div>
```

### SSR placeholder

Use a directive `ssr-placeholder` until `<no-ssr />` component is mounted on client-side.

eg, show a loading indicator.

```angular
<div id="app">
  <h1>SSR Website</h1>
  <no-ssr>
    <!-- this component will only be rendered on client-side -->
    <comments />
    <ssr-placeholder>
      <!-- this component will only be rendered on server-side -->
      <loading />
    </ssr-placeholder>
  </no-ssr>
</div>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**angular-no-ssr** © [Guinard Arnaud](https://github.com/guinardA), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Guinard Arnaud with help from contributors ([list](https://github.com/guinardA/no-ssr/contributors)).

> Linkedin [Guinard Arnaud](https://fr.linkedin.com/in/arnaud-guinard-a74503a7) · GitHub [guinardA](https://github.com/guinardA)
