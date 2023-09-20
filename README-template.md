# Frontend Mentor - Pricing component with toggle solution

This is a solution to the [Pricing component with toggle challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge
adding two background images positioned differently in the same container div was a bit tricky, if there will be any help please asist me.
Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Control the toggle with both their mouse/trackpad and their keyboard
- **Bonus**: Complete the challenge with just HTML and CSS

### Screenshot

![](https://github.com/iddimsangi/pricing-react-app/blob/master/src/my-desgn.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- React
- Tailwind CSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned
Through this project, I had the opportunity to apply and enhance my skills and knowledge in combining Tailwind CSS with React. The most enjoyable aspect was configuring my own custom CSS and successfully applying it. Additionally, working with a mobile-first approach was an amazing and powerful experience, particularly in achieving responsive design.
Designing the toggle switch was also an incredibly enjoyable and rewarding aspect of the project

To see how you can add code snippets, see below:

```html
  <input
            type="checkbox"
            id="toggle-switch"
            checked={isChecked} // Use "checked" instead of "value"
            onChange={isCheckedHandler} // Toggle the state directly
            className="w-10 h-6 bg-gradient-to-r from-light-blue to-medium-blue-purple appearance-none rounded-xl relative hover:opacity-75 cursor-pointer transition duration-150"
          />
```
```css
#toggle-switch::after{
    content:"";
    @apply h-5 w-5 bg-white rounded-full absolute top-[2px] left-0 cursor-pointer transition duration-200;
}
#toggle-switch:checked::after{
    @apply transition duration-200 translate-x-5;
}
```
```js
  const isCheckedHandler = () => {
    setIsChecked(!isChecked);
    setMyPackages(isChecked ? Annualypackages : Monthlypackages);
  };
```

### Continued development

I will continue to practice using Tailwind CSS with React, and my upcoming projects will involve data fetching through APIs while implementing designs using Tailwind CSS.

### Useful resources

- [Example resource 1](https://tailwindcss.com/) - This helped me for buiding,guide and read all css clases reason. I really liked this pattern and will use it going forward.

## Author

- Website - [iddimsangi](https://iddimsangi.netlify.app)
- Frontend Mentor - [@iddimsangi](https://www.frontendmentor.io/profile/iddimsangi)
- Twitter - [@iddi_a](https://twitter.com/iddi_a)


## Acknowledgments
I'd like to express my gratitude to the YouTube channel 'Code with Mano' (https://youtu.be/XV5tp-N_z9s) for providing a highly informative and clear video tutorial that helped me successfully design my toggle switch using Tailwind CSS.

