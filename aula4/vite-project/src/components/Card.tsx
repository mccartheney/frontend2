
interface CardProps {
    title: string;
    description: string;
    button: string;
}

const Card  = ({ title, description, button } : CardProps) => {
    return (
        <div style={styles.card} >
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.description}>{description}</p>
            <button style={styles.button}>{button}</button>
        </div>
    );
}

const styles = {
    card: {
        margin : "20px",
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        width : "100px",
        boxShadow: '0 4px 8px rgba(105, 105, 105, 0.1)',
    },
    title: {
        fontSize: '1.5em',
        marginBottom: '8px',
    },
    description: {
        fontSize: '1em',
        marginBottom: '16px',
    },
    button: {
        padding: '8px 16px',
        fontSize: '1em',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    }
};

export default Card;