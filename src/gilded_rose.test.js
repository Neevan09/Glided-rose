 const {update_quality} = require('./gilded_rose')
 const {items} = require('./gilded_rose')

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
    // const itemArr = items.map(item => item.sell_in)
    expect(itemArr).not.toBeNull();
   });

   it('should have items', function () {    
    expect(items.length).toEqual(6);
  });
 });