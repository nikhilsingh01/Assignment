const Header = () => {
    const containerStyle = {
        background: 'Blue',
        color: '#f0f2f5',
        display: 'flex', // Make the container a flex container
        justifyContent: 'space-between', // Apply space around the flex items
        alignItems: 'center', // Align items vertically in the center
    };

    const itemStyle = {
        margin: '5px 10px',
        padding:'5px 10px' // Add margin around the items
    };

    return (
        <div style={containerStyle}>
            <span style={itemStyle}>
                <strong>Refer & Earn</strong> - Start Industrial With WorldRef
            </span>
            <button style={{...itemStyle,borderRadius:'15px'}}>Refer & Earn</button>
        </div>
    );
};

export default Header;
