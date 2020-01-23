# Development guide

In this guide I will explain why I made choices for some techniques as well as why I omitted some techniques that I think could be useful for the app.

## My thought on the assesment
Oeehh, I kinda like this. I am delivering this to you in a state where I think can be still very much improved (as also explained here below). It does make me really enthusiastic about all the cool possibilities there are when building for RTL. I think Media & Video are really interesting parts of the webworld. I'm also very interested in seeing how RTL handles their services & the usages of a PWA.

## Used techniques

### Post CSS vs SASS / Less
CSS is !important, but doing CSS well is quite difficult. Prepocessors have made our lives easier but also needlessly complex and slow. Things like mixin's can better be handled by Javascript. So I've chosen to use a postprocessor (PostCSS) instead of a preprocessor. Most of the time I would say, if you can do it with CSS, don't do it in Javascript. But not here.

### Tailwind CSS
Doing CSS well is quite difficult. That's because the cascading part is more of a burden then actually a nice feature in this modern era. This is why a thing as OOCSS (and of smaller significance ITCSS) is really important. As CSS is renderblocking it is really important to cut down on filesize for CSS. OOCSS is the way to do that. At Wehkamp I developed the OOCSS framework from scratch because of performance reasons and the usage of microsites. But Tailwind is a modern alternative that does really well if you can purge the CSS you don't need. (I have actually omitted doing the purging here because of time reasons, although I installed the npm package).

### CSS Variables
As IE11 is now being officially dropped and replace by the new edge we can start doing some cool stuff, I demonstrated the use of CSS Variables here for 2 easy appliances, on of them is showing a background image instead of using javascript to do some calculations.

### Conditional chaining (Is?.this?.[array]?.really?.here)
New fancy trick with ES6! Not every browsers supports it yet. Although I'm quite surprised I don't need to transpile it in the newest Chrome. However that might be because of create-react-app.


## Omitted techniques

### Typescript & PropTypes



### Jest
I fully agree that testing is really important, both unit test and itegration tests are something that would be a requirement in a company like Wehkamp. But because of the short time allotted to this assessment I've chosen to skip it. If you would like to know more about my testing skills we can do this in a conversation. 

### Caching of Service Calls / Timeouts / Service hardening
For this assesment I omitted all kinds of caching for the different services. I just used a simple fetch, but of course when there is a high load on the site or service some caching is able to take place. This can either happen in the back-end (Redis for example) or with GraphQL or NodeCache (probably there are other possibilites as well).

### CSS Modules
CSS modules is the components layer in the ITCSS approach. For components that cannot stand with the objects of OOCSS I normally use CSS modules. However, this project was so small I didn't really need to style anything.

### SSR / NextJS
Server-side Rendering is actually really important for both SEO and performance. As opossed to PREACT-CLI (a nice small react alternative) create-react-app doesn't come with SSR out of the box, so I've chosen to not implement SSR for now, although it is really important in my opinion. This also speeds up service call to internal services as the fetch won't be ever made to the clients computer.

### GraphQL
GraphQL is a tricky one. It can easily be misused and it's quite on the heavy side. However, if the endpoints are also in GraphQL or the services are not tailormade but standardised with loads of data you don't need GrapgQL could be very nice to use

### Redux / Context API
I know the assesment said I need to show some skill of state management. As Kent C. Dodds described in this article [this article about state management](https://kentcdodds.com/blog/application-state-management-with-react) React is already pretty good in handling state. With the new Hooks & Context API in react I believe Redux is totally unecessary & unecessary complex. If you want to use Redux to get service data from the server side to the client side just create an object on window and use the Context API. This might be something you want to talk about ;) I'd be happy to do so

### Google Material UI / Animations
Because of time reasons I omitted animations and transition. However Tailwind CSS offers some pretty neet plugins for this, and Material UI is an excellence guid on how interacting with things like buttons shoul feel

### SVG / Icon Fonts
I would normally use Icon fonts when loads are used. But as I only used ~2 icons I chose to just use images with svg's. A downside to this is they cannot change color when hovering etc.
