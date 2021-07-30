const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    get appetizers () {
        return this._courses.appetizers;
    },
    set appetizers (appetizer) {
        this._courses.appetizers = appetizer;
    },
    get mains () {
        return this._courses.mains;
    },
    set mains (main) {
        this._courses.mains = main
    },
    get desserts () {
        return this._courses.desserts;
    },
    set desserts (dessert) {
        this._courses.desserts = dessert;
    },
    get courses () {
        return this._courses;
    },
    addDishToCourse (courseName,dishName,dishPrice) {
       const dish = {
           name: dishName,
           price: dishPrice
       };
       this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse (courseName) {
        const dishes = this._courses[courseName];
        return dishes[Math.floor(Math.random() * dishes.length)];
    },
    generateRandomMeal () {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const total = appetizer.price + main.price + dessert.price ;
        return `Your meal will be: 
        appetizer: ${appetizer.name}
        main: ${main.name}
        dessert: ${dessert.name}
        The total is ${total} `;
    }
};

menu.addDishToCourse('appetizers','salad',50);
menu.addDishToCourse('appetizers','deviled eggs',37);
menu.addDishToCourse('appetizers','crab dip',19);
menu.addDishToCourse('mains','salmon',78);
menu.addDishToCourse('mains','beef',102);
menu.addDishToCourse('mains','chicken',84);
menu.addDishToCourse('desserts','apple pie',22);
menu.addDishToCourse('desserts','vanilla ice cream',13);
menu.addDishToCourse('desserts','fruit salad',15);
const meal = menu.generateRandomMeal();
console.log(meal);