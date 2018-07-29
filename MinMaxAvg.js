//write function that takes an array and find the min, max, avg of the arr and returns this in a formatted str

function MinMaxAvg(arr)
{
    min = arr[0];
    max = arr[0];
    sum = 0;
    for (var i = 0; i < arr.length-1; i++)
    {
        if (arr[i] < min)
        {
            min = arr[i];
        }
        if (arr[i] > max)
        {
            max = arr[i];
        }
        sum += arr[i];
    }
    avg = sum/arr.length;
    return("max: " + max + " ,min: " + min + " ,avg: " + avg)
}

a = [1, -2, 9, 4];
console.log(MinMaxAvg(a));
