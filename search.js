const text = 'akash vora tara hoga mara shara'
const doesExist = text.includes('tara');
console.log(doesExist);

// for case
const text2 = "Blackpink is a South Korean girl group formed by YG Entertainment,      consisting of members Jisoo, Jennie, Rosé, and Lisa.";
const searchString = 'JENNIE';
const text2Lower = text2.toLocaleLowerCase();
const doesExist2 = text2Lower.includes(searchString.toLocaleLowerCase());
console.log(doesExist2);

//index
//console.log(text2,indexOf('girl'));
if(text2.indexOf('Jisoo') != -1){
    console.log('ok')
}
else{
    console.log('none')
}
//start with
console.log(text2.startsWith('Blackpink'))
//end
console.log(text2.endsWith('Lisa.'))