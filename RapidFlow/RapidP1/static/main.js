var hiddenClass = 'hidden';
var shownClass = 'toggled-from-hidden';

function expandArrival() {

    //making sure running on the right table row
    var all_int_name = document.getElementsByClassName('int_name');
    for(var i = 0; i < all_int_name.length; i++) {

        if (this === all_int_name[i]){
            var row = i;
        }
    }

    var a_row = "approaches" + row;
    var approach = document.getElementsByClassName(a_row);

    var hideBool = false;

    // hiding or unhiding on click depending on status
    for (var i = 0; i < approach.length; i++){
        test = approach[i].getElementsByTagName('td');

        // making sure onclick doesn't work when there are no values
        if (test[0].innerHTML === ''){
        break;
        }

        if (approach[i].classList.contains(hiddenClass)) {
            approach[i].classList.add(shownClass);
            approach[i].classList.remove(hiddenClass);

            } else {

                approach[i].classList.add(hiddenClass);
                approach[i].classList.remove(shownClass);
                hideBool= true;

        }

    }

    // colapse everything
    if (hideBool){
        for (var i=0; i < 4; i++){
            var all_departures0 = document.getElementsByClassName('departures' + i);
            for (var j=0; j< all_departures0.length; j++){
                all_departures0[j].classList.add(hiddenClass);
                all_departures0[j].classList.remove(shownClass);
            }

      }

    }

}

function toggleAll() {
    var all_approach_name = document.getElementsByClassName('approaches0');
    var all_shownClass = document.getElementsByClassName(shownClass);
    var expand = false;

    if (all_shownClass.length === 0){
        expand = true;
    }


    // toggle the arrivals
    for (var i = 0; i<all_approach_name.length; i++){
        if (all_approach_name[i].classList.contains(hiddenClass) && expand) {
            all_approach_name[i].classList.add(shownClass);
            all_approach_name[i].classList.remove(hiddenClass);


            } else {
                all_approach_name[i].classList.add(hiddenClass);
                all_approach_name[i].classList.remove(shownClass);
        }

    }

    // toggle the departures
    for (var i=0; i < 4; i++){
            var all_departures0 = document.getElementsByClassName('departures' + i);
            for (var j=0; j< all_departures0.length; j++){
                if (all_departures0[j].classList.contains(hiddenClass) && all_departures0[j].classList.contains('dep-0') && expand) {
                    all_departures0[j].classList.add(shownClass);
                    all_departures0[j].classList.remove(hiddenClass);
            } else {
                all_departures0[j].classList.add(hiddenClass);
                all_departures0[j].classList.remove(shownClass);
                }
            }

    }



}



function expandDepart() {
    var all_approach_name = document.getElementsByClassName('approach');
    var all_departures0 = document.getElementsByClassName('departures0');

    //console.log(this)
    //console.log(this.nextElementSibling.innerHTML)
    var total_veh = parseInt(this.nextElementSibling.innerHTML);

    for(var i = 0; i < all_approach_name.length; i++) {

        if (this === all_approach_name[i]){
            var row = i;
        }
    }

    var a_row = "departures" + row;
    var approach = document.getElementsByClassName(a_row);

    for (var i = 0; i < approach.length; i++){
        tdList = approach[i].getElementsByTagName('td');

        if (tdList[0].innerHTML === ''){
        break;
        }

        if (approach[i].classList.contains(hiddenClass) && all_departures0[i].classList.contains('dep-0') ) {
            approach[i].classList.add(shownClass);
            approach[i].classList.remove(hiddenClass);


            //populate % if possible
            tdList[2].innerHTML = ((parseInt(tdList[1].innerHTML) / total_veh) * 100).toFixed(0) + "%";

            } else {
                approach[i].classList.add(hiddenClass);
                approach[i].classList.remove(shownClass);
        }
    }
}

function expandChart() {
           var depNames = document.getElementsByClassName('dep-name');
           var vehNum = document.getElementsByClassName('dep-no');

           var nameList = [];
           var vehList = [];

           var mult_dep = mult_veh = 0;

            // remove old chart to fix hover bug
           document.getElementById("myChart2").remove();
           var canv=document.createElement("canvas");
           canv.setAttribute("id", "myChart2");
           canv.setAttribute("width", "600");
           canv.setAttribute("height", "200");
           document.getElementById("chart-parent").append(canv);
           var ctx = document.getElementById('myChart2').getContext('2d');

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
                            'rgba(255, 99, 132)',
                            'rgba(54, 162, 235)',
                            'rgba(255, 206, 86)',
                            'rgba(75, 192, 192)',
                            'rgba(153, 102, 255)',
                            'rgba(255, 159, 64)'
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
    var expandAll = document.getElementsByClassName('col_expand_all');

    for(var i = 0; i < interSections.length; i++) {
        interSections[i].addEventListener('click', expandArrival);
    }

    for(var i = 0; i < approachSections.length; i++) {
        approachSections[i].addEventListener('click', expandDepart);
    }

    for(var i = 0; i < expandCharts.length; i++) {
        //expandDepart(approachSections[i]);
        expandCharts[i].addEventListener('click', expandChart);
    }

    for(var i = 0; i < expandAll.length; i++) {
        expandAll[i].addEventListener('click', toggleAll);
    }

}());
