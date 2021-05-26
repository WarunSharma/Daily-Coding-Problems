

function checkRansome(ransomeNote,magazine){
    let cal=Array(26).fill(0);
    /*let ransome=ransomeNote.split('')
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

    return isTrue(cal);*/

    let map=new Map()
    let ransome=ransomeNote.split('')
    let maga=magazine.split('')
    ransome.map(r=>{
        if(map.has(r))
        {
            map.set(r,map.get(r)+1)
        }
        else
        {
            map.set(r,1)
        }
    })
    maga.map(m=>{
        if(map.has(m))
        {
            map.set(m,map.get(m)-1)
        }
    })
    //console.log(map)
    for(let[key,val] of map)
    {
        console.log(key,val);
    }
}


ransomeNote='aa', magazine='aab';

console.log(checkRansome(ransomeNote,magazine));

//Every Morning when the sun rises, the slowest dear must run minimum faster then the fastest lion in the jungle.
//The slowest lion must run minimum faster then the slowest gazle in the forest to see the morning. 
//Either you are lion or a dear you have to run. 
