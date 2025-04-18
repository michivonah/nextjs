import LikeButton from "./like-button";

function Header({ title }){
  return (<h1>{title ? title : 'Default title'}</h1>);
}

export default function HomePage(){
  const names = ['Max Meier', 'Josef Berchtold', 'Margrit Barmettler'];

  return (
    <div>
      <Header title="React" />
      <Header title="something new" />

      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <LikeButton />
    </div>
  );
}