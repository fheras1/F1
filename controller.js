var miappTest=angular.module("miapp",[])

miappTest.controller("ctrl1",["$scope","$http" , function($scope,$http){
    //$scope.hola="Hola Mundo!";
    $scope.comenzar=false;
    $scope.listas;
    $scope.correo="";
    $scope.mostrar=false;
$http.get("http://ergast.com/api/f1/2013/driverStandings.json")
.then(function(respuesta){
    let aux=respuesta.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
   console.log(aux)
    $scope.listas=aux;
})
}])
