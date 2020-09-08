// CC: funciton Intialization.
let Item = function (name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

let items = [];

// CC: Adding new items.
items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

const update_quality = () => {

  items.map(item => {
    //First Condition.
    (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros') ?
    (item.quality > 0 ? item.quality = item.quality - 1 : '') :
    (item.quality < 50 && item.name == 'Backstage passes to a TAFKAL80ETC concert') ? ((item.sell_in < 11 || item.sell_in < 6) ? item.quality = item.quality + 1 : '') : ''
   
    //Second Condition.
    (item.name != 'Sulfuras, Hand of Ragnaros') ? item.sell_in = item.sell_in - 1: '';
   
    //Third Condition.
    (item.sell_in < 0) ?
    (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert' && item.name != 'Sulfuras, Hand of Ragnaros') ?
    ((item.quality > 0) ? item.quality = item.quality - 1 : item.quality - item.quality) :
    ((item.quality < 50) ? item.quality = item.quality + 1 : '') : ''
  })
}

exports.update_quality = function () {};
exports.items = items;