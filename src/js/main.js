"use strict"

    let calculator = {
        type: [0, 1000, 2000, 7000],
        design: [0, 1000, 2000, 3000],
        adaptive: [0, 0, 1000, 3000],
    };

    let type = prompt('выберите тип сайта. 1 - визитка. 2 - лендинг. 3 - магазин');
    let design = prompt('выберите дизайн сайта. 1 - минимализм. 2 - классика. 3 - макет');
    let adaptive = prompt('выберите адаптив. 1 - без адаптива . 2 - резиновый. 3 - смешанный');


    let total =  calculator.type[type] + calculator.design[design] + calculator.adaptive[adaptive]
    let term = ''

    if (total <= 3000) {
        term = '1 день'
    } else if (total <= 5000){
        term = '3 дня'
    } else if (total <= 10000){
        term = 'неделю'
    } else if(total <= 14000){
        term = '10 дней'};



    alert(`цена работы: ${total}. работа будет выполнена через ${term}`);