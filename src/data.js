const questions = [
  {
    id: 1,
    title: ' Differentiate between Real DOM and Virtual DOM?',
    info:
      'A virtual DOM object has the same properties as a real DOM object, but it lacks the real things power to directly change what is on the screen. Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen.',
  },
  {
    id: 2,
    title: 'What is React?',
    info:
      'React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application’s view layer. In Model View Controller (MVC) architecture, the view layer is responsible for how the app looks and feels. React was created by Jordan Walke, a software engineer at Facebook.',
  },
  {
    id: 3,
    title: 'What are the features of React?',
    info:
      'It uses the virtual DOM instead of the real DOM.It uses server-side rendering.It follows uni-directional data flow or data binding.',
    },
  {
    id: 4,
    title: 'List some of the major advantages of React?',
    info:
      ' t increases the application’s performance/ It can be conveniently used on the client as well as server side /Because of JSX, code’s readability increases/ React is easy to integrate with other frameworks like Meteor, Angular, etc/ Using React, writing UI test cases become extremely easy',
  },
  {
    id: 5,
    title: 'What are the limitations of React?',
    info:
       'React is just a library, not a full-blown framework/ Its library is very large and takes time to understand/ It can be little difficult for the novice programmers to understand/ Coding gets complex as it uses inline templating and JSX',
  },
];
export default questions;
