// // Main JS code
$(function() {
  webDB.init();
  for (var i = 0; i < dataTable.length; i++) { // [i][0] is the index to the category string
    for (var j = 2; j < dataTable[i].length-2; j++) {
      fillTable("photo_table", "category", "caption", "img_path", dataTable[i][0],dataTable[i][j][0], dataTable[i][j][1]);
    };
    fillTable("category_table", "category", "score", "color", dataTable[i][0],0,dataTable[i][1]);
  };
  // fillTable("photo_table", "category", "caption", "img_path", "s", "d", "f");
  // fillTable("category_table", "category", "score", "color", "s", "d", "f");
  // webDB.execute('INSERT INTO photo_table (category, caption, img_path) VALUES ("d","e","f")') ;
});

var fillTable = function(tableName, column1, column2, column3, value1, value2, value3) {
  webDB.execute('INSERT INTO '+tableName+' ('+column1+','+column2+','+column3+') VALUES ("'+value1+'","'+value2+'","'+value3+'");')
};
