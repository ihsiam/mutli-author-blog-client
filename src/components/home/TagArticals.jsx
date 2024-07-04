import { useParams } from "react-router-dom";

export default function TagArticals() {
  const { tag } = useParams();
  return (
    <div>
      <h1>tag Articals</h1>
      <h1>{tag}</h1>
    </div>
  );
}
