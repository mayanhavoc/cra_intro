// import helpful from './helpers'; 
// the name 'helpful' doesn't matter, however the path './helpers' IS important that it's exactly where the file is. 
// the variable 'helpful' is merely a container to whatever is imported from './helpers'

// When importing more than one function from a module, we can no longer use the syntax:  import variable from path instead do

// In this case the name DOES matter because it needs to match the function
// In case we want to use a default and also import other functions, the syntax is
import helpful, { sort, sing } from './helpers';


helpful();
sort();
sing();