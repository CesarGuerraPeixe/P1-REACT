import styles from './styles.module.css';

export const Input = ({ title, ...rest }) => {
    return <div className={styles.labeledInput}>
        <p>{title}</p>
        <input {...rest} />
    </div>
};