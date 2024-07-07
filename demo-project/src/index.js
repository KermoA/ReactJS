import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedSalary: null,
    };
  }

  getUpdatedSalary = (salary) => {
    this.setState({ updatedSalary: salary });
  };

  render() {
    return (
      <div>
        <h1>Employee Component...</h1>
        <p>
          <label>Id: <b>{this.props.Id}</b></label>
        </p>
        <p>
          <label>Name: <b>{this.props.Name}</b></label>
        </p>
        <p>
          <label>Location: <b>{this.props.Location}</b></label>
        </p>
        <p>
          <label>Total Salary: <b>{this.props.Salary}</b></label>
        </p>
        <p>
          <label>Updated Salary: <b>{this.state.updatedSalary}</b></label>
        </p>
        <Salary 
          BasicSalary={this.props.BasicSalary} 
          HRA={this.props.HRA}
          SpecialAllowance={this.props.SpecialAllowance} 
          onSalaryChanged={this.getUpdatedSalary}
        />
      </div>
    );
  }
}

class Salary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: this.props.BasicSalary,
      hra: this.props.HRA,
      sa: this.props.SpecialAllowance,
    };
    this.basicSalaryRef = React.createRef();
    this.hraRef = React.createRef();
    this.saRef = React.createRef();
  }

  updateSalary = () => {
    const salary = 
      parseInt(this.basicSalaryRef.current.value) + 
      parseInt(this.hraRef.current.value) + 
      parseInt(this.saRef.current.value);
    this.props.onSalaryChanged(salary);
  };

  render() {
    return (
      <div>
        <h1>Salary Details...</h1>
        <p>
          <label>
            Basic Salary: <input type="text" defaultValue={this.state.basic} ref={this.basicSalaryRef} />
          </label>
        </p>
        <p>
          <label>
            HRA: <input type="text" defaultValue={this.state.hra} ref={this.hraRef} />
          </label>
        </p>
        <p>
          <label>
            Special Allowance: <input type="text" defaultValue={this.state.sa} ref={this.saRef} />
          </label>
        </p>
        <button onClick={this.updateSalary}>Update</button>
      </div>
    );
  }
}

const element = (
  <Employee 
    Id="101" 
    Name="Kermo" 
    Location="Tallinn" 
    Salary="50000" 
    BasicSalary="25000" 
    HRA="10000"
    SpecialAllowance="15000"
  />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

reportWebVitals();


// class CountCharacters extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       message:''
//     };
//   }

//   onMessageChange(text){
//     this.setState({
//       message:'Message has '+text.length+' number on Characters'
//     });
//   }
  
//   render(){
//     return <div>
//       <h2>Welcome to Count Characters Component...</h2>
//       <p>
//         <label>Enter Message : <input type="text" onChange={e=>this.onMessageChange(e.target.value)}></input></label>
//       </p>
//       <p>
//         <label>{this.state.message}</label>
//       </p>
//     </div>
//   }
// }

// class Employee extends React.Component{
//   state={counter:0};
//   addEmployee=()=>{
//     this.setState({counter:this.state.counter+1});
//     // this.counter=this.counter+1;
//     // alert("Adding a New Employee");
//     // alert('Add Employee Button is Clicked ' + this.counter+' times');
//   }
//   render(){
//     return <div>
//       <h2>Welcome to Employee Component...</h2>
//       <p>
//         <button onClick={this.addEmployee}>Add Employee</button>
//       </p>
//       <p>
//         <label>Add Employee Button is Clicked : <b>{this.state.counter}</b> times</label>
//       </p>
//     </div>
//   }
// }

// const element=<CountCharacters></CountCharacters>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// class Employee extends React.Component{
//   constructor(props){
//     super(props);
//     console.log(this.props);
//   }
//   render(){
//     return <div>
//       <h2>Employee Details...</h2>
//       <p>
//         <label>Employee ID : <b>{this.props.Id}</b></label>
//       </p>
//       <p>
//         <label>Employee Name : <b>{this.props.Name}</b></label>
//       </p>
//       <p>
//         <label>Employee Location : <b>{this.props.Location}</b></label>
//       </p>
//       <p>
//         <label>Employee Salary : <b>{this.props.Salary}</b></label>
//       </p>
//       <Department DeptName={this.props.DeptName} HeadName={this.props.HeadName}></Department>
//     </div>
//   }
// }

// class Department extends React.Component{
//   render(){
//     return <div>
//       <h2>Department Details...</h2>
//       <p>
//         <label>Dept Name : <b>{this.props.DeptName}</b></label>
//       </p>
//       <p>
//         <label>Head Name : <b>{this.props.HeadName}</b></label>
//       </p>
//     </div>
//   }
// }

// const element=<Employee Id="101" Name="Kermo" Location="Tallinn" Salary="4000" DeptName="Dev" HeadName="Kermo Tech"></Employee>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// var DisplayEmployeeInfo=(employee)=>{
//   return <div>
//     <h1>Employee Details...</h1>
//     <p>
//       <label>Employee ID : <b>{employee.Id}</b></label>
//     </p>
//     <p>
//       <label>Employee Name : <b>{employee.Name}</b></label>
//     </p>
//     <p>
//       <label>Employee Location : <b>{employee.Location}</b></label>
//     </p>
//     <p>
//       <label>Employee Salary : <b>{employee.Salary}</b></label>
//     </p>
//     <Department deptName={employee.deptName} headName={employee.headName}></Department>
//   </div>;
// }

// const Department=(deptInfo)=>{
//   return <div>
//     <p>Dept Name is : <b>{deptInfo.deptName}</b></p>
//     <p>Dept Head is : <b>{deptInfo.headName}</b></p>
//   </div>;
// }

// const element=<DisplayEmployeeInfo Id="101" Name="Kermo" Location="Tallinn" Salary="4000" deptName="UI Dev" headName="Kermo Tech"></DisplayEmployeeInfo>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

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
