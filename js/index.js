// // Main JS code
$(function() {
  webDB.init();
  fillTable("photo_table", "category", "caption", "img_path", "s", "d", "f");
  fillTable("category_table", "category", "score", "color", "s", "d", "f");
  // webDB.execute('INSERT INTO photo_table (category, caption, img_path) VALUES ("d","e","f")') ;
});







var fillTable = function(tableName, column1, column2, column3, value1, value2, value3) {
  webDB.execute('INSERT INTO '+tableName+' ('+column1+','+column2+','+column3+') VALUES ("'+value1+'","'+value2+'","'+value3+'");')
};

// $(function () {
//   webDB.execute('INSERT INTO photo_table (category, caption, img_path) VALUES (a,b,c)', console.log("success") ) })

// $(function () {
//   for (var i = 0; i < dataTable.length; i++) {
//   fillTable('photo_table', 'category', 'caption', 'img_path', '1', '2', '3')
//   }
// })
