function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; 
    if (strs.length === 1) return strs[0]; 

    strs.sort();
    
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;
    
    while (i < first.length && first[i] === last[i]) {
        i++;
    }
    
    return first.substring(0, i);
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); 
console.log(longestCommonPrefix(["dog", "racecar", "car"]));  
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); 
