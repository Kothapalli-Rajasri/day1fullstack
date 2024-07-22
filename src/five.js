export default function  F5()
{
  var isStudent=true;
//   let voteable = (isStudent=== true) ? "Hi":"Hello";
//   return(
//       <div>
//       <h1>{voteable}</h1>
//       </div>
//   );

if (isStudent=== true){
    return(
        <div><h1>study</h1></div>
    )
}
else{
    return(
        <div><h1>Not Study</h1></div>
    )
}
}