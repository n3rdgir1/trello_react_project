# Trello Board: React Challenge

This repo is the initial React Challenge setup... After you complete one level of the CodeSchool React Course you will complete one challenge below in this project to slowly make it a React Program.


#### CodeSchool Level 1 - First Component
Complete Level 1 of React Fundamentals courses...

#### React Challenge 1 - Create Card Component
Take a look at the index.html to see what the site is going to look like OR you can just look at this design:
<img width="100%" src="other/trello-design-1.png" />

Create a components.js file...

Create a Card Component (remember to extend the React Component Base Class)...

> With regular Javascript, we had to use HTML String to construct html elements... With React, we use JSX to construct our HTML. JSX lets us write HTML in Javascript with some additional features…

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


#### CodeSchool Level 2 - Talking Through Props
Complete Level 2 of React Fundamentals courses...

#### React Challenge 2 - Construct 2nd Component & Pass Data
Watch React LEVEL 2...

**1) Identifying Other Components**  
Name the other components you see in the below Design:
<img width="100%" src="other/trello-design-1.png" />

now, we are going to create our 2nd component... CardColumn.

**2) Create a Card Column Component**  
Again make sure it extends the React.Component base class... implement the render function based on the html that is in the index.html file. Make sure to use `<Card />` instead of the actual card html. This will use whatever the render function of your Card Component returns.

**3) Passing Props from the CardColumn Component to the Card Component**   
In the card component, pass the Card component 2 props... I bet you can guess what they are! (title and description)

Then update the Card Components render function to use those props…
calling out `{this.props.title} and {this.props.description}

**4) Use Card Data Array to display the cards**  
In the CardColumn component, create a _getCards function with a cardList array with card objects that have id, title, and description properties.

> Typically, in a React Application you would make an ajax request to the backend, where the cards would be queried and passed back to you on the FrontEnd. For now, we are just creating a cardList array to simulate the information we would get back from the ajax request.

> Wondering why this function starts with an underscore? The _functionName is just a naming convention that React uses to indicate that the function should only be accessible INSIDE the Component it is defined in.

**5) Map Object array to JSX arrays for display purposes**  
Now in the _getCards function, map over the cardList array and return JSX `<Card />` components with the props key, title, description.

> The key prop is used to make each card component unique. This becomes helpful when the user goes to interact with a card, like clicks a button on it, React will have a way to determine which card is clicked based on this key id.

**6) Use  _getCards() in CardColumn render()**  
The _getCards() function will return a list of Card components for us. So we can replace all the `<Card />` in the CardColumn render function with the returned results from the _getCards function.


#### CodeSchool Level 3 - Component State
Complete Level 3 of React Fundamentals courses...

#### React Challenge 3 -




#### CodeSchool Level 4 - Synthetic Events
Complete Level 2 of React Fundamentals courses...

#### React Challenge 4 - TBD




#### CodeSchool Level 5 - Talking To Remote Servers
Complete Level 2 of React Fundamentals courses...

#### React Challenge 5 - TBD
