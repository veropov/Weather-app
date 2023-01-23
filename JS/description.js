
//Дата//Дата//Дата//Дата//Дата
//Дата//Дата//Дата//Дата//Дата
//Дата//Дата//Дата//Дата//Дата

export let date = new Date();
export let month = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая,',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября,',
    'Ноября',
    'Декабря,'
];

export function Month() {
    if (date.getMonth() == 0) { 
        return month[0] 
    };
};

export const day = date.getUTCDate();

//

class Icons {
    constructor(options) {
        this.icon = options.icon;
    }
}