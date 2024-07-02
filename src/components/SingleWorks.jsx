export default function SingleWorks({ data }) {
  const { image, id, type, name, technology } = data;

  return (
    <div className="card">
      <img className="card__img" src={image} alt="working" />
      <div className="card__content bg-slate-300/30 dark:bg-white/10 backdrop-blur-[10px] text-left p-2">
        <p className="text-xs mb-5">{type}</p>
        <h2 className="text-xl mb-1">{name}</h2>
        <ul>
          {technology.split(",").map((single) => (
            <li className="text-sm">&#128073; {single}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
