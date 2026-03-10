import project from './assets/projects/project.png'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src= {project} alt="project"></img>
            <h2 className="card-title">project 1</h2>
            <p className='card-text'>description</p>
            <br></br>
        </div>
    );
}
export default Card