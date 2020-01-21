# Button push animation

## Tutorial

Project built with `Next.js`, `styled-components`, `normalize.css` and `anime.js`. See `package.json` for details

Styled components are used as building blocks. Aside from `Next.js` specific details, let's concentrate on building `AnimatedButton` component.

First let's track component dependency chain, starting from high level components. `StyledMain (index.jsx) -> Controls (Controls.jsx) -> AnimatedButton -> ButtonWrapper -> StyledButton`

Now let's examine components in reverse order starting from most basic.

`StyledButton` is created using `styled` function from `styled-components`. Interesting thing about styled components is that all attributes passed to component that created with `styled` function, are automatically filtered and passed down to DOM element, including childs and `React ref`. See [docs](https://styled-components.com/docs) for details

So if we created `StyledButton` as

```
const StyledButton = styled.button...
```

now we can render this component as

```
<StyledButton>Here goes some text</StyledButton>
```

and passed text will be rendered.

Also passed `React ref` will be attached to `button` DOM element, which is very useful for us, because we need this element to bind to animation target. `Anime js` uses DOM element as animation target.

Component rendering looks like:

```
<StyledButton
    ref={targetRef}
    {...props}
    onClick={e => {
        animate();
        props.onClick ? props.onClick() : "";
    }}
></StyledButton>
```

Attaching reference is done with `ref={targetRef}`. See [React docs](https://reactjs.org/docs/refs-and-the-dom.html) for detail about how to **create ref** and **use it**

### Animation

Animation logic is located in `AnimatedButton`. We first create animation and bind it to button for each button.

`Anime.js` timeline creation:
```
const timelineParams = { direction: "alternate", duration: 90 };
let timeline;
``` 

Binding target to DOM element using `useEffect` on initial render

```
  useEffect(() => {
    timeline = anime.timeline(timelineParams); /
  
    timeline.add({
      targets: targetRef.current,
      scale: 0.9
    });
  }, []);
```

And playing animation is actually restarting `Anime.js` timeline
```
 const animate = () => {
    timeline.restart();
  };
```

When creating button component you want it to perform some action on click, so in

```
<ButtonWrapper>
    <StyledButton
    ref={targetRef}
    {...props}
    onClick={e => {
        animate();
        props.onClick ? props.onClick() : "";
    }}
    ></StyledButton>
</ButtonWrapper>
```

we should pass props down next component tree with `{...props}`, add animation to `onClick` handler:

```
 onClick={e => {
    animate();
    props.onClick ? props.onClick() : "";
}}
```

So on click we both: animating button push, and running outer on click handler if passed
