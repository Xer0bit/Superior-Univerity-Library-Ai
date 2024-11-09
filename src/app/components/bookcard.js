import Image from "next/image";

export default function BookCard({ title, description, imageUrl }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transform transition-transform hover:scale-105">
      <Image className="w-full" src={imageUrl} alt={title} width={400} height={200} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
