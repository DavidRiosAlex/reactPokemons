import styles from './StatComponent.module.scss';

const svgFiles = (type) => {
    if (type === 'speed') return 'https://www.svgrepo.com/show/148/speed.svg';
    if (type === 'attack') return 'https://www.svgrepo.com/show/266222/strength.svg';
    if (type === 'special-attack') return 'https://www.svgrepo.com/show/324604/healthy-exercise-strength-workout-muscular-lifting-bodybuilding.svg';
    if (type === 'defense') return 'https://www.svgrepo.com/show/202268/shield-defense.svg';
    if (type === 'hp') return 'https://www.svgrepo.com/show/89567/health-care.svg';
    if (type === 'special-defense') return 'https://www.svgrepo.com/show/216631/shield-defense.svg';
}


const StatComponent = ({ title, effort, base }) => {
    return (
        <div className={styles.StatBox}>
            <div className={styles.statTitle}>
                {title}
            </div>
            <img src={svgFiles(title)} alt={title}/>
            <hr/>
            <div className={styles.statDescription}>
                <div>effort: {effort}</div>
                <div>base: {base}</div>
            </div>
        </div>
    )
};

export default StatComponent;