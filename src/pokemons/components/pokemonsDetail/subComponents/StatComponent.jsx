
const StatComponent = ({ title, effort, base }) => {
    return (
        <div style={{ marginTop: '20px' }} >
            <div>{title}</div>
            <div style={{ marginLeft: '24px'}}>
                <div>effort: {effort}</div>
                <div>base: {base}</div>
            </div>
        </div>
    )
};

export default StatComponent;