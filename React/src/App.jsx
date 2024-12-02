import "./App.css";
import Student from "./components/student/Student";
import StudentState from "./components/student/studentstate/studentstate";
import Imagemanipulation from "./Imagemanipulation";


function App() {
  const data = [{ name: "Atharv", rollno: "42", branch: "CSE", section: "A" },
    { name: "Atharv", rollno: "42", branch: "CSE", section: "A" },
    { name: "Atharv", rollno: "42", branch: "CSE", section: "A" }
  ];
  return (
    <>
      {/* <div className="college-header">
        ABES Engineering College
      </div> */}
      <div style={{display:"flex"}}>
        {/* <Student data={data[0]}></Student>
        <Student data={data[1]}></Student>
        <Student data={data[2]}></Student> */}
      {/* <Student name={data.name} rollno={data.rollno} branch={data.branch} section={data.section}/>
      <Student name={data.name} rollno={data.rollno} branch={data.branch} section={data.section}/>
      <Student name={data.name} rollno={data.rollno} branch={data.branch} section={data.section}/> */}
      </div>
      <div>      <StudentState></StudentState>
      </div>
      <div>
        <Imagemanipulation></Imagemanipulation>
      </div>
    </>
  );
}

export default App;