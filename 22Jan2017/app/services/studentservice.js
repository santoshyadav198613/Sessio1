angular.module('studentApp').service('studentservice', function ($http) {


    var servie = {
        getStudent: getStudent,
        addStudent: addStudent
    };
    return servie;

    function getStudent()
    {
       return  $http.get('http://localhost:53908/api/students');
    }

    function addStudent(data)
    {
        return $http.post('http://localhost:53908/api/students', data);
    }

});