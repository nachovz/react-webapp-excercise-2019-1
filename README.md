# WebApp boilerplate with React and Cloud 9

Requirements: Make sure you are using node version 8
* `$ node -v` to check which node version you are using
* `$ nvm use 8` to switch to using version 8
* `$ nvm install 8` to install version 8 if necessary

##### Fork and Clone this repository
```
https://github.com/nachovz/react-webapp-excercise-2019-1
```

##### and install the npm package:
```
$ npm install
```

## Start coding! 

Start the webpack server with live reload:
- `$ npm run c9` for Cloud 9 Users.
- `$ npm run dev-server` for windows, mac or linux.

### Styles
You can update the `styles/index.scss` or `js/index.js` depending on your needs.

### Components
Add more files into your `./src/js/components` or styles folder as you need them.

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/store.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)

The `Context.Provider` is already set, you can use the `Context.Consumer` to get the `store` and `actions` from the Context. Check `/views/demo.jsx` to see a demo.

## Publish your website! 

This boilerplate is 100% compatible with the free github pages hosting.
To publish your website you need to push your code to your github repository and run the following command after:
```sh
$ npm run deploy
```
Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)




# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Multi view Website with React 

Technologies: HTML, CSS, JS, React, react-router, react context.

Enough with the landing pages and single view projects, it is time to build our first web app. 

This is a collaborative project, the class will be separated in 4 groups and each will create a piece of a multi view website.

### Pieces/Groups:

- NavBar/Footer/Login View (Session: GABE, DAPH) |
https://getbootstrap.com/docs/4.1/examples/carousel/ & https://getbootstrap.com/docs/4.1/examples/sign-in/
- Landing Page with Carousel (Products and Posts: MEL, SAS) | 
https://getbootstrap.com/docs/4.1/examples/carousel/
- Blog/Post View (Posts: GLO, SAL) | 
https://getbootstrap.com/docs/4.1/examples/blog/
- Store/Checkout (Products: CAM, YUS) | 
https://getbootstrap.com/docs/4.1/examples/product/ & https://getbootstrap.com/docs/4.1/examples/checkout/

### This project is meant to be done in two phases

#### Phase 1: set the views. React Router.

Each group will have to create the correspondant ***view component*** with dummy content (initially) and as many "smaller" components as needed.

Note: Think DRY (Don't repeat yourself) and declare only ***one*** component and use ```props``` to handle different content.

#### Phase 2: make the app dynamic. React Context.

Each group must use the Consumer given by the instructor in order to ***use the store to fill the content*** of the pieces:

- Navbar: must show the user's username and picture (assume the user is logged in).
- Login: show the login form.
- Landing Page: must show 3 posts in the carousel, 3 post in a grid and 3 products in the products section.
- Blog: must show 6 blog posts
- Post View: must show clicked post details.

##### Using the Context

The `store` structure:

```javascript
store = {
    posts:[
        {
            title: 'This is a World Post',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
            date: 'Oct 15',
            tags: ['World'],
            author: 'Denise A',
            image: 'https://venturebeat.com/wp-content/uploads/2015/09/Screen-Shot-2015-09-03-at-13.43.14-e1441259794560.png',
            thumbnail: 'https://media.takealot.com/covers_tsins/50045787/50045787-1-listgrid.jpg'
        },
        ...
    ],
    
    products:[
        {
            name: 'Vintage Phone',
            image: 'https://images.pexels.com/photos/9165/hand-top-white-old.jpg?auto=compress&cs=tinysrgb&h=500&w=500',
            price: 300.67,
            description: 'Embrace nostagia with a brand new flip phone'
        },
        ...
    ],
    
    session:{
        username:'Rigo',
        email: 'rigocodes@gmail.com',
        loggedIn: false
    },
    
    cart:[
        {
            name: 'Polaroid Camera',
            image: 'https://images.pexels.com/photos/191160/pexels-photo-191160.jpeg?auto=compress&cs=tinysrgb&h=500&w=500',
            price: 129.99,
            description: 'Get instant photos'
        },
        ...
    ]
};
```

In order to have access to the global data, you'll have to import the context's main file: 
```jsx
import {Context} from '/path/to/store/appContext.jsx';

...

//Then use the Consumer within the render method
    render(){
        return(
            <Context.Consumer>
                {
                    ({store}) => {
                        //Then you can use the data structure within store into 
                        return (<span> hello, {store.session.username} </span>);
                        
                    }
                }
            </Context.Consumer>
        );
    }
...

```

Hint: you can see an example of the ```Context.Consumer``` in action at: 

```
demo.jsx
 - demoList.jsx
 - demoProducts.jsx
```

### How to start?

##### 1. Clone the instructor's initial repository
```
$ git clone <repository_url>
```
##### 2. Install the /node_modules
```
$ npm install
```
##### 3. Run the webpack development server
```
$ npm run c9
```

Done!
*tap* *tap* *tap* (Start coding!)
