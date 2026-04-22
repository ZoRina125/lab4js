
/**
 * Базовый класс для предметов инвентаря.
 */
class Item {
    /**
     * @param {string} name - Название
     * @param {number} weight - Вес
     * @param {string} rarity - Редкость 
     */
    constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
    }

    /** @returns {string} */
    getInfo() {
        return `[${this.rarity}] ${this.name}, Вес: ${this.weight}кг`;
    }

    /** @param {number} newWeight */
    setWeight(newWeight) {
        if (newWeight > 0) {
            this.weight = newWeight;
        }
    }
}


class Weapon extends Item {
    /**
     * @param {string} name 
     * @param {number} weight 
     * @param {string} rarity 
     * @param {number} damage 
     * @param {number} durability 
     */
    constructor(name, weight, rarity, damage, durability = 100) {
        super(name, weight, rarity);
        this.damage = damage;
        this.durability = durability;
    }

    use() {
        if (this.durability > 0) {
            this.durability -= 10;
            this.getInfo();
            console.log(`Использовано: ${this.name}. Прочность: ${this.durability}`);
        } else {
            console.log(`Оружие ${this.name} сломано!`);
        }
    }

    getInfo(){
        return super.getInfo() + `, Прочность: ${this.durability}%`;
    }

    repair() {
        this.durability = 100;
        console.log(`${this.name} отремонтировано.`);
    }
}



function ItemFC(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
}

ItemFC.prototype.getInfo = function() {
    return `[FC] ${this.name} (${this.rarity})`;  
};

function WeaponFC(name, weight, rarity, damage, durability) {
    // Вызов конструктора родителя
    ItemFC.call(this, name, weight, rarity);
    this.damage = damage;
    this.durability = durability;
}

// Наследование методов родителя
WeaponFC.prototype = Object.create(ItemFC.prototype);
WeaponFC.prototype.constructor = WeaponFC;



const inventory = [
    new Weapon("Меч Экскалибур", 5, "legendary", 50),
    new Item("Зелье маны", 0.3, "common"),
    null,
    new WeaponFC(" Нифритовый лук", 2, "rare", 15, 40)
];

console.log("--- ПРОВЕРКА ИНВЕНТАРЯ ---");

inventory.forEach((obj, index) => { // Прохлдтим каждый слот
   
    console.log(`Слот ${index + 1}: ${obj?.getInfo?.() ?? "Пусто"}`);
});