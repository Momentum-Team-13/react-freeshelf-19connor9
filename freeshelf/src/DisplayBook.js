import "./App.css"
import { useState } from "react"
import IconMaker from "./IconMaker.js"

function DisplayBook(props) {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div>Hello World!</div>
            <div> {props.book.title}</div>
            <div>{props.book.author}</div>
            <div>{props.book.shortDescription}</div>
            <img width="100px"
                src={props.book.coverImageUrl ? props.book.coverImageUrl : "default_book_cover.jpeg"} alt="" />

            <button onClick={() => setOpen(!open)}>
                <IconMaker open={open}></IconMaker>
            </button>
            {open ? (
                <div>
                    <a href={props.book.url}>Link to the book</a>
                    <div>{props.book.publisher ? props.book.publisher : 'None found'}</div>
                    <div>{props.book.publicationDate ? props.book.publicationDate : 'No data available'}</div>
                    <div>{props.book.detailedDescription}</div>
                </div>
            ) : ("")}


        </div >
    )
}
export default DisplayBook;