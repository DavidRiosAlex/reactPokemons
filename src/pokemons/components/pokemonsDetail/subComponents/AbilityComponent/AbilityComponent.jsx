import styles from './AbilityComponent.module.scss';

const AbilityComponent = ({ name }) => {
    return (
        <div className={styles.skillBox} >
            <div className={styles.label}>{name}</div>
        </div>
    )
};

export default AbilityComponent;