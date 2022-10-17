// code your solution here
function saturdayFun (message='roller-skate')  {
return `This Saturday, I want to ${message}!`

}

function mondayWork (message='go to the office'){
    return `This Monday, I will ${message}.`
}

function wrapAdjective (message='*'){
    return function(name="special")
    {
        return `You are ${message}${name}${message}!`  
    }
}
