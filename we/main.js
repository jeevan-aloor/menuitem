


async function main(url){
    let res= await fetch (url)
    let data = await res.json()
    console.log('data:', data)
    return data;
}

function appendFunc(data,container){
    data.forEach(({title,image})=>{
        let div= document.createElement("div");
        let p=document.createElement("p");
        p.innerText=title;
        let iamg=document.createElement("img");
        iamg.setAttribute("src",image)
        div.append(iamg,p)
        container.append(div)

    })
       
        

    
}
export {main,appendFunc}