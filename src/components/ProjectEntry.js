function ProjectEntry(props) {
    var title = props.title;
    var description = props.description;
    var url = props.url;

    return (
        <div className="projectEntry">
            <h4>{title}</h4>
            <p>{description}</p>
            <a href={url} target="_blank">Check it out!</a>
        </div>
    );
}
  
  export default ProjectEntry;
  