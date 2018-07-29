//string valid


function validBraces(string){
    var pairs = 
    {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    var stack = [];

    for (var i = 0; i < string.length; i++)
        if (string[i] === '(' || string[i] === '[' || string[i] === '{')
            stack.push(string[i]);
        else if (stack[stack.length-1] === pairs[string[i]])
            stack.pop();
        else
            return false; // catchall

    return stack.length === 0;

}