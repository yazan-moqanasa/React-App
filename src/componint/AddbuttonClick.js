const Add=(props)=>{
    const btnTitle=(props.title) ? props.title:"Add to Card"
    
    /*const btnTitle=()=>{
        if(props.title)
        {
            return props.title
        }
        else
        {
        return"Add to Card"
    }
}*/
    return(
      <button type="button" className="btn btn-outline-dark">{btnTitle}</button>
    )
}

export default Add