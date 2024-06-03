import styles from './styles.module.css';

export const Input = ({ ...rest }) => {
    return <div className={styles.labeledInput}>
        <input {...rest} />
    </div>
};