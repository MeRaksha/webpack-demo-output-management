# webpack-demo-output-management
#### _demo for outputting multiple bundles using webpack, dynamically adding bundles to our HTML and cleaning up the output folder._

### dynamically adding bundles to our HTML
the HtmlWebpackPlugin by default will generate its own index.html and place it in the output path configured in the webpack config file.
```sh
npm install --save-dev html-webpack-plugin
```

in the webpack.config.js add the html-webpack-plugin:

```sh
  const HtmlWebpackPlugin = require('html-webpack-plugin');
```

down in the plugins configuration array add this plugin:

```sh
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
```

### cleaning up the output folder and outputting multiple bundles

In general it's good practice to clean the output folder before each build, so that only used files will be generated. It is take care of that with <code>output.clean</code> option in the webpack config.

webpack.config.js output configuration

```sh
output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
    clean: true,
   },
```

## To run the demo:

- npm install
- npm run build
- npm serve
