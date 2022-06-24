var hiddenClass = 'hidden';
var shownClass = 'toggled-from-hidden';

//function petSectionHover() {
//    var children = this;
//    for(var i = 0; i < children.length; i++) {
//        var child = children[i];
//        if (child.className === hiddenClass) {
//            child.className = shownClass;
//        }
//    }
//}

//function petSectionHover() {
//    var hiddenrows = document.getElementsByClassName('hidden');
//
//    for(var i = 0; i < hiddenrows.length; i++) {
//        var hiddenrow = hiddenrows[i];
//        hiddenrow.className = shownClass
//    }
//}

function expandArrival() {

    var all_int_name = document.getElementsByClassName('int_name');
    for(var i = 0; i < all_int_name.length; i++) {

        if (this === all_int_name[i]){
            var row = i;
        }
    }

    var a_row = "approaches" + row;
    var approach = document.getElementsByClassName(a_row);

    for (var i = 0; i < approach.length; i++){
        test = approach[i].getElementsByTagName('td');

        if (test[0].innerHTML === ''){
        break;
        }

        if (approach[i].classList.contains(hiddenClass)) {
            approach[i].classList.add(shownClass);
            approach[i].classList.remove(hiddenClass);

            } else {
                approach[i].classList.add(hiddenClass);
                approach[i].classList.remove(shownClass);
        }
    }

}


function expandDepart() {
    var all_approach_name = document.getElementsByClassName('approach');
    var all_departures0 = document.getElementsByClassName('departures0');

    for(var i = 0; i < all_approach_name.length; i++) {

        if (this === all_approach_name[i]){
            var row = i;
        }
    }

    var a_row = "departures" + row;
    var approach = document.getElementsByClassName(a_row);

    for (var i = 0; i < approach.length; i++){
        test = approach[i].getElementsByTagName('td');

        if (test[0].innerHTML === ''){
        break;
        }

        if (approach[i].classList.contains(hiddenClass) && all_departures0[i].classList.contains('dep-0') ) {
            approach[i].classList.add(shownClass);
            approach[i].classList.remove(hiddenClass);

            } else {
                approach[i].classList.add(hiddenClass);
                approach[i].classList.remove(shownClass);
        }
    }
}

function expandChart() {
           var depNames = document.getElementsByClassName('dep-name');
           var vehNum = document.getElementsByClassName('dep-no');
           var ctx = document.getElementById('myChart2').getContext('2d');
           var nameList = [];
           var vehList = [];

           var mult_dep = mult_veh = 0;

           // more hacks but running out of time, this is to grab the right numbers
           if (this.classList.contains('expand-0')){
                mult_dep = mult_veh = 0;
           } else if (this.classList.contains('expand-1')){
                mult_dep = mult_veh = 4;
           } else if (this.classList.contains('expand-2')){
                mult_dep = mult_veh = 8;
           } else {
                mult_dep = mult_veh = 12;
           }

           var end = mult_dep + 4

           for (mult_dep; mult_dep < end; mult_dep++){
                nameList.push(depNames[mult_dep].innerHTML)
                vehList.push(parseInt(vehNum[mult_dep].innerHTML));
           }


           var myChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: nameList,
                    datasets: [{
                        label:'# of vehicles',
                        data: vehList,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                        }]
                       },
                    options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                           }
                     }

    });
}

(function() {
    var interSections = document.getElementsByClassName('int_name');
    var approachSections = document.getElementsByClassName('approach');
    var expandCharts = document.getElementsByClassName('expandChart');

    for(var i = 0; i < interSections.length; i++) {
        interSections[i].addEventListener('click', expandArrival);
    }

    for(var i = 0; i < approachSections.length; i++) {
        approachSections[i].addEventListener('click', expandDepart);
    }

    for(var i = 0; i < expandCharts.length; i++) {
        expandCharts[i].addEventListener('click', expandChart);
    }

}());
