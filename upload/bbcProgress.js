/**
 * Created by xiaozhao on 2017/6/9.
 */
var app = angular.module('app', []);

app.controller('MainCtrl', function ($scope, $interval) {
    $scope.sizeComplete = 0;
    $scope.start = function () {
        console.log('开始');
        var index = 0;
        $interval(function () {
            index += 1;
            $scope.sizeComplete = index;
        }, 100, 100);

    }
});

app.directive('bbcProgress', [function () {
    return {
        restrict: "EA",
        scope: {
            total: '=total',
            complete: '=complete'
        },
        template: ' <div class="weui-progress">\
        <div class="weui-progress__bar">\
        <div  class="weui-progress__inner-bar js_progress" style="width: 0%;"></div>\
        </div>\
        <a href="javascript:;" class="weui-progress__opr">\
        <img class="weui-icon-cancel-img" src="../images/shanchuanniu.png" alt="">\
        </a>\
        </div>',
        link: function (scope, elem, attrs) {
            scope.$watch('complete', function () {
                //change style at 100%
                var progress = scope.complete / scope.total;
                if (progress <= 1) {
                    elem.eq(0).children()[0].children[0].children[0].style.width = progress * 100 + '%';
                }
            });
        }

    };
}]);