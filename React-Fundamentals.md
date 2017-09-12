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

### Unidirectional Data Flow
```jsx
this.setState({
    highlight: !this.state.highlight,
})
```
