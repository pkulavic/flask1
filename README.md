# Kulavic.com

The beginning of a personal website. I'm making this both to have a website and also to learn web frameworks. Currently using Flask.

[www.kulavic.com/parker](https://www.kulavic.com/parker)

I wrote the sudoku game in vanilla JavaScript. The puzzle is randomly generated on the back-end using a Python class that I wrote. It uses a recursive algorithm with back-tracking to generate a puzzle that is <strong>guaranteed</strong> to be valid and solvable.

The algorithm can be described as follows:
```
def recursively_fill( index )
  if ( index == 81 )
    return ( last element in array )
  else 
    find all candidates for cell at index
    if there are no candidates 
      return 0
    else
 
