<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: {}
I declare a variable greeting and assign value an empty object and then we console greeting and see the result {} empty object. If you does not assign a value it means that value is initially 'undefine'.
greeting = {}
assigns an empty object {} to the variable greeting. So  greeting is an object.

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: "12";

  We know that both operands are number , it will added together. And one or both operands are string , it will concatenate them together like a = 1, b = "2" , c = a + b result is '12' string. 



</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  A: `['🍕', '🍫', '🥑', '🍔']`

We know that changing the value of (info.favoriteFood )does not affect the original (food) array. The array and the object are separate entities.

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  `Hi there, undefined` 

  When you call sayHi() in console your result will be - Hi there, undefined;
  because you are not passing any any arguments. That's why name inside the function will be undefine. When you try to concate undefine to string it will return- Hi there, undefined

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

We know that in the callback function if (num) count += 1; it check if num is truthy.We
And here 0 is a falsy value in js. then the number is 1,2,3 are truthy it increment by 1.
nums array count the number of truthy 1,2 and 3. Then cunt wll be 3

</p>
</details>
