Day 1:

using the filesystem provide by node opening a file only using .read() can create bug as the buffer is limited in syze 
not by using the readFile method

Day 2:

Statefull regex using an instanciated regex with the global modifier, at each call of the regex the lastIndex found is 
stored and the next call to the regex will start from this index until it reach no found and then reset.
  
It also happen on day 1 using one regex multiple time I should keep it in mind
