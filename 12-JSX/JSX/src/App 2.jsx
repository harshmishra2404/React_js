import React from 'react'
import Headear from './Headear'

const App = () => {
  let name = "Harsh Rakesh Mishra"

  function Greet() {
    return ', hello aap kaise hoo'
  }
  let age = 19;

  let admin = true

  const fruits = ["Apple", "Mango", "Banana"]

  const Avengers = ["Iron Man", "Captain America", "Wanda", "Thor", "Hulk"]

  let product1 = true

  let elem = <p>Hello Bahi Kaise hoo aap sab</p>

  let user = {
    name: 'Harsh Mishra',
    age: 24
  }

  return (
    <div>
      <h1>Introducing JSX</h1>
      <p>
        JSX = HTML + JS <br />
        ReactJS look like HTML but react like JS <br />
        JSX is a syntax extension for JS used in React <br />
        JSX let you write HTML like code inside JS <br />
      </p>
      <h1>Embedding Expression</h1> <br />
      <h1>{name} {Greet()}  </h1> <br />
      <h1>{age > 18 ? 'Yess can Vote' : "No Can't Vote"}</h1> <br />
      <h1>{2 + 4}</h1>

      <h2 style={{ backgroundColor: 'red', color: 'black', fontSize: '60px', borderRadius: '30px' }}>
        Note :- Only Valid Expression is allowed <br />
        example :- Function, Variable, Mathematical Expression , Ternary Expression <br />
        Statment Like If, If-Else, Else-IF , for Loop is not allowed
      </h2>

      <div>
        {
          admin
            ? <h1 style={{ color: 'green' }}>Yes Logged In</h1>
            : <h1 style={{ color: 'red' }}>Not Logged In</h1>
        }
      </div>

      <div>
        {
          fruits.map((fruit, index) => (
            <h1 key={index}>{fruit}</h1>
          ))
        }
      </div>

      {product1 && <h1>Out Off Stock</h1>}

      <div>
        {
          Avengers.map((index, avengers) => (
            <h1 key={avengers}>{index}</h1>
          )
          )
        }
      </div>

      <Headear title="Hello form app" />
      <Headear Elem={elem} />


      <div>
        <h1 style={{ fontFamily: 'ui-sans-serif', fontSize: '30px', padding: '20px' }}>
          In this example, we can see how to create elements using React.createElement(), and why JSX makes styling and writing UI much easier.
        </h1>
        <div>
          {React.createElement('h3', { className: 'Headings', style: { backgroundColor: 'red', height: '50px' } }, 'Hello from React.CreateElement')}
          {React.createElement('button', { style: { backgroundColor: 'yellow', color: 'black', fontSize: '70px' }, onClick: () => { alert('Hello Bahi') } }, 'Hello',)}
          {React.createElement('div', { style: { backgroundColor: 'lightgray', color: 'red', height: '30px' }, onClick: () => { console.log("Hello From div") } }, 'Hello div')}

          {
            React.createElement(
              'div',
              null,
              React.createElement('p',
                {
                  style:
                    { backgroundColor: 'yellow', color: 'black', height: '100px', alignContent: 'center', padding: '20px', margin: '20px' }
                },
                'Hello'
              )
            )
          }
        </div>

        <div>
          {
            React.createElement(
              'div',
              { className: 'Card', style: { backgroundColor: 'red', padding: '20px', margin: '20px' } },
              React.createElement(
                'h1',
                { style: { backgroundColor: 'lightcyan', color: 'black', padding: '20px', margin: '20px' } },
                `Hello ${user.name}`
              ),
              React.createElement(
                'p',
                { style: { backgroundColor: 'lightgreen', color: 'black', padding: '20px', margin: '20px' } },
                `You are ${user.age + 1} Year Old next Year`
              )
            )
          }
        </div>





      </div>



    </div>
  )
}

export default App


/*

Create clean and beginner-friendly revision notes for JSX in React.

Requirements:
1. Explain JSX in simple English.
2. Explain what JSX actually is behind the scenes.
3. Explain how JSX converts into React.createElement().
4. Use simple examples for every concept.
5. Explain why JSX is easier than React.createElement().
6. Explain JSX rules clearly.
7. Explain expressions vs statements in JSX.
8. Explain how to use:
   - Variables
   - Functions
   - Ternary Operator
   - Logical && Operator
   inside JSX.
9. Add examples of correct and wrong syntax.
10. Explain fragments in JSX.
11. Explain className, inline CSS, and attributes in JSX.
12. Explain self-closing tags.
13. Add “Important Points to Remember”.
14. Add “Common Mistakes Beginners Make”.
15. Add “Interview Questions & Answers” section.
16. Format everything properly in markdown so I can directly paste into VS Code.

Structure:
1. What is JSX?
2. Why we use JSX?
3. JSX Behind the Scenes
4. JSX Syntax Rules
5. Expressions vs Statements
6. Embedding JavaScript in JSX
7. Conditional Rendering
8. Styling in JSX
9. Fragments
10. Real-world Example
11. Important Notes
12. Common Mistakes
13. Interview Questions

Make the notes beginner-friendly and easy for revision.


 */