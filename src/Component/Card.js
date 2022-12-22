export default function Card ({ children }) {
    const CardStyle = {
        width: '200px',
        height: '200px',
        border: '1.5px solid lightgrey',
        borderRadius: '2px',
        padding: '4px',
        margin: '4px',
    }

    return (
        <div styl={CardStyle}>
            {children}
        </div>
    )
    
}