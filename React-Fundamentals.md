# React Fundamentals Course - Notes

### React Component Based
```jsx
// Examples

<ProfilePic />

var ProfilePic = function(){
    return(
        <a href={this.props.name}></a>
    )
}
```

### Imperative vs Declarative Paradigm
```javascript
// Imperative (How) => like a normal loop
for(var i = 0; i < numbers.length; i++){
    total += numbers[i];
}
// Declarative (What) =>
// There is a lot of abstraction in here
numbers.reduce(function(previous,current){
    return previous + current
})
```

* Imperative: C, C++, Java
* Declarative: SQL, HTML

### Unidirectional Data Flow
```jsx
this.setState({
    highlight: !this.state.highlight,
})
```

#### Reduce is pretty cool

```javascript
var sum = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
}, 0);
```

### Modules and Webpack
```bash
npm install somePackage # install locally
npm install somePackage --save # saves it to the package.json too so it's generated when running npm install
```

* On webpack.config.js
```javascript
module.exports = {
    // entry point
  entry: './app/index.js',
  module: {
    rules: [
        // regex to modify all .coffee extensions
      { test: /\.coffee$/, use: "coffee-loader" }
    ]
  },
  output: {
      // where to output the files
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}
```

