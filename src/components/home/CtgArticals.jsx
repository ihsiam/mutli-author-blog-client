import { useParams } from "react-router-dom";

export default function CtgArticals() {
  const { ctg } = useParams();
  return (
    <div>
      <h1>Category articals</h1>
      <h1>{ctg}</h1>
    </div>
  );
}
