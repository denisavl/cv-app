/* eslint-disable react/prop-types */
export default function DeleteButton({onClick}){
    return (
        <button className="delete-item" onClick={onClick}>
            <span>x</span>
        </button>
    )
}