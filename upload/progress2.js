/**
 * Created by xiaozhao on 2017/6/9.
 */
angular.module('test', [])

    .controller('MainCtrl', function($q, $scope) {

        $scope.curVal= 0;

        $scope.maxVal = 100;

    })

    .directive('progressBar', [function () {

        return {
            restrict: 'E',
            scope: {
                curVal: '@',
                maxVal: '@'
            },
            template: "<div class='progress-bar'>"+
            "<div class='progress-bar-bar'>testing</div>"+
            "</div>",

            link: function ($scope, element, attrs) {

                function updateProgress() {
                    var progress = 0;

                    if ($scope.maxVal) {
                        // progress = Math.min($scope.curVal, $scope.maxVal) / $scope.maxVal * element.find('.progress-bar').width();
                    }

                    // element.find('.progress-bar-bar').css('width', progress);
                }

                $scope.$watch('curVal', updateProgress);
                $scope.$watch('maxVal', updateProgress);
            }
        };
    }]);