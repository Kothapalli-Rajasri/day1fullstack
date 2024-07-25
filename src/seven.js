function Seven(){
    const name=['1','2','3']
    return(
        <div>
            {/* <ul>
                {
                    name.map((name,index)=>
                    (<li key={index}>{name}</li>)
                    )
                }

            </ul> */}
                 {
                    name.map((name,index)=>
                    (<div key={index}>{name}</div>)
                    )
                }
            
        </div>

    );
}
export default Seven;