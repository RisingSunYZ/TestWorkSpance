define('Js/index',function (require,exports,module) {

    var second = require('Js/second');
    index = {
        indexName : '',
        indexAddr : '',
        init : function () {
            console.info('index init....');
            this.indexName = second.name;
            this.indexAddr = second.addr;
            this.outPut();
        },
        outPut : function(){
            console.info('My Name is '+this.indexName+',My Addr is '+this.indexAddr);
        }
    };

    module.exports = index;
});