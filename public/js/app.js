var app= angular.module('todoapp',['ngAnimate']);

app.controller('TodoController',function($scope,$http){
    $scope.todos=serverdata;


    $scope.done = function(value,event) {



        $scope.udpatedtodo={id:value._id,isDone:true};

        $http.post('/api/todo/done',JSON.stringify($scope.udpatedtodo)).then(function(res){
            if(res.status==200){
                value.isDone=true;
                event.srcElement.innerText='Undone';


            }
            else  if(res.status==404){
                alert('Something Went Wrong!');
            }
        });
      };

      $scope.undone=function(value,event){

        $scope.udpatedtodo={id:value._id,isDone:false};
        $http.post('/api/todo/done',JSON.stringify($scope.udpatedtodo)).then(function(res){
            if(res.status==200){
                value.isDone=false;
                event.srcElement.innerText='Done'


            }
            else  if(res.status==404){
                alert('Something Went Wrong!');
            }
        });

      };

    $scope.remove = function(value) {
        $http.delete('/api/todo/'+value._id).then(function(res){
            $scope.todos.shift();
            if(res.status==200 && res.data=="Deleted"){

            }
            else  if(res.status==404){
                alert('Something Went Wrong!');
            }
        });
      };
      $scope.add = function() {



        $scope.newtodo={todo:$scope.todoText, isDone:false,hasAttachement:false,user:'shaz'};

        $http.post('/api/todo/',JSON.stringify($scope.newtodo)).then(function(res){
            if(res.status==200){

        $scope.todos.unshift({created_at:res.data.created_at,_id:res.data._id,todo:$scope.todoText, isDone:false,hasAttachement:false,user:'shaz'});

        $scope.todoText = '';
            }
            else  if(res.status==404){
                alert('Something Went Wrong!');
            }
        });
      };



});

// document.onkeydown = disableF5;
// document.onkeypress = disableF5
// document.onkeyup = disableF5;



function disableF5(e) { if ((e.which || e.keyCode) == 116) e.preventDefault();e.stopPropagation() };
