import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

var DisplayEmployeeInfo=(employee)=>{
  return <div>
    <h1>Employee Details...</h1>
    <p>
      <label>Employee ID : <b>{employee.Id}</b></label>
    </p>
    <p>
      <label>Employee Name : <b>{employee.Name}</b></label>
    </p>
    <p>
      <label>Employee Location : <b>{employee.Location}</b></label>
    </p>
    <p>
      <label>Employee Salary : <b>{employee.Salary}</b></label>
    </p>
    <Department deptName={employee.deptName} headName={employee.headName}></Department>
  </div>;
}

const Department=(deptInfo)=>{
  return <div>
    <p>Dept Name is : <b>{deptInfo.deptName}</b></p>
    <p>Dept Head is : <b>{deptInfo.headName}</b></p>
  </div>;
}

const element=<DisplayEmployeeInfo Id="101" Name="Kermo" Location="Tallinn" Salary="4000" deptName="UI Dev" headName="Kermo Tech"></DisplayEmployeeInfo>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

// const element=React.createElement("h1", null, "Welcome to React Programming World...");

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// const element=React.createElement("div", {className:"testClass"},
//   React.createElement("h1", null, "Welcome to React Programming"),
//   React.createElement("h1", null, "Understanding the Creation of Elements"));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// const element = <h1 className='testClass'>Welcome to React Programming...</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// const newElement = <h1 className='testClass'>Understanding the Creation of Elements in React...</h1>;
// const appRoot = document.getElementById('app');
// if (appRoot) {
//   const appRootContainer = ReactDOM.createRoot(appRoot);
//   appRootContainer.render(newElement);
// }

// const element=(
//   <div className='testClass'>
//     <h1>Welcome to React Programming...</h1>
//     <h1>Understanding the Creation of React Elements...</h1>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

reportWebVitals();
