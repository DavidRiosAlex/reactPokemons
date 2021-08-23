import styles from './SideBar.module.scss';

const SideBar = ({ children, CustomNavBar }) => {
    return (
        <div className={styles.container}>
            {children}
            <div className={styles.sidebarContainer}>
                { CustomNavBar && <CustomNavBar/>}
            </div>
        </div>
    )
}

export default SideBar;