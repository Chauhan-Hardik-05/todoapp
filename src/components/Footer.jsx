import style from "./footer.module.css";
export default function Footer({ completedTask, totalTask }) {
  return (
    <div className={style.footer}>
      <span className={style.item}>Completed Task : {completedTask}</span>
      <span className={style.item}>Total Task : {totalTask}</span>
    </div>
  );
}
