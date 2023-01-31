# Calculator 


## things to do : 

> better design : 

- make font size smaller when numbers fill input screen... (doesn't have to be eternally long methinks)
- adjust on hover size.. equal operator.
- style math operators better might, have to used icons. 


- some drop shadow or gradients maybe, something to fill it out a bit more. 

- light clicking sounds onclick on buttons ?
- dark mode ? 



> get stuff to work, functionality : 

- functionality of what to do when other button is clicked except of equal is gonna need some work.

- stashNum and math isn't working properly yet.
you have to recheck the entire logic behind stashing in amount 2 and getting in amount 1; 



* try to make localStorage functionality work ? 


<!-- - Have no idea why amountOne suddenly works as a global variable. -->


<!-- - the effects press function should be more dynamic : you can't use setAttribute, you have to use classlist
, sort of the same with classlist because you're gonna wanna customize the onhover color, you're gonna have to create a new function per group of operators anyway. But it *is* more readeable this way. -->





## Notes on development :

> when using OOP:

- how do I prevent a function throwing undefined ? because they're inside an object. 

===> when I wrap the GetElement function in the window.onload call. controller doesn't throw undefined, without it it does! 
I think this has something to do with asynchronicity but not sure what yet. 


- a calculator is rather static, doesn't assigning a new function to all the operators is fine. 
I suppose if there would be a function where users can create their own operators you would need to make it more dynamic. 


- watch out for the hiërarchy of the functions called on an element. f.e : you should get the numbers input before it gets cleared. 



### Thoughts : 

- working mobile first also kind of sucks shit

### Things to fix :

- (Please enable a CSS nesting plugin *before* Tailwind in your configuration). have to add plugins in postcss apparently. 
having problems with custom fonts, seems like the config is borken 



    .numbers {
        @apply row-span-1 text-6xl lg:text-7xl hover:bg-slate-400 cursor-default 
    };