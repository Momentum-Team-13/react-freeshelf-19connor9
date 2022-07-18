import "./App.css"

function IconMaker(props) {
    if (props.open) {
        return (<p>&#9650;</p>)
    }
    else {
        return <p>&#9660;</p>
    }

} export default IconMaker