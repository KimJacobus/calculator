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

- pass returns of all operators to the input, the input shows stuff on the screen.  

- functionality of what to do when other button is clicked except of equal is gonna need some work.

- the effects press function should be more dynamic : you can't use setAttribute, you have to use classlist






## Notes on development :

> when using OOP:

- how do I prevent a function throwing undefined ? because they're inside an object. 

===> when I wrap the GetElement function in the window.onload call. controller doesn't throw undefined, without it it does! 
I think this has something to do with asynchronicity but not sure what yet. 





### Thoughts : 

- working mobile first also kind of sucks shit

### Things to fix :

- (Please enable a CSS nesting plugin *before* Tailwind in your configuration). have to add plugins in postcss apparently. 
having problems with custom fonts, seems like the config is borken 