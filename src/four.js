 function F4(){
//     const arr =[1,2,3,4];
//     return(
//         <div>
//    {arr.map((itm)=>(
//       <h1>{itm}</h1>
//    ))}
//    </div>
// );
const arr=[1,2,3,4];
const list=arr.map((arr,index)=> <li key ={index}>{arr}</li>);
return(
    <div>
        <h1>list:</h1>
        <ul>{list}</ul>
    </div>

)
}
export default F4;