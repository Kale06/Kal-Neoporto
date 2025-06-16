export function Frame({children}){

    return (
        <div className="frame" style={{
            width:"100%",
            border:"1px solid white",
            padding:"25px 10px"
        }}>
            {children}
        </div>
    )
}