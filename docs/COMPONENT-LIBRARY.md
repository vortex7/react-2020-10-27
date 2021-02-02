# Component Library

## Create project

```
npx create-react-app preferences-component
```

## Clean Up Folders

```
cd preferences-component
rm -rf public
rm -rf src/*
```

## Create Source Files/Folders

```
mkdir -p src/components
touch src/components/Preferences.js
touch src/index.js
touch .babelrc
```

## Edit src/components/Preferences.js

```
import React from 'react';

const Preferences = () => {
  return <h1>Preferences</h1>
}

export default Preferences;
```

## Edit src/index.js

```
export { default as Preferences } from './components/Preferences';
```

## Edit .babelrc

```
{
  "presets": ["@babel/env", "@babel/preset-react"]
}
```

## Edit rollup.config.js

```
import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        external(),
        babel({
            exclude: 'node_modules/**'
        }),
        del({ targets: ['dist/*'] }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
```

## References

https://hinammehra.medium.com/build-a-private-react-component-library-cra-rollup-material-ui-github-package-registry-1e14da93e790
