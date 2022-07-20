import "./App.css"
import { useState } from "react"
import IconMaker from "./IconMaker.js"

function DisplayBook(props) {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="aBook">
                <div>
                    <div className="bookTitle"> {props.book.title}</div>
                    <div>Written By {props.book.author}</div>
                    <div>{props.book.shortDescription}</div>
                </div>
                <img width="100px"
                    src={props.book.coverImageUrl ? props.book.coverImageUrl : "default_book_cover.jpeg"} alt="" /><br></br></div >

            <button onClick={() => setOpen(!open)}>
                <IconMaker open={open}></IconMaker>
            </button>
            {open ? (
                <div className="extraDescription">
                    <a href={props.book.url}>Link to the book</a>
                    <div>Published by: {props.book.publisher ? props.book.publisher : 'None found'}</div>
                    <div>Publication date: {props.book.publicationDate ? props.book.publicationDate : 'No data available'}</div>
                    <div>{props.book.detailedDescription}</div>
                </div>
            ) : ("")}



        </div>
    )
}
export default DisplayBook;