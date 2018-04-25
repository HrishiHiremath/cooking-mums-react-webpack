
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      // Inserts seed entries
      return knex('images').insert([
        {imgname: 'images/0004.jpg'},
        {imgname: 'images/0006.jpg'},
        {imgname: 'images/0008.jpg'},
        {imgname: 'images/0010.jpg'},
        {imgname: 'images/0011.jpg'},
        {imgname: 'images/0012.jpg'},
        {imgname: 'images/0013.jpg'},
        {imgname: 'images/0015.jpg'},
        {imgname: 'images/0017.jpg'},
        {imgname: 'images/0027.jpg'},
        {imgname: 'images/0028.jpg'},
        {imgname: 'images/0033.jpg'},
        {imgname: 'images/0035.jpg'},
        {imgname: 'images/0037.jpg'},
        {imgname: 'images/0040.jpg'},
        {imgname: 'images/0044.jpg'},
        {imgname: 'images/0046.jpg'},
        {imgname: 'images/0048.jpg'},
        {imgname: 'images/0052.jpg'},
        {imgname: 'images/0055.jpg'},
        {imgname: 'images/0059.jpg'},
        {imgname: 'images/0060.jpg'},
        {imgname: 'images/0061.jpg'},
        {imgname: 'images/0064.jpg'},
        {imgname: 'images/0065.jpg'},
        {imgname: 'images/0066.jpg'},
        {imgname: 'images/0067.jpg'},
        {imgname: 'images/0072.jpg'},
        {imgname: 'images/0083.jpg'},
        {imgname: 'images/0085.jpg'},
        {imgname: 'images/0086.jpg'},
        {imgname: 'images/0088.jpg'},
        {imgname: 'images/0089.jpg'},
        {imgname: 'images/0102.jpg'},
        {imgname: 'images/0105.jpg'},
        {imgname: 'images/0106.jpg'},
        {imgname: 'images/0107.jpg'},
        {imgname: 'images/0109.jpg'},
        {imgname: 'images/0110.jpg'},
        {imgname: 'images/0113.jpg'},
        {imgname: 'images/0114.jpg'},
        {imgname: 'images/0117.jpg'},
        {imgname: 'images/0118.jpg'},
        {imgname: 'images/0119.jpg'},
        {imgname: 'images/0120.jpg'},
        {imgname: 'images/0122.jpg'},
        {imgname: 'images/0123.jpg'},
        {imgname: 'images/0124.jpg'},
        {imgname: 'images/0128.jpg'},
        {imgname: 'images/0129.jpg'},
        {imgname: 'images/0130.jpg'},
        {imgname: 'images/0133.jpg'},
        {imgname: 'images/0134.jpg'},
        {imgname: 'images/0135.jpg'}

      ]);
    });
};
