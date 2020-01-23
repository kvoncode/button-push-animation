# Button push animation

## Tutorial

We use `Next.js`, `styled-components`, `normalize.css` and `anime.js` to build the project. See `package.json` for details

Styled components are used as most basic building blocks. Aside from `Next.js` specific details, let's concentrate on integrating animations with React components.

First let's track component dependency chain, starting from high level components: `StyledMain (index.jsx) -> Controls (Controls.jsx) -> AnimatedButton -> ButtonWrapper -> StyledButton`

Now let's examine components in reverse order starting from most basic.

`StyledButton` is created using `styled` function from `styled-components` library. Very useful thing about styled components is that all attributes passed to component, that created with `styled` function are automatically filtered and passed down to DOM element, including childs and `React ref`. See [docs](https://styled-components.com/docs) for details

So if we created `StyledButton` as

```
const StyledButton = styled.button`...`
```

now we can render this component as

```
<StyledButton>Some text</StyledButton>
```

and passed text will be rendered.

Also passed `React ref` will be attached to `button` DOM element. Later we will use this ref as target for `Anime.js` animations. Anime.js uses CSS classes, objects or DOM elements as targets for animation. Attaching reference is done with `ref={targetRef}`. See [React docs](https://reactjs.org/docs/refs-and-the-dom.html) for details about how to **create ref** and **use it**.

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



Most common way to render childs is:

```
<StyledButton>props.children</StyledButton>
```

this is the same as 
```
<StyledButton {props.children} ></StyledButton>
```

so we can use more general approach that not only passing children down the tree, but also passes attributes too
```
<StyledButton {...props} ></StyledButton>
```


### Animations

`Anime.js` is a good alternative to `CSS animations` or `Web animations API`. CSS animations don't have native way to make animations dynamic. For example when we want to start animation on button click, we need to create animation using CSS, apply it to CSS class, then using Javascript add event listener to click, that adds animated class to button element. This is too many connections to track

Anime.js instead uses targets to attach animation to elements, and you can then controls animation behaviour through JavaScript

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

we should pass props down next component tree with `{...props}` and add animation to `onClick` handler:

```
 onClick={e => {
    animate();
    props.onClick ? props.onClick() : "";
}}
```

So on click we both: animating button push, and running outer **on click handler** if passed
