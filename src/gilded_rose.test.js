 const {
   update_quality
 } = require('./gilded_rose')
 const {
   items
 } = require('./gilded_rose')

 describe('update_quality', (() => {
   it('should be a function', function () {
     expect(typeof update_quality).toBe("function");
   });
 }));


 describe('items', (() => {
   it('should have items object', function () {
     expect(typeof items).toBe("object");
   });

   it('should have items', (() => {
     expect(items.length).toEqual(6);
    }));

   //Sell_in value
   it('All items should have sell_in value', (() => {
     const itemArr = items.map(item => item.sell_in)
     expect(itemArr).not.toBeNull();
    }));

   //Quality
   it('All items should have Quality value', (() => {
     const qualityArr = items.map(item => item.quality)
     expect(qualityArr).not.toBeNull();
    }));

   //sell_in days is less then zero, quality degrades twice as fast
   it('All items should have sell_in less than zero', (() => {
    const sell_in = items.map(item => item.sell_in)
    expect(sell_in.some(({value}) => value < 0)).toBe(false);
  }));

   //The quality of an item is never negative
   it('quality of an item should never negative', (() => {
    const quality = items.map(item => item.quality)
    expect(quality.some(({value}) => value < 0)).toBe(false);
  }));

  //The quality of an item is never more than 50
  it('quality of an item should never more than 50', (() => {
    const quality = items.map(item => item.quality)
    expect(quality.some(({value}) => value < 50)).toBe(false);
  }));

}));