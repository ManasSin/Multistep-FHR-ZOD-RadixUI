import Form from "@/components/screens/Form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-fit flex-col items-center justify-between p-[5%] max-w-xl md:max-w-2xl lg:max-w-5xl w-full mx-auto">
      <div className="container">
        <Form />
      </div>
    </main>
  );
}
