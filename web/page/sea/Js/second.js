define('Js/second',function (require,exports,module) {

    second = {
        name : 'second',
        addr : ['hefei','hangzhou'],
        init :function () {
            console.info('second init.....');
        },
        dialog : function () {
          alert('second dialog!!!');
        }
    };

    module.exports = second;
    
});

