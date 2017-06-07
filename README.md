# Trello Board: React Challenge

This repo is the initial React Challenge setup... After you complete one level of the CodeSchool React Course you will complete one challenge below in this project to slowly make it a React Program.


#### CodeSchool Level 1 - Components
Complete Level 1 of React Fundamentals courses...

#### React Challenge - Create Card Component
Take a look at the index.html to see what the site is going to look like...  

Create a components.js file...

Create a Card Component (remember to extend the React Component Base Class)...

> With regular Javascript, we had to use HTML String to construct html elements... With React, we use JSX to construct our HTML. JSX lets us write HTML in JSX with some additional features…

Create a render function in the Card Component Class with the appropriate HTML used to generate each card...
> Remember *class* is a reserved word in Javascript so we have to use className=“” instead of class=“” in each of our html elements

Render react component to it’s appropriate place in the DOM with the ReactDOM.render() function
which takes the following parameters:  
1) JSX component of the class  
2) the target element of where to place the Component

> JSX makes it easier to create HTML in Javascript because it lets us combine HTML and Javascript, rather than having us construct strings...
{} -> literal javascript

For Example: remember when we had to do this...

```
var behaviorItem = ‘<div class=“behavior”>’ +
    ‘<div class=“name”>’ + behavior.name + ‘</div>’ +
    ‘<div class=“value”>’ + behavior.value + ‘</div>’ +
‘</div>’;

$(‘behavior-list’).html(behaviorItem);
```

... well now we can just do this...

```
return (
    <div>
        <div className=“name”>{ behavior.name }</div>
        <div className=“value”>{ behavior.value }</div>
    </div>
);
```

...much more readable, a lot less addition signs and a lot less quotes!
