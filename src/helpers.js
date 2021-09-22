// export default helpful(); make sure not to include the parens () because that will call a function
function helpful(){
    console.log('Helpful')
}

function sort() {
    console.log('Sort')
}

function sing() {
    console.log('Sing')
}

// when this whole file is required, the default thing that we should export is helpful
// this exports helpful as default but we can also use the de-structured version
export default helpful;

// when you want other things other than the default to be exported you can do: 
export {sort, sing};