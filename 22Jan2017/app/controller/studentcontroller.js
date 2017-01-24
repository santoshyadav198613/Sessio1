angular.module('studentApp').controller('studentcontroller', function ($scope, studentservice) {

    function init()
    {
        loadStudent();
    };
   

    function loadStudent()
    {
        studentservice.getStudent().then(function (response) {
            if (response.status === 200) {
                $scope.result = response.data;
            }
        }).catch(function (error) {

        });
    }

    $scope.addStudent = function (student)
    {
        var data =
            {
                FirstName: student.firstName,
                LastName: student.lastName,
                Email: student.email,
                DateOfBirth: student.dob
            };
        
        studentservice.addStudent(data).then(function (response) {
            if (response.status === 201) {
                loadStudent();
            }
        }).catch(function (error) {

        });

    }

    init();
});