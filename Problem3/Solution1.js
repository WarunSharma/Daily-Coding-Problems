function getUniqueEmails(Emails){
    let set=new Set();
    let count=0;
    Emails.map(email=>{
        //console.log(email)
        let [localName,domainName]=email.split('@');
        //console.log(localName,domainName);
        let cleanLocalName='';
        for(let ch of localName)
        {
            if(ch==='.')
            {
                continue;
            }
            if(ch==='+')
            {   
                break;

            }
            cleanLocalName+=ch;
        }
        let cleanEmail=cleanLocalName+'@'+domainName;
        if(!set.has(cleanEmail))
        {
            set.add(cleanEmail);
            ++count
        }

    })
    console.log(set)
    set.forEach(s=>{
        console.log(s);
    })
    //console.log(count);
}


Emails=['warunsharma.95@gmail.com','warunsharma95@gmail.com','warunsharma+95@gmail.com']

getUniqueEmails(Emails)