# eslint-config-scm
Supply Chain Group Generic Code Specification.

Use `eslint-config-scm` to start your next project.

# Why
At present, the internal project of the group is mainly personal maintenance and development. At the time of development, some people use airbnb and elemefe config or define their own eslint file, which leads to the project coding is not unified, so provide scaffold for next new project.

# Rules
Most concerned:
- tab：`2 space`
- semicolon：`required`

# How to use
### First install dependencies

#### default
```shell
npm install --save-dev eslint babel-eslint eslint-config-scm
```

#### vue
```shell
npm install --save-dev eslint babel-eslint eslint-plugin-vue eslint-config-scm
```

#### react
```shell
npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-config-scm
```

#### angular
```shell
npm install --save-dev eslint babel-eslint eslint-config-angular eslint-config-scm
```

#### react-native
```shell
npm install --save-dev eslint babel-eslint eslint-config-react-native eslint-config-scm
```

### Then modify config file
Make a eslint config file(recommend `.eslintrc.js`) then add the following configuration:
```js
// defalut
{
  extends: 'scm'
}
```
```js
// vue
{
  extends: 'scm/vue'
}
```
```js
// react
{
  extends: 'scm/react'
}
```
```js
// angular
{
  extends: 'scm/angular'
}
```
```js
// react-native
{
  extends: 'scm/react-native'
}
```

# Contribution
If any problems are found during use, please create issue or submit PR.


