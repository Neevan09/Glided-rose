 const {
   update_quality
 } = require('./gilded_rose')
 const {
   items
 } = require('./gilded_rose')

 describe('update_quality', function () {

   it('should be a function', function () {
     expect(typeof update_quality).toBe("function");
   });

 });


 describe('items', function () {
   it('should have items object', function () {
     expect(typeof items).toBe("object");
   });

   it('should have items', function () {
     expect(items.length).toEqual(6);
   });

   //Sell_in value
   it('All items should have sell_in value', function () {
     const itemArr = items.map(item => item.sell_in)
     expect(itemArr).not.toBeNull();
   });

   //Quality
   it('All items should have Quality value', function () {
     const qualityArr = items.map(item => item.quality)
     expect(qualityArr).not.toBeNull();
   });
 });