Day 1:

using the filesystem provide by node opening a file only using .read() can create bug as the buffer is limited in syze 
not by using the readFile method

Day 2:

Statefull regex using an instanciated regex with the global modifier, at each call of the regex the lastIndex found is 
stored and the next call to the regex will start from this index until it reach no found and then reset.
  
It also happen on day 1 using one regex multiple time I should keep it in mind

day 4: 
not too tricky after seeing other implementation i went on the least done approach because the consign was indiciting 
an other

day6:
easy O(1) solution just need to refresh my algebra


day7:
Pretty easy if you use a count system but i lost too much time by misreading the problem
I was using the "classic" way of discrimanting two same hand

day8: 
Part 2 I read some more information online as I was missing the fact that all path
always loop and after the solution is clearer

day 9: 
Read more about Pascal triangle

day 10: 
tried with ray tracing but could not touch isolated inside part
same for flood filling 
learn about the flood filling algorithm, shoelace formula and pick theorem

day 14:
Cycle detection !

day 15: 
Be carefull  with new Array(x).fill([])
as if you write it this way all element of the array share the same reference
you should write it new Array(x).fill(0).map(() => [])

day 16:
Straightforward some dumb typing error for part 2 I should have rewrite the traverse in a recursive way to memoize it 
for performance. but it worked the brute way so i let it be
