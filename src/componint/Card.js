import AddbuttonClick from "./AddbuttonClick"


const Card=(props)=>{ 
           const classes= "card" + props.className

    return(

        
            <div className="col-4">
              <div className={classes}>
    <div classNamee="card-body">
      <h5 classNamee="card-title">{props.title}</h5> 
      <p classNamee="card-text">{props.desc}</p>
    <AddbuttonClick title={props.btntitle}/>
                </div>
              </div>

            </div>
         


    )

}

export default Card