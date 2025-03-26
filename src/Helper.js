export function checkHeading(str){
    return /^(\*)(\*)(.*)\*$/.test(str)
}

// export function replaceHeadingStars(str){
//     return str.replace(/^(\*)(\*)(.*)\*$/g,"")
// }

export function replaceHeadingStars(str){
    return str.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
}