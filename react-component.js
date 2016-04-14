const reactComponent = (props, state) => {
    return document.createElement("div", null, "Hello", props.name)
}

(function() {
    reactComponent("World", null);
})()
