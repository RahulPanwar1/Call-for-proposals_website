import React from 'react'
// import { Table } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import validator from 'validator';
import './TableStruc.css'

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function isValidUrl(arr) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
      if(validator.isURL(element)){return element}
  }
  return null
};



const objMap=(obj)=>{
  let ans=[]
  let string = null
  let flag=false
  let ss=""
  Object.keys(obj).forEach(function(key, index) {
    ss+=`  ${obj[key]}`
    if (key==="links") {
      const str=isValidUrl(obj[key])
      // console.log(str);
      if(str!==null){ans.push((<td><a href={str} target="_blank"><button class="button_link">Link</button></a></td>));}
    }
    else if(obj[key]!==""&&!isNumeric(obj[key])&&obj[key].length>=20&&!flag){ans.push(<td>{obj[key]}</td>);flag=true;string = obj[key]}

  });
  //  console.log(ss);
  if(ans.length<2){
    if(ans.length==0)return []
    else{
      if(string!=null&&string.length<40)return []
      else if(string ==null)return []
      else if(string!=null&&string.length>=40)ans.push(<td>N.A.</td>)
    }
    
  }
  return ans
}



const TableStruc = () => {
  const [data, setData] = useState([]);
const getData = () => {
  fetch( 'http://127.0.0.1:8001/file', {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
  .then(function (response) {
    // console.log(response);
    return response.json();
  })
  .then(function (myJson) {
      // console.log(myJson);
      setData(myJson);
    });
  };
  let num=1
  useEffect(() => {
    getData();
 }, []);

 
  return (
    
    <div>
      {/* <h1>hello</h1> */}
      <br></br>
      <br></br>
      <div className="DataTable">
        <table>
          <thead>
            <tr>
                {/* {   
                  data.length > 0 && Object.keys(data[0]).map((item) => {
                        return <th>{item}</th>
                      }
                      )
                   
                    } */}
                <th>#</th>
                <th>Title for Call For Proposals</th>
                <th>Links</th>
              
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <>{item.map((i)=>{
                  if (Object.keys(i).length !== 0) {
                    const objm=objMap(i)
                      if (objm.length>1) {
                        return (<tr><td>{num++}</td>{objm}</tr>)
            
                      }
                    }
                })}</>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableStruc



// const checkDates=async(url,s)=> {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({string:s}), // body data type must match "Content-Type" header
//     });
//      console.log(await response.json()); // parses JSON response into native JavaScript objects
//   }