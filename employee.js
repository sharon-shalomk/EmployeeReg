
function addEmployee(){

    // access values of employee from inputs
    var empName = ename.value;
    var employeeid = eid.value;
    var empDesig = edesig.value;
    var empSalary = esal.value;
    var empExp = exp.value;



    if(employeeid in localStorage){
        alert("Employee already added")
    }
    else{
        // data stored as object
        employee={"employee_name":empName,"employee_id":employeeid,"employee_desig":empDesig,
            "employee_salary":empSalary,"employee_exp":empExp}

        // store object data in locastorage and convert data into json format
        localStorage.setItem(employeeid, JSON.stringify(employee));
        alert("Employee added Successfully");
        window.location='home.html';

        }
    
}


function displayData(){
    eid=search.value;
    if(eid in localStorage){
        // convert json object to js object
       emp= JSON.parse(localStorage.getItem(eid))
       console.log(emp);
       result.innerHTML=
       `<div class="card text-center bg-primary" style="width:100%; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s; border-radius: 5px; text-align: center;
  cursor: pointer;font-size:18px">
    <ul class="list-group list-group-flush">
    <li class="list-group-item text-secondary"><b>Employee Name:</b> ${emp.employee_name}</li>
    <li class="list-group-item text-secondary"><b>Employee Id:</b> ${emp.employee_id}</li>
    <li class="list-group-item text-secondary"><b>Employee Designation: </b>${emp.employee_desig}</li>
    <li class="list-group-item text-secondary"><b>Employee Salary: </b>${emp.employee_salary}</li>
    <li class="list-group-item text-secondary"><b>Employee Experience: </b>${emp.employee_exp}</li>
  </ul>
</div>`
    }
    else{
        alert("Employee not present")
        result.innerHTML=""
    }
}
