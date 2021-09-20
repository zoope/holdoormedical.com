export default function Homepage(props: any) {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}
