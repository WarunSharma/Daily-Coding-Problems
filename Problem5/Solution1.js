
function isTrue(cal){
    cal.map(c=>{
        //console.log(c)
        if(c>0)
        {
            console.log(c);
            return false;
        }
        
    })
    return true;
}
function checkRansome(ransomeNote,magazine){
    let cal=Array(26).fill(0);
    let ransome=ransomeNote.split('')
    let maga=magazine.split('')
    ransome.map(r=>{
        //console.log(r.charCodeAt(0));
        cal[r.charCodeAt(0)-97]++;
    })
    console.log('Before')
    console.log(cal);
    maga.map(m=>{
        cal[m.charCodeAt(0)-97]--;
    })
    console.log('After')
    console.log(cal);

    return isTrue(cal);
}


ransomeNote='aabb', magazine='aab';

console.log(checkRansome(ransomeNote,magazine));
