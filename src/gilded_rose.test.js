 const {update_quality} = require('./gilded_rose')
 const {items} = require('./gilded_rose')

 describe('update_quality', function () {

   it('should be a function', function () {
     expect(typeof update_quality).toBe("function");
   });

 });


 describe('items', function () {
   it('should have sell_in', function () {
     expect(typeof items).toBe("object");
   });

   it('should have sell_in name', function () {
     expect(items).toBe([]);
   });
 });