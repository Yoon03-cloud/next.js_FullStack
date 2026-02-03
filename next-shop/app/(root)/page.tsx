import CarouselComponent from "@/component/carousel";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="bg-red-600 text-xl font-bold">
        Welcome to the Next.js Shop! - {new Date().toTimeString()}
      </h1>
      {/* <CarouselComponent /> */}
      <Link href="/login">Already have an account? Login.</Link>
      <Link href="/register">Don&apos;t have an account? Register.</Link>
    </div>
  );
}
