/**
 * Created by b on 10/9/2014.
 */
//declare module
angular.module('main', [])
    //controller
    .controller('madLibsController', ['$scope', MadLibsController]);

function MadLibsController() {
    this.items = {
        malename: '',
        jobtitle: '',
        tedioustask: '',
        dirtytask: '',
        celebrity: '',
        uselesskill: '',
        obnoxiouscelebrity: '',
        hugenumber:''
    }
}

