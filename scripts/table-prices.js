const tables = Array.from(document.querySelectorAll('.table'));
const priceListFilter = document.querySelector('.price-filter');
const priceListFilterElements = Array.from(priceListFilter.querySelectorAll('.input'));

// console.log(tables);


// function calcAveragePrice(vid, marka){
//     // console.log(vid);
//     // console.log(marka);
//     let result = [];

//     sellersList.forEach(function(item){
//         item[]


//     })

//     return result.reduce((a,b) => a+b / result.length,0);

// }

let toAddCategories = sellersList.map(function(card){
    return Object.keys(card)
});
// console.log(new Set(toAddCategories.toString().split(',')))

priceListFilterElements.forEach(function(item){
    let toAddInputs = Array.from(new Set(toAddCategories.toString().split(',')));
    if(item.id === 'all'){
    }
    else if(!toAddInputs.includes(item.id)){
        item.parentElement.style.display = 'none';
    }
});

tables.forEach(function(item){
    let toAddTables = Array.from(new Set(toAddCategories.toString().split(',')));
    if(!toAddTables.includes(item.id)){
        item.style.display = 'none';
    }
});

let tablePrices = Array.from(document.querySelectorAll('.table__stroke_price'));
// console.log(tablePrices)

tablePrices.forEach(function(stroke){
    let vid = stroke.closest('.table').id;
    let marka = stroke.id;
    // console.log(vid, marka)

    // let strokePrice = sellersList.

    stroke.textContent = calcPrice(vid, marka) + ' p.';

    if (parseInt(stroke.textContent) === 0){
        stroke.parentElement.style.display = 'none';
    };
});

function calcPrice(vid, marka){
    let prices = [];
    let markaPrice = [];
    
    sellersList.forEach(function(card){
        if (card[vid]){
            prices.push(card[vid])
        }
    })

    prices.forEach(function(item){
        // console.log(vid, marka, item[marka])
        if(item[marka]){
            markaPrice.push(item[marka])
        }
    })

    let avPrice = markaPrice.reduce((a,b) => a+b / markaPrice.length, 0);
    // console.log(vid, marka, markaPrice)
    
    return Math.round(avPrice) 

};


tables.forEach(function(table){
    let tablePrices = Array.from(table.querySelectorAll('.table__stroke_price'));
    // console.log(table.id);

    let avalable = [];
    let namesForInputs = [];
    sellersList.forEach(function(item){
        // console.log(Object.keys(item).includes(table.id));
        if(Object.keys(item).includes(table.id)){
            avalable.push(item[table.id]);
            namesForInputs.push(table.id)

            // console.log(table.id in Object.keys(item))
        };

    
        
    });



    // console.log(namesForInputs.reduce((a,b) => a=b))




    tablePrices.forEach(function(priceField){
        
        
        // priceField.textContent = calcAveragePrice(table.id, priceField.id);
    })

    
    






    // tablePrices.forEach(function(priceField){
    //     let averageMarkaPrice = [];
    //     sellersList.map(function(card, index){
    //         if(!sellersList[index][table.id][priceField.id] === undefined){
    //             return NaN
    //         }
    //         averageMarkaPrice.push(sellersList[index][table.id][priceField.id]);
    //     });
        
    //     priceField.textContent = Math.round(averageMarkaPrice.reduce((a,b) => a+b / averageMarkaPrice.length, 0)) + ' р. за куб';

    //     if (priceField.textContent.includes('NaN')){
    //         priceField.parentElement.style.display = 'none';
    //     };
    // });

    
});


priceListFilterElements.forEach(function(item){
    item.addEventListener('input', function(event){
        let checked = item.id;
        const priceTables = Array.from(document.querySelectorAll('.price-table'));
        
        priceTables.forEach(function(table){
            if ((table.id === checked) || (checked === 'all')){
                table.style.display = 'table';
            }
            else {
                table.style.display = 'none';
            };
        });
    });
});
