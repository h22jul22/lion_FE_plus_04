import Menu from './menu';

export default function NewMenu() {
    // this.parent = new Menu()
}

// class NewMenu extends Menu {}
// NewMenu.prototype = Object.create(Menu.prototype);
NewMenu.prototype = new Menu();

let m1 = new NewMenu();
console.log(m1.toJSON());
