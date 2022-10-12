const Images = ({ nom, email, id }) => {
    return (
        <div className="card" >
            <img alt='imageRobots' src={`https://robohash.org/${id}`} />
            <div>
                <h2>{nom}</h2>
                <h2>{email}</h2>
            </div>
        </div>
    );
};


export default Images;