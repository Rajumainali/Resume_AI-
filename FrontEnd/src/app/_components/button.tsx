import { Button } from "../../components/ui/button";
interface ButtonDemoProps {
  name: string;
}

export function ButtonDemo({ name }: ButtonDemoProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>{name}</Button>
    </div>
  );
}
